import { Page, Text, View } from '@react-pdf/renderer'
import React from 'react'
import Heading from '../../common/Heading'
import Footer from '../../common/Footer'
import CardSection from './CardSection'

function Page18({ data,pageNo }) {

    return (
        <Page style={{ padding: "40px 40px 0" }}>
            <Heading text="Gut Inflammation Profile" marginBottom='6px' />
            <Text style={{ fontFamily: "Nunito", fontSize: "12px" }}>
                Short Chain Fatty Acids (SCFAs) are small molecules produced by our gut microbiome by
                digesting fibres. They have been found to help slow down the aging process by supporting
                healthy gut function, boosting the immune system, and improving metabolism.
            </Text>
            <View style={{ marginTop: "35px", display: "flex", flexDirection: "column", gap: "40px" }}>
                <CardSection
                    defination="Acetate is produced by gut bacteria which has Anti-Inflammatory properties and helps in maintaining gut homeostasis and reduces risk of Hypertension and brain diseases."
                    data={data.scfa[0]}
                    headingWidth='140px'
                />
                <CardSection
                    defination="Butyrate is one of the important and abundantly present metabolite in human gut. It plays a major role in maintaining
                    gut health, has anti-inflammatory and anti-neoplastic properties, aids in boosting immune system in the body and
                    reduces risk of developing cardio-vascular and neural diseases."
                    data={data.scfa[1]}
                    headingWidth='155px'
                />
                <CardSection
                    defination="Propionate is produced by gut bacteria which regulates appetite and helps in weight management. It also aids in
                    maintaining glucose level and reduces risk for Inflammation."
                    data={data.scfa[2]}
                    headingWidth='180px'
                />
            </View>
            <Footer name={data.patientName} barcode={data.barcode} pageNo={pageNo} />
        </Page>
    )
}

export default Page18
