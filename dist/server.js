"use strict";

var _react = _interopRequireDefault(require("react"));
var _express = _interopRequireDefault(require("express"));
var _CreatePdfBuffer = _interopRequireDefault(require("./libs/CreatePdfBuffer"));
var _PdfMain = _interopRequireDefault(require("./components/PdfMain"));
var _kafka = require("./utils/kafka");
var _FileUpload = _interopRequireDefault(require("./libs/FileUpload"));
var _updateDB = require("./libs/updateDB");
var _GenerateCharts = _interopRequireDefault(require("./libs/GenerateCharts"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const dotenv = require("dotenv");
dotenv.config({
  path: ".env"
});
require("./db/config");
const app = (0, _express.default)();
const run = async () => {
  await _kafka.consumer.subscribe({
    topic: 'report-generation-topic'
  });
  await _kafka.consumer.run({
    eachMessage: async ({
      topic,
      message
    }) => {
      try {
        const jsonData = JSON.parse(message.value.toString());
        console.log("PDF process started");
        const {
          doughnutChart,
          phylumChart,
          genusChart,
          bacteriaChart,
          fungiChart,
          archaeaChart
        } = await (0, _GenerateCharts.default)(jsonData);
        const PdfBuffer = await (0, _CreatePdfBuffer.default)( /*#__PURE__*/_react.default.createElement(_PdfMain.default, {
          data: jsonData,
          charts: [doughnutChart, phylumChart, genusChart, bacteriaChart, fungiChart, archaeaChart]
        }));
        const fileUrl = await (0, _FileUpload.default)(`DB_${jsonData.patientName}_Decode_Age.pdf`, PdfBuffer);
        await (0, _updateDB.updateStatusandTime)(jsonData.id, fileUrl);
        console.log("PDF Saved");
      } catch (error) {
        console.log(error);
      }
    }
  });
};
run();