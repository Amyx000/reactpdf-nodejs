import { Font, StyleSheet, Text, View } from '@react-pdf/renderer'
import React from 'react'

const style = StyleSheet.create({
    heading: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        fontFamily: "NunitoB",
        fontSize: "19.5px"
    },
    subheading: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        fontFamily: "NunitoL",
        fontSize: "19.5px"
    }
})

function ContentRow({ heading = false, text, no, paddingLeft }) {
    return (
        heading ? <View style={style.heading}>
            <Text>{text}</Text>
            <Text>{no}</Text>
        </View> :
            <View style={style.subheading}>
                <Text style={{ paddingLeft }}>{text}</Text>
                <Text>{no}</Text>
            </View>
    )
}

export default ContentRow
