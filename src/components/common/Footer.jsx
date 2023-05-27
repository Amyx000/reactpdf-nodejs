import { Text } from '@react-pdf/renderer'
import React from 'react'


function Footer({ pageNo = undefined, color = "#177DC0", name = "Customer Name",barcode }) {
    return (
        <>
            <Text style={{ color, position: "absolute", bottom: "22.68px", left: "129px", fontFamily: "NunitoL", fontSize: "15px" }}>Decode Age | Decode Biome {name} {new Date().getFullYear()} | {barcode}</Text>
            {pageNo && <Text style={{ color, position: "absolute", bottom: "22.68px", left: "549.92px", borderBottom: "2px", borderColor: color, fontFamily: "NunitoL", fontSize: "15px" }}>{pageNo}</Text>}
        </>
    )
}

export default Footer
