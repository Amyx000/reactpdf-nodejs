import { Image, Text, View } from '@react-pdf/renderer'
import React from 'react'
import { ImgToBase64 } from '../../../utils/CustomFunctions'

function CardSection({ img, heading, subheading, des, backgroundColor }) {
    return (
        <View style={{ display: "flex", flexDirection: "row", borderRadius: "13.8px", backgroundColor }}>
            <Image src={ImgToBase64(__dirname, img)} style={{ width: "50%" }} />
            <View style={{ width: "50%", fontFamily: "NunitoBold", padding: "10px 30px 10px 20px" }}>
                <Text style={{ fontSize: "18px", color: "#177DC0" }}>{heading}</Text>
                <Text style={{ fontSize: "15px" }}>{subheading}</Text>
                <Text style={{ fontSize: "12px", fontFamily: "NunitoLitalic" }}>{des}</Text>
            </View>
        </View>
    )
}

export default CardSection
