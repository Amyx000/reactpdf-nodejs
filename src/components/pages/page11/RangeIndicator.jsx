import { Image, StyleSheet, Text, View } from '@react-pdf/renderer'
import React from 'react'
import { ImgToBase64 } from '../../../utils/CustomFunctions'

const style = StyleSheet.create({

})

function RangeIndicator({ startValue = "0", endValue = "1", value = startValue }) {
    const factorValue = (((+value) - (+startValue)) / ((+endValue) - (+startValue))).toFixed(6)
    return (
        <View style={{ fontFamily: "NunitoBold", fontSize: "14px" }}>
            <View style={{ position: "relative", width: "90%" }}>
                <Image src={ImgToBase64(__dirname, "Bar.png")} />
                <Image src={ImgToBase64(__dirname, "Pointer.png")} style={{ position: "absolute", top: "-3px", left: `${(220 * factorValue) - 5}`, width: "21.42px", height: "21.42px" }} />
                {value !== startValue && value !== endValue && <Text style={{ position: "absolute", top: "-22px", left: `${(220 * factorValue) - 5}`, width: "21.42px", textAlign: "center" }}>{(+value).toFixed(3)}</Text>}
            </View>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "5px" }}>
                <Text>{startValue}</Text>
                <Text>{endValue}</Text>
            </View>
        </View>
    )
}

export default RangeIndicator
