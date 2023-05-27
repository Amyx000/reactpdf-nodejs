import { Font, Image, Page, StyleSheet, Text, View } from '@react-pdf/renderer'
import React from 'react'
import { ImgToBase64 } from '../../../utils/CustomFunctions'

const styles = StyleSheet.create({
    heading: {
        backgroundColor: '#2E3192',
        color: "white",
        borderRadius: "20px",
        display: "flex",
        width: "283.02px",
        height: "28.64px",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10px",
        fontFamily: "Nunito"
    },
    name: {
        fontFamily: "MetropolisSemibold",
        fontSize: "65px",
        marginTop: "50px"
    },
    art: {
        position: "absolute",
        bottom: "-10px",
        right: "37.31px",
        width: "229.3px"
    },
    bottomLeft: {
        position: "absolute",
        left: "40px",
        bottom: "25px",
        width: "212px"
    }
});

function Page1({ name }) {

    return (
        <Page style={{ paddingLeft: "40px", paddingRight: "40px" }}>
            <Image src={ImgToBase64(__dirname, "logo.png")} style={{ width: '280px', marginTop: "60px" }} />
            <View style={styles.heading}>
                <Text>Advanced Gut Microbiome Test</Text>
            </View>
            <View style={styles.name}>
                <Text>Hello,</Text>
                {name.split(" ")[1].length <= 11 ? <Text style={{ color: "#177DC1", fontSize: "55px" }}>{name}</Text>
                    : <>
                        <Text style={{ color: "#177DC1", fontSize: "55px" }}>{name.split(" ")[0]}</Text>
                        <Text style={{ color: "#177DC1", fontSize: "55px" }}>{name.split(" ")[1]}</Text>
                    </>}
            </View>
            <View style={styles.bottomLeft}>
                <Text style={{ marginBottom: "10px", fontFamily: "NunitoBold", fontSize: "19.5px" }}>Decode Age</Text>
                <Text style={{ fontFamily: "NunitoM", fontSize: "12px" }}>
                    No. 7, 1, Haudin Rd, Yellappa Chetty
                    Layout Sivanchetti Gardens, Halasuru,
                    Bengaluru, Karnataka 560042
                </Text>
            </View>
            <Image src={ImgToBase64(__dirname, "Asset1.png")} style={styles.art} />
        </Page>
    )
}

export default Page1
