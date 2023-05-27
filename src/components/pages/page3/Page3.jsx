import { Image, Page } from '@react-pdf/renderer'
import React from 'react'
import { ImgToBase64 } from '../../../utils/CustomFunctions'
import Footer from '../../common/Footer'

function Page3({ data }) {

    return (
        <Page>
            <Image src={ImgToBase64(__dirname, "page3.png")} style={{ position: "absolute", top: "0", bottom: "0", left: "0", right: "0" }} />
            <Footer name={data.patientName} barcode={data.barcode} color='white' pageNo='03' />
        </Page>
    )
}

export default Page3
