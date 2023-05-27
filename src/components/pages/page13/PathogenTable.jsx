import { Text, View } from '@react-pdf/renderer'
import React from 'react'

function PathogenTable({ data }) {

    return (
        <View style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: 'center', border: "1px solid black", fontFamily: 'NunitoBold', fontSize: "9px", height: "21.45px", padding: "0 5px" }}>
                <Text style={{ width: "200px" }}>PATHOGENS DETECTED</Text>
                <Text style={{ width: "150px", textAlign: "center" }}>RELATIVE ABUNDANCE</Text>
                <Text style={{ width: "150px", textAlign: "right" }}>TAG</Text>
            </View>
            <View style={{ border: "1px solid black", fontFamily: 'NunitoBold', fontSize: "12px", }}>
                {data.map((obj, i) => {
                    return (
                        <View key={i} style={{ display: "flex", flexDirection: "row", alignItems: 'center', padding: "2px 5px" }}>
                            <Text style={{ width: "200px", color: "#177DC0" }}>{obj.bacteria.replace(/_/g, " ")}</Text>
                            <Text style={{ width: "150px", textAlign: "center" }}>{obj.abundance}</Text>
                            <View style={{ width: "150px", display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
                                <View style={{ width: "13.5px", height: "13.5px", backgroundColor: (+obj.abundance) > 0.6 ? "#FF1616" : "#FDCB58", borderRadius: "50%" }} />
                            </View>
                        </View>
                    )
                })}

            </View>
        </View>
    )
}

export default PathogenTable
