import { StyleSheet, Text, View } from '@react-pdf/renderer'
import React from 'react'
import { colors } from '../../../data'

const style = StyleSheet.create({
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        fontFamily: "NunitoBold",
        fontSize: "10.5px",
        color: "white",
        padding: "1px 3px"
    }
})

function Table({ data }) {

    return (
        <View style={{ display: "flex", flexDirection: "column", gap: "2px", marginTop: "25px" }}>
            {Object.keys(data).map((key, i) => {
                return (
                    <View key={i} style={{ backgroundColor: colors[i] }}>
                        <View style={style.row}>
                            <Text>{key}</Text>
                            <Text>{(+data[key]).toFixed(2)}</Text>
                        </View>
                    </View>
                )
            })}
        </View>
    )
}

export default Table
