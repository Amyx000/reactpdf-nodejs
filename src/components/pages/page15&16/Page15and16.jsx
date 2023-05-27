import { Page, View } from '@react-pdf/renderer'
import React from 'react'
import Heading from '../../common/Heading'
import Footer from '../../common/Footer'
import KeystoneTable from './KeystoneTable'
import FoodTable from '../../common/FoodTable'

function Page15and16({ data }) {

    const Food =  data.keystoneFoodRecommendations

    let page15data
    let page16data

    (() => {
        const maxLengthPerPage=27
        if(data.keystoneSpecies.length>maxLengthPerPage){
            page15data = data.keystoneSpecies.slice(0, maxLengthPerPage);
            page16data = data.keystoneSpecies.slice(maxLengthPerPage);
        }
        else{
            page15data=data.keystoneSpecies
            page16data=[]
        }
    })();

    return (
        <>
            <Page style={{ padding: "40px 40px 0" }}>
                <Heading text="Keystone Species" marginBottom='6px' />
                <KeystoneTable data={page15data} />
               {!page16data.length ?<View style={{ marginTop: "20px" }}>
                    <FoodTable Food={Food} />
                </View>:null}
                <Footer name={data.patientName} barcode={data.barcode} pageNo="15" />
            </Page>
            {page16data.length ?<Page style={{ padding: "40px 40px 0" }}>
                <Heading text="Keystone Species" marginBottom='6px' />
                <KeystoneTable data={page16data} />
                <View style={{ marginTop: "20px" }}>
                    <FoodTable Food={Food} />
                </View>
                <Footer name={data.patientName} barcode={data.barcode} pageNo="16" />
            </Page>:null}
        </>
    )
}

export default Page15and16
