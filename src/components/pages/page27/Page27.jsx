import { Image, Page } from '@react-pdf/renderer'
import React from 'react'
import { ImgToBase64 } from '../../../utils/CustomFunctions'
import Footer from '../../common/Footer'

function Page27({ data }) {

    return (
        <Page>
            <Image src={ImgToBase64(__dirname, "page27.png")} style={{ position: "absolute", top: "0", bottom: "0", left: "0", right: "0" }} />
        </Page>
    )
}

export default Page27
