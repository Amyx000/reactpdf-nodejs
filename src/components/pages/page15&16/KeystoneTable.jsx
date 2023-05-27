import { Text, View } from '@react-pdf/renderer'
import React from 'react'

function KeystoneTable({ data }) {
    const rangeColor ={
        "Low":"#FFDD7A",
        "In-Range":"#58DD85",
        "High":"#E86767"
    }
    return (
        <View>
            <View style={{ display: "flex", flexDirection: "row", alignItems: 'center', border: "1px solid black", fontFamily: 'NunitoBold', fontSize: "9px", height: "21.45px", padding: "0 5px", marginBottom: "15px" }}>
                <Text style={{ width: "40%" }}>KEYSTONE SPECIES</Text>
                <Text style={{ width: "40%", textAlign: "center" }}>RELATIVE ABUNDANCE</Text>
                <Text style={{ width: "20%" }}>RANGE</Text>
            </View>
            <View style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                {data.map((obj, i) => {
                    return (
                        <View key={i} style={{ fontFamily: "NunitoBold", fontSize: "11px", backgroundColor: rangeColor[obj.range], display: "flex", flexDirection: "row", padding: "2px 5px" }}>
                            <Text style={{ width: "40%" }}>{obj.bacteria.replace(/_/g, " ")}</Text>
                            <Text style={{ textAlign: "center", width: "40%" }}>{obj.abundance}</Text>
                            <Text style={{ width: "20%" }}>{obj.range}</Text>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

export default KeystoneTable
