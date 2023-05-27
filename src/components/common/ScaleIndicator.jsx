import { Text, View } from '@react-pdf/renderer'
import React from 'react'

function ScaleIndicator({ width = "320.42px", range, top, right, left }) {
    const pointerPositions = {
        "Below Average": "14%",
        "Fair": "34%",
        "Good": "47%",
        "Very Good": "66%",
        "Excellent": "88%"
    }
    return (
        <View style={{ position: "absolute", top, right, left, width }}>
            <View style={{ position: "relative", display: "flex", flexDirection: "row", gap: "1px" }}>
                <View style={{ backgroundColor: "#D82727", height: "3.6px", width: "30%" }} />
                <View style={{ backgroundColor: "#FBA000", height: "3.6px", width: "12.5%" }} />
                <View style={{ backgroundColor: "#F8BA31", height: "3.6px", width: "12.5%" }} />
                <View style={{ backgroundColor: "#54C45B", height: "3.6px", width: "25%" }} />
                <View style={{ backgroundColor: "#159453", height: "3.6px", width: "20%" }} />
                <View style={{ position: "absolute", top: "-33px", left: pointerPositions[range], display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <View style={{ width: "15px", height: "15px", borderRadius: "50%", backgroundColor: "#177DC0" }} />
                    <View style={{ width: "1px", height: "11.5px", borderRadius: "50%", backgroundColor: "#177DC0" }} />
                </View>
            </View>
            <View style={{ position: "relative", display: "flex", flexDirection: "row", gap: "1px", fontFamily: "NunitoBold", fontSize: "11px" }}>
                <Text style={{ textAlign: "center", width: "30%" }} >Below Average</Text>
                <Text style={{ textAlign: "center", width: "12.5%" }} >Fair</Text>
                <Text style={{ textAlign: "center", width: "12.5%" }} >Good</Text>
                <Text style={{ textAlign: "center", width: "25%" }} >Very Good</Text>
                <Text style={{ textAlign: "center", width: "20%" }} >Excellent</Text>
            </View>

        </View>
    )
}

export default ScaleIndicator
