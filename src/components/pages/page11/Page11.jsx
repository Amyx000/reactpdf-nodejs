import { Page, Text, View } from '@react-pdf/renderer'
import React from 'react'
import Heading from '../../common/Heading'
import Footer from '../../common/Footer'
import RangeIndicator from './RangeIndicator'

function Page11({ data }) {
    return (
        <Page style={{ padding: "40px 40px 0" }}>
            <Heading text="Alpha Diversity Index" />
            <Text style={{ fontFamily: "Nunito", fontSize: "13px" }}>
                Your Alpha Diversity Scores tells a lot about how many different types of microorganisms
                are present in your gut, if they are in the optimal proportion, and if they are evenly present
                within the intestine. For healthy ageing, and resistance against various chronic disease, it
                is important to maintain a highly diverse gut microbiome.
            </Text>

            <View style={{ marginTop: "30px" }}>
                <Heading text="Bacterial Species Richness (Shannon)" type="small" />
                <View style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                    <View style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <RangeIndicator startValue='0' endValue='6' value={data.diversityIndeces[0]["Shannon index"]} />
                    </View>
                    <View style={{ fontFamily: "Nunito", fontSize: "11px", width: "50%", textAlign: "justify" }}>
                        <Text>
                            Combines richness and diversity of the population.
                            It measures both the number of species and the
                            inequality between species abundances.
                        </Text>
                        <Text style={{ fontFamily: "NunitoB", marginTop: "10px" }}>Interpretation:</Text>
                        <Text>
                            {data.diversityIndeces[0].remark}
                        </Text>
                    </View>
                </View>
            </View>

            <View style={{ marginTop: "30px" }}>
                <Heading text="Bacterial Species Diversity (Simpson)" type="small" line='left' />
                <View style={{ display: "flex", flexDirection: "row-reverse", gap: "10px" }}>
                    <View style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <RangeIndicator value={data.diversityIndeces[1]["Simpson index"]} />
                    </View>
                    <View style={{ fontFamily: "Nunito", fontSize: "11px", width: "50%", textAlign: "justify" }}>
                        <Text>
                            Simpson's Diversity Index is a measure of diversity
                            which takes into account the number of species
                            present, as well as the relative abundance of each
                            species. As species richness and evenness
                            increase, so diversity increases.
                        </Text>
                        <Text style={{ fontFamily: "NunitoB", marginTop: "10px" }}>Interpretation:</Text>
                        <Text>
                            {data.diversityIndeces[1].remark}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: "30px" }}>
                <Heading text="Bacterial Species Evenness" type="small" />
                <View style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                    <View style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <RangeIndicator value={data.diversityIndeces[2]["Pielou index"]} />
                    </View>
                    <View style={{ fontFamily: "Nunito", fontSize: "11px", width: "50%", textAlign: "justify" }}>
                        <Text>
                            Species evenness refers to how close in numbers
                            each species in an environment is Measures how
                            evenly the microbes are distributed in a sample
                            without considering the number of species
                        </Text>
                        <Text style={{ fontFamily: "NunitoB", marginTop: "10px" }}>Interpretation:</Text>
                        <Text>
                            {data.diversityIndeces[2].remark}
                        </Text>
                    </View>
                </View>
            </View>
            <Footer name={data.patientName} barcode={data.barcode} pageNo="11" />
        </Page>
    )
}

export default Page11
