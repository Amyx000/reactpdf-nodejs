import { Page, Text } from '@react-pdf/renderer'
import React from 'react'
import Heading from '../../common/Heading'
import Footer from '../../common/Footer'
import ProbioticTable from './ProbioticTable'

function Page12({ data }) {
    return (
        <Page style={{ padding: "40px 40px 0" }}>
            <Heading text={"Probiotics"} marginBottom='6px' />
            <Text style={{ fontFamily: "Nunito", fontSize: "11px", textAlign: "justify", marginBottom: "5px" }}>
                The World Health Organization(WHO) defines probiotics as living microorganisms that are beneficial to
                your health when administered in sufficient quantities. The probiotic bacteria listed here are typically
                found in readily available foods or probiotic supplements. It is important to keep in mind that your
                microbiome is unique and that the amount of each bacterial species does not necessarily have a negative
                impact on your health. As diverse as nature is, there are certainly healthy people in whose gut few
                probiotic bacteria can be detected.
            </Text>
            <ProbioticTable data={data} />
            <Footer name={data.patientName} barcode={data.barcode} pageNo="12" />
        </Page>
    )
}

export default Page12
