import { Font, Page, Text, View } from "@react-pdf/renderer"
import React from "react"
import Heading from "../../common/Heading"
import Footer from "../../common/Footer"
import PieChart from "../../common/PieChart"

function Page9({ charts, data }) {
    return (
        <Page style={{ padding: "40px 40px 0" }}>
            <Heading text="Gut Composition" />
            <View style={{ width: "50%" }}>
                <View style={{ position: "relative", left: "-40px", backgroundColor: "#177DC0", opacity: "0.47", width: "300px", height: "41.54px", color: "white", borderBottomRightRadius: "10px", borderTopRightRadius: "10px" }}>
                    <Text style={{ fontFamily: "NunitoBold", fontSize: "30px", textAlign: "center", opacity: "1" }}>Know your Gut</Text>
                </View>
                <View style={{ fontFamily: "NunitoL", fontSize: "13px", textAlign: "justify", marginTop: "30px" }}>
                    <Text style={{ marginBottom: "15px" }}>
                        Your microbiome is unique. Therefore, the
                        composition of the bacteria, archaea, fungi and
                        viruses in your gut may differ from that of the
                        average population.
                    </Text>
                    <Text>
                        Most of the DNA in your stool (~99%) is from
                        the microorganisms in your gut and only a
                        small amount (~1%) is from you, the host.
                        The microorganisms in your gut fall into four
                        main groups: bacteria, archaea (another form
                        of microscopic life), fungi, parasites and
                        viruses.
                    </Text>
                </View>
            </View>
            <View style={{ position: "absolute", top: "47.88%", left: "40px", width: "50%" }}>
                <Text style={{ fontFamily: "NunitoBold", fontSize: "24px", color: "#177DC0", textAlign: "center" }}>Phylum Profile</Text>
            </View>
            <View style={{ position: "absolute", top: "47.88%", right: "40px", width: "50%" }}>
                <Text style={{ fontFamily: "NunitoBold", fontSize: "24px", color: "#177DC0", textAlign: "center" }}>Genus Profile</Text>
            </View>
            <PieChart chartData={charts[0]} top="100px" right="0" legend={true} width="297px" />
            <PieChart chartData={charts[1]} top="450px" left="0" legend={true} width="297px" />
            <PieChart chartData={charts[2]} top="450px" right="0" legend={true} width="297px" />
            <Footer name={data.patientName} barcode={data.barcode} pageNo="09" />
        </Page>
    )
}

export default Page9
