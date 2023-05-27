import { Font, Image, Page, Text, View } from "@react-pdf/renderer"
import React from "react"
import Heading from "../../common/Heading"
import Line from "../../common/Line"
import Footer from "../../common/Footer"
import { ImgToBase64 } from "../../../utils/CustomFunctions"

function Page8({ data }) {
    const biomeScore = data.biomeScore["GMHI Score"]
    const scaleMaxValue = 10
    const angle = ((+biomeScore) * 90) / scaleMaxValue;
    return (
        <Page style={{ padding: "40px 40px 0" }}>
            <Heading text="Your Biome Score" />
            <Text style={{ fontFamily: "Nunito", fontSize: "13.5px", marginBottom: "28px" }}>
                Our Decode Biome Score is a biologically-interpretable Mathematical Score predicting
                the overall balance between the health promoting and health deteriorating species. A
                higher score is indicative of resistance towards various age-related diseases.
            </Text>
            <View style={{ display: "flex", flexDirection: "row", gap: "60.4px", alignItems: "center" }}>
                <Text style={{ color: "#177DC0", fontSize: "30px", fontFamily: "NunitoB" }}>{"< 0 SCORE"}</Text>
                <Text style={{ fontFamily: "NunitoBold", fontSize: "18px" }}>Unhealthy</Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row", gap: "87px", alignItems: "center" }}>
                <Text style={{ color: "#177DC0", fontSize: "30px", fontFamily: "NunitoB" }}>{"0 SCORE"}</Text>
                <Text style={{ fontFamily: "NunitoBold", fontSize: "18px" }}>Balanced microbial profile</Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row", gap: "60.4px", alignItems: "center" }}>
                <Text style={{ color: "#177DC0", fontSize: "30px", fontFamily: "NunitoB" }}>{"> 0 SCORE"}</Text>
                <Text style={{ fontFamily: "NunitoBold", fontSize: "18px" }}>Healthy gut score</Text>
            </View>
            <Line />
            <View style={{ fontFamily: "NunitoB", marginTop: "265px" }}>
                <Text style={{ color: "#177DC0", fontSize: "24.75px", textAlign: "center" }}>Your Biome Score : {(+biomeScore).toFixed(2)}</Text>
                <Text style={{ fontSize: "18px", marginTop: "20px" }}>Interpretation:</Text>
                <Text style={{ fontSize: "18px", fontFamily: "Nunito" }}>
                    {data.biomeScore.remark}
                </Text>
            </View>
            <Image src={ImgToBase64(__dirname, "cloud1.png")} style={{ width: "126.74px", position: "absolute", top: "388.9px", left: "-14px" }} />
            <Image src={ImgToBase64(__dirname, "cloud2.png")} style={{ width: "146.61px", position: "absolute", top: "374.48px", left: "450.49px" }} />
            <Image src={ImgToBase64(__dirname, "cloud3.png")} style={{ width: "88.23px", position: "absolute", top: "510.42px", left: "89px" }} />
            <Image src={ImgToBase64(__dirname, "cloud4.png")} style={{ width: "110.09px", position: "absolute", top: "496.13px", left: "385.48px" }} />
            <Image src={ImgToBase64(__dirname, "chart.png")} style={{ width: "422px", position: "absolute", top: "385px", left: "83px" }} />
            <Image src={ImgToBase64(__dirname, "needle.png")} style={{ width: "14.38px", position: "absolute", top: "431px", left: "285.7px", transformOrigin: "bottom center", transform: `rotate(${angle}deg)` }} />
            <Image src={ImgToBase64(__dirname, "semicircle.png")} style={{ width: "36.92px", position: "absolute", top: "550px", left: "275px" }} />
            <Footer name={data.patientName} barcode={data.barcode} pageNo="08" />
        </Page>
    )
}

export default Page8
