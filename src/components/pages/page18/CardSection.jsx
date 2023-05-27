import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import ScaleIndicator from '../../common/ScaleIndicator'

function CardSection({ defination, data, headingWidth = "140px" }) {
    return (
        <View>
            <ScaleIndicator top="10px" right="0" range={data.remarks} />
            <View style={{ backgroundColor: "#177DC0", color: "white", fontFamily: "NunitoBold", fontSize: "20px", width: headingWidth, position: "relative", left: "-40px", paddingLeft: "40px" }}>
                <Text>{data.metabolicProfile.toUpperCase()}</Text>
            </View>
            <Text style={{ marginTop: "20px", fontFamily: "Nunito", fontSize: "9px" }}>
                {defination}
            </Text>
            <View style={{ marginTop: "10px" }}>
                <Text style={{ fontFamily: "NunitoB", fontSize: "10px" }}>Indications:</Text>
                <Text style={{ fontFamily: "NunitoItalic", fontSize: "9px" }}>
                    {data.curation}
                </Text>
            </View>
            <View style={{ marginTop: "9px" }}>
                <Text style={{ fontFamily: "NunitoB", fontSize: "10px" }}>Food Recommendation:</Text>
                <Text style={{ fontFamily: "NunitoM", fontSize: "9px" }}>
                    {data.recommendation}
                </Text>
            </View>
        </View>
    )
}

export default CardSection
