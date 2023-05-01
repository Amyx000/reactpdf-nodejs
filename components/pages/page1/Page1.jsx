import { Page, Text, View, Image } from '@react-pdf/renderer'
import React, { useEffect, useState } from 'react'
import { createChart1 } from '../../../createChart'
import { convertDataForChart } from '../../../utils/ConvertData'
import { genusData } from '../../../data'
import PieChart from '../../common/PieChart'

function Page1({ data }) {

    return (
        <Page>
            <PieChart chartimg={data} />
        </Page>
    )
}

export default Page1
