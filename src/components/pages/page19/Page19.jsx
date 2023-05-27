import { Page, Text, View } from '@react-pdf/renderer'
import React from 'react'
import Heading from '../../common/Heading'
import Footer from '../../common/Footer'
import Circle from './Circle'

function Page19({ data, pageNo }) {
    return (
        <Page style={{ padding: "40px 40px 0" }}>
            <Heading text="Metabolic Profile" />

            <Circle top="246.9px" left="232.35px" name="Gas Production" size="196px" color="#09505B" />
            <Circle top="151.05px" left="248px" name="Carbohydrate" size="131.41px" color="#177DC0" />
            <Circle top="216.71px" left="378.28px" name="Vitamin" size="120px" color="#177DC0" />
            <Circle top="361.58px" left="376.39px" name="Gut Brain" size="124px" color="#177DC0" />
            <Circle top="382.56px" left="193.66px" name="Lipid" size="179px" color="#0E677F" />
            <Circle top="241.48px" left="94.79px" name="Amino Acid" size="164.36px" color="#177DC0" />

            <Text style={{ fontFamily: "Nunito", fontSize: "15px", position: "absolute", bottom: "80px", left: "40px", right: "40px", textAlign: "justify" }}>
                The gut microbiome is a key producer of some essential nutrients such as
                amino acid, vitamins, carbohydrate, energy, glycan, lipid, nucleotide and
                xenobiotic degradation. These essential nutrients could be an energy source
                to the intestinal epithelial cells and affect the human metabolism.
                Additionally, a number of micronutrients are known to serve as antioxidants.
                This score indicates your gut microbial functions that lead to the production of
                nutrients known to beneficially affect many wellness areas.
            </Text>
            <Footer name={data.patientName} barcode={data.barcode} pageNo={pageNo} />
        </Page>
    )
}

export default Page19
