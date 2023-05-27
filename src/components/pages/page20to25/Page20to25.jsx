import { Page, View } from '@react-pdf/renderer'
import React from 'react'
import Heading from '../../common/Heading'
import Footer from '../../common/Footer'
import MetabolicProfileSection from './MetabolicProfileSection'

function Page20to25({ data }) {

    return (
        <>
            <Page style={{ padding: "40px 40px 0" }}>
                <Heading text="Metabolic Profile" marginBottom='15px' />
                <MetabolicProfileSection heading="Carbohydrate Metabolism" data={data.metabolism[0]} img='carb1.png' />
                <View style={{ marginTop: "20px" }}>
                    <MetabolicProfileSection heading="Protein Metabolism" data={data.metabolism[1]} img="protein1.png" />
                </View>
                <Footer name={data.patientName} barcode={data.barcode} pageNo={data.keystoneSpecies.length<=27?"19":"20"} />
            </Page>
            <Page style={{ padding: "40px 40px 0" }}>
                <Heading text="Metabolic Profile" marginBottom='15px' />
                <MetabolicProfileSection heading="Vitamin Metabolism" data={[data.vitamin[0], data.vitamin[1]]} />
                <Footer name={data.patientName} barcode={data.barcode} pageNo={data.keystoneSpecies.length<=27?"20":"21"} />
            </Page>
            <Page style={{ padding: "40px 40px 0" }}>
                <Heading text="Metabolic Profile" marginBottom='15px' />
                <MetabolicProfileSection heading="Vitamin Metabolism" data={[data.vitamin[2], data.vitamin[3]]} />
                <Footer name={data.patientName} barcode={data.barcode} pageNo={data.keystoneSpecies.length<=27?"21":"22"} />
            </Page>
            <Page style={{ padding: "40px 40px 0" }}>
                <Heading text="Metabolic Profile" marginBottom='15px' />
                <MetabolicProfileSection heading="Lipid Metabolism" data={data.lipid} />
                <Footer name={data.patientName} barcode={data.barcode} pageNo={data.keystoneSpecies.length<=27?"22":"23"} />
            </Page>
            <Page style={{ padding: "40px 40px 0" }}>
                <Heading text="Metabolic Profile" marginBottom='15px' />
                <MetabolicProfileSection heading="Gas Production" data={data.gas} />
                <Footer name={data.patientName} barcode={data.barcode} pageNo={data.keystoneSpecies.length<=27?"23":"24"} />
            </Page>
            <Page style={{ padding: "40px 40px 0" }}>
                <Heading text="Metabolic Profile" marginBottom='15px' />
                <MetabolicProfileSection heading="Gut Brain Axis" data={data.gutBrain} />
                <Footer name={data.patientName} barcode={data.barcode} pageNo={data.keystoneSpecies.length<=27?"24":"25"} />
            </Page>
        </>
    )
}

export default Page20to25
