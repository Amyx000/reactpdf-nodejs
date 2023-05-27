import { Text, View } from '@react-pdf/renderer'
import React from 'react'

function Heading({ text, line = "right", type = "large", marginBottom = "23px" }) {
    return (
        type === "large" ? <View style={{ display: "flex", flexDirection: line === "right" ? "row" : "row-reverse", gap: "20px", marginBottom }}>
            <Text style={{ fontFamily: "NunitoBold", fontSize: "27px" }}>{text}</Text>
            <View style={{ position: "relative", flexGrow: "1" }}>
                {line === "right" ? < View style={{ position: "absolute", left: "0", top: "20px", backgroundColor: "black", height: "3px", width: "500px" }} /> :
                    <View style={{ position: "absolute", right: "0", top: "20px", backgroundColor: "black", height: "3px", width: "500px" }} />}
            </View>
        </View> :
            <View style={{ display: "flex", flexDirection: line === "right" ? "row" : "row-reverse", gap: "20px", marginBottom }}>
                <Text style={{ fontFamily: "NunitoBold", fontSize: "18px" }}>{text}</Text>
                <View style={{ position: "relative", flexGrow: "1" }}>
                    {line === "right" ? < View style={{ position: "absolute", left: "0", top: "14px", backgroundColor: "black", height: "2px", width: "500px" }} /> :
                        <View style={{ position: "absolute", right: "0", top: "14px", backgroundColor: "black", height: "2px", width: "500px" }} />}
                </View>
            </View>
    )
}

export default Heading
