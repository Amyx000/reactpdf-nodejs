import { Image, Page } from '@react-pdf/renderer'
import React from 'react'
import { ImgToBase64 } from '../../../utils/CustomFunctions'
import Footer from '../../common/Footer'

function Page4({ data }) {

    return (
        <Page>
            <Image src={ImgToBase64(__dirname, "page4.png")} style={{ position: "absolute", top: "0", bottom: "0", left: "0", right: "0" }} />
            <Footer name={data.patientName} barcode={data.barcode} pageNo='04' />
        </Page>
    )
}

export default Page4
