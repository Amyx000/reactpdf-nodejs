import React from 'react'
import { View, Image, Text } from "@react-pdf/renderer"
import { convertDataForChart } from '../../utils/ConvertData'
import { genusData } from '../../data'

function PieChart({ chartimg }) {
    const chartData = convertDataForChart(genusData)
    return (
        <View style={{ padding: "50px" }}>
            <Image src={`data:image/png;base64,${chartimg}`} style={{ width: "200px", marginLeft: "40px", marginBottom: "30px" }} />
            <View style={{ display: "flex", flexDirection: "row", gap: "7px", flexWrap: 'wrap', width: "60%", fontSize: "10px", textAlign: "center", justifyContent: "center" }}>
                {chartData.labels.map((item, i) => {
                    return (
                        <View key={i} style={{ display: "flex", flexDirection: 'row', alignItems: "center", gap: "5px" }}>
                            <View style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: chartData.backgroundColor[i] }} />
                            <Text>{item}{`(${chartData.data[i]}%)`}</Text>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

export default PieChart
