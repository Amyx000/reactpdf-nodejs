import { Image, Page, View } from '@react-pdf/renderer'
import React from 'react'
import Footer from '../../common/Footer'
import Heading from '../../common/Heading'
import RowSection from './RowSection'
import PieChart from '../../common/PieChart'


function Page10({ charts, data }) {

    return (
        <Page style={{ padding: "40px 40px 0" }}>
            <Heading text="Abundant Species" />
            <View style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                <RowSection data={data.topSpeciesBacteria} title="Top Bacterial Species" color="#1034A6" />
                <RowSection data={data.topSpeciesFungi} title="Top Fungal Species" color="#0080FF" tablePosition='right' />
                <RowSection data={data.topSpeciesArchaea} title="Top Archaeal Species" color="#008081" />
            </View>
            <PieChart chartData={charts[3]} top="140px" right="60px" />
            <PieChart chartData={charts[4]} top="380px" left="60px" />
            <PieChart chartData={charts[5]} bottom="55px" right="60px" />
            <Footer name={data.patientName} barcode={data.barcode} pageNo="10" />
        </Page>
    )
}

export default Page10
