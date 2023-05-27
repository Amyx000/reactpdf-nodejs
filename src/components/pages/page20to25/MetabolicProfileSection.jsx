import { Image, Text, View } from '@react-pdf/renderer'
import React from 'react'
import { ImgToBase64 } from '../../../utils/CustomFunctions'
import ScaleIndicator from '../../common/ScaleIndicator'

function MetabolicProfileSection({ heading, data, img = "carb1.png" }) {

    let gap;
    let marginBottom

    (() => {
        if (Array.isArray(data)) {
            if (data.length > 2) {
                gap = "15px"
                marginBottom = "20px"
            } else {
                gap = "20px"
                marginBottom = "30px"
            }
        } else {
            gap = "20px"
            marginBottom = "30px"
        }
    })()

    return (
        <View>
            <View style={{ fontFamily: "NunitoBold", fontSize: "23px", backgroundColor: "#177DC0", width: "120%", padding: "5px", marginBottom }}>
                <Text>{heading}</Text>
            </View>
            {Array.isArray(data) ?
                <View style={{ display: "flex", flexDirection: "column", gap }}>
                    {data.map((obj, i) => {
                        return (
                            <View key={i} style={{ display: "flex", flexDirection: "row", position: "relative" }}>
                                <View style={{ width: '60%' }}>
                                    <Image src={ImgToBase64(__dirname, img)} style={{ width: "244px" }} />
                                </View>
                                <ScaleIndicator top="140px" left="0" range={obj.remarks} width='280px' />
                                <View style={{ width: '40%' }}>
                                    <View style={{ fontFamily: "NunitoBold", fontSize: "17px", backgroundColor: "#177DC0", color: "white", width: "120%", paddingLeft: "2px" }}>
                                        <Text>{obj.metabolicProfile}</Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontFamily: "NunitoB", fontSize: "13.88px", margin: "10px 0 1px" }}>Indications:</Text>
                                        <Text style={{ fontFamily: "NunitoM", fontSize: "10px" }}>
                                            {obj.curation}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontFamily: "NunitoB", fontSize: "13.88px", margin: "10px 0 1px" }}>Food Recommendation:</Text>
                                        <Text style={{ fontFamily: "NunitoM", fontSize: "10px" }}>
                                            {obj.recommendation}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </View>
                : (
                    <View style={{ display: "flex", flexDirection: "row", position: "relative" }}>
                        <View style={{ width: '60%' }}>
                            <Image src={ImgToBase64(__dirname, img)} style={{ width: "244px" }} />
                        </View>
                        <ScaleIndicator top="140px" left="0" range={data.remarks} width='280px' />
                        <View style={{ width: '40%' }}>
                            <View style={{ fontFamily: "NunitoBold", fontSize: "17px", backgroundColor: "#177DC0", color: "white", width: "120%", paddingLeft: "2px" }}>
                                <Text>{data.metabolicProfile}</Text>
                            </View>
                            <View>
                                <Text style={{ fontFamily: "NunitoB", fontSize: "13.88px", margin: "10px 0 1px" }}>Indications:</Text>
                                <Text style={{ fontFamily: "NunitoM", fontSize: "10px" }}>
                                    {data.curation}
                                </Text>
                            </View>
                            <View>
                                <Text style={{ fontFamily: "NunitoB", fontSize: "13.88px", margin: "10px 0 1px" }}>Food Recommendation:</Text>
                                <Text style={{ fontFamily: "NunitoM", fontSize: "10px" }}>
                                    {data.recommendation}
                                </Text>
                            </View>
                        </View>
                    </View>
                )}
        </View>
    )
}

export default MetabolicProfileSection
