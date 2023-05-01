import { Page, Text, View } from '@react-pdf/renderer'
import React from 'react'

function Page1() {
    return (
        <Page>
            <Text style={{ color: "blue" }}>Hello, World!</Text>
            <View style={{ width: "100px", height: "100px", backgroundColor: "red" }} />
        </Page>
    )
}

export default Page1
