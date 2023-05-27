
import React from 'react';
import express from 'express';
const dotenv = require("dotenv")
dotenv.config({ path: ".env" })
import CreatePdfBuffer from './libs/CreatePdfBuffer';
import PdfMain from './components/PdfMain';
import { consumer } from './utils/kafka'
import FileUpload from './libs/FileUpload';
import { updateStatusandTime } from './libs/updateDB';
import GenerateChart from './libs/GenerateCharts';
require("./db/config")
const app = express()

const run = async () => {
  await consumer.subscribe({ topic: 'report-generation-topic' })
  await consumer.run({
    eachMessage: async ({ topic, message }) => {

      try {
        const jsonData = JSON.parse(message.value.toString())

        console.log("PDF process started")
        const {
          doughnutChart,
          phylumChart,
          genusChart,
          bacteriaChart,
          fungiChart,
          archaeaChart,
        } = await GenerateChart(jsonData);

        const PdfBuffer = await CreatePdfBuffer(<PdfMain data={jsonData} charts={[doughnutChart, phylumChart, genusChart, bacteriaChart, fungiChart, archaeaChart,]} />)
        const fileUrl = await FileUpload(`DB_${jsonData.patientName}_Decode_Age.pdf`, PdfBuffer)

        await updateStatusandTime(jsonData.id, fileUrl)
        console.log("PDF Saved")

      } catch (error) {
        console.log(error)
      }

    },
  })
}

run()

