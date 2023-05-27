import { Text, View } from '@react-pdf/renderer'
import React from 'react'

function FoodTable({ Food }) {
    return (
        <View>
            <View style={{ fontFamily: "NunitoExBold", color: "white", backgroundColor: "black", padding: "5px 3px", fontSize: "11px", marginBottom: "1px" }}>
                <Text>FOOD RECOMMENDATION</Text>
            </View>
            <View style={{ fontFamily: "NunitoBold", fontSize: "10.5px", backgroundColor: "#177DC0", opacity: 0.3, padding: "5px" }}>
                <Text style={{ opacity: "1" }}>
                    {Food || "N.A"}
                </Text>
            </View>
        </View>
    )
}

export default FoodTable
