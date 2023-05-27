import { View } from '@react-pdf/renderer'
import React from 'react'

function Line({ marginTop = "19px", marginBottom = 0 }) {
    return (
        <View style={{ width: "100%", height: "2px", backgroundColor: "black", marginTop, marginBottom }} />
    )
}

export default Line
