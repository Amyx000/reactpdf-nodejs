import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import Table from './Table'

function RowSection({ title, color, tablePosition = "left", data }) {
    return (
        <View style={{ display: "flex", flexDirection: tablePosition === "left" ? "row" : "row-reverse", justifyContent: "space-between" }}>
            <View style={{height:"205px",display:"flex",flexDirection:"column",justifyContent:"center",width:"50%"}}>
                <Table data={data} />
            </View>
            <View >
                <Text style={{ color, fontFamily: "NunitoExBold", fontSize: "19.5px", textAlign: "center"}}>{title}</Text>
            </View>
        </View>
    )
}

export default RowSection
