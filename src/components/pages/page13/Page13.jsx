import React from 'react'
import Footer from '../../common/Footer'
import { Page, Text, View } from '@react-pdf/renderer'
import Heading from '../../common/Heading'
import PathogenTable from './PathogenTable'
import FoodTable from '../../common/FoodTable'

function Page13({ data }) {
    const Food =  data.pathogenFoodRecomendation?(data.pathogenFoodRecomendation.length?data.pathogenFoodRecomendation.join(", "):""):""

    return (
        <Page style={{ padding: "40px 40px 0" }}>
            <Heading text={"Pathogens"} marginBottom='6px' />
            <Text style={{ fontFamily: "Nunito", fontSize: "13px", textAlign: "justify", marginBottom: "5px" }}>
                Intestinal bacteria play a crucial role in maintaining immune and metabolic homeostasis
                and protecting against pathogens. Altered gut bacterial composition (dysbiosis) has been
                associated with the pathogenesis of many inflammatory diseases and infections.
            </Text>
            <PathogenTable data={data.pathogen} />
            <View style={{ display: "flex", flexDirection: "row", gap: "30px", marginTop: "11px" }}>
                <View style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center", fontFamily: "NunitoBold", fontSize: "14px" }}>
                    <View style={{ width: "13.5px", height: "13.5px", backgroundColor: "#FF1616", borderRadius: "50%" }} />
                    <Text>Pathogen</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center", fontFamily: "NunitoBold", fontSize: "14px" }}>
                    <View style={{ width: "13.5px", height: "13.5px", backgroundColor: "#FDCB58", borderRadius: "50%" }} />
                    <Text>Moderately Pathogenic</Text>
                </View>
            </View>
            <View style={{ margin: "10px 0", }}>
                <Text style={{ fontFamily: "NunitoBold", fontSize: "14px" }}>Indication:</Text>
                <Text style={{ fontFamily: "NunitoLitalic", fontSize: "13px" }}>
                    {data.pathogenIndication}
                </Text>
            </View>
            <FoodTable Food={Food} />
            <Footer name={data.patientName} barcode={data.barcode} pageNo="13" />
        </Page>
    )
}

export default Page13
