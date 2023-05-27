import React from 'react'
import { View, Image, Text } from "@react-pdf/renderer"

function PieChart({ chartData, legend = false, top, bottom, left, right, width = "170px" }) {
    return (
        legend ? <View style={{ position: "absolute", top, bottom, left, right, width, display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
            <Image src={`data:image/png;base64,${chartData.image}`} style={{ width: "70%" }} />
            <View style={{ display: "flex", flexDirection: "row", gap: "5px", flexWrap: 'wrap', fontSize: "7px", textAlign: "center", justifyContent: "center" }}>
                {chartData.labels.map((item, i) => {
                    return (
                        <View key={i} style={{ display: "flex", flexDirection: 'row', alignItems: "center", gap: "3px" }}>
                            <View style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: chartData.backgroundColor[i] }} />
                            <Text>{item}{`(${chartData.data[i]}%)`}</Text>
                        </View>
                    )
                })}
            </View>
        </View> :
            <View style={{ position: "absolute", top, bottom, left, right, width }}>
                <Image src={`data:image/png;base64,${chartData.image}`} style={{ width: "100%" }} />
            </View>
    )
}

export default PieChart
