import { Page, Text, View } from '@react-pdf/renderer'
import React from 'react'
import Heading from '../../common/Heading'
import Footer from '../../common/Footer'
import CardSection from './CardSection'

function Page14({ data }) {
    return (
        <Page style={{ padding: "40px 40px 0" }}>
            <Heading text={"Gut Enterotype"} />
            <View style={{ display: "flex", flexDirection: "row", gap: "40px" }}>
                <View style={{ width: "40%", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <View style={{ width: "200px", height: "65.5px", textAlign: "center", backgroundColor: "#177DC0", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", fontFamily: "NunitoBold" }}>
                        <Text style={{ fontSize: "26px" }}>{(+data.enterotype.Prevotella).toFixed(2)}</Text>
                        <Text style={{ fontSize: "18px" }}>Prevotella</Text>
                    </View>
                    <View style={{ width: "200px", height: "65.5px", textAlign: "center", backgroundColor: "#177DC0", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", fontFamily: "NunitoBold", opacity: "0.5" }}>
                        <Text style={{ fontSize: "26px", opacity: "1" }}>{(+data.enterotype.Bacteroides).toFixed(2)}</Text>
                        <Text style={{ fontSize: "18px", opacity: "1" }}>Bacteroides</Text>
                    </View>
                    <View style={{ width: "200px", height: "65.5px", textAlign: "center", backgroundColor: "#177DC0", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", fontFamily: "NunitoBold", opacity: "0.25" }}>
                        <Text style={{ fontSize: "26px", opacity: "1" }}>{(+data.enterotype.Ruminococcus).toFixed(2)}</Text>
                        <Text style={{ fontSize: "18px", opacity: "1" }}>Ruminococcus</Text>
                    </View>
                </View>
                <View style={{ width: "60%", display: "flex", flexDirection: "column", gap: "15px" }}>
                    <Text style={{ fontFamily: "NunitoBold", fontSize: "18px", color: "#177DC0" }}>Your Gut Type: Enterotype 1</Text>
                    <Text style={{ fontFamily: "NunitoLitalic", fontSize: "13px" }}>
                        {data.enterotypeRemarks}
                    </Text>
                    <Text style={{ fontFamily: "NunitoLitalic", fontSize: "13px" }}>
                        Bacteroides enterotype is associated with a diet
                        high in fats but low in fiber. Studies have
                        claimed that a high abundance of Bacteroides
                        maybe associated with diabetes and obesity.
                    </Text>
                </View>
            </View>
            <View style={{ marginTop: "57px", display: "flex", flexDirection: "column", gap: "15px" }}>
                <CardSection
                    img="food1.png"
                    heading="Enterotype 1"
                    subheading="Protein Favorite"
                    des="Especially for people who often eat meat: Bacteroides"
                    backgroundColor="#C9EEFF"
                />
                <CardSection
                    img="food2.png"
                    heading="Enterotype 2"
                    subheading="Fibre Favorite"
                    des="Especially for people who eat vegan or vegetarian food: Prevotella"
                    backgroundColor="#C9EEFF"
                />
                <CardSection
                    img="food3.png"
                    heading="Enterotype 3"
                    subheading="Omnivores"
                    des="Especially for people who prefer a balanced diet: Ruminococcus"
                    backgroundColor="#C9EEFF"
                />
            </View>
            <Footer name={data.patientName} barcode={data.barcode} pageNo="14" />
        </Page>
    )
}

export default Page14
