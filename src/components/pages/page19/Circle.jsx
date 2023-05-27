import { Text, View } from '@react-pdf/renderer'
import React from 'react'

function Circle({ size, name, color, top, left, fontSize = "18px", padding = "0px" }) {
    return (
        <View style={{ padding, backgroundColor: color, width: size, height: size, borderRadius: "50%", color: "white", display: "flex", justifyContent: "center", alignItems: "center", fontFamily: "NunitoBold", fontSize, position: "absolute", top, left }}>
            <Text style={{ textAlign: "center" }}>{name}</Text>
        </View>
    )
}

export default Circle
