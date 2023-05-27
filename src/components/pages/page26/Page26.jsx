import { Page, Text, View } from "@react-pdf/renderer";
import React from "react";
import { ImgToBase64 } from "../../../utils/CustomFunctions";
import Footer from "../../common/Footer";
import Heading from "../../common/Heading";
import {generateShades} from "../../../utils/ConvertData"

function Page26({ data,pageNo }) {
    const shades = generateShades('#177DC0', data.generalRemarks.length)
  return (
    <Page style={{ padding: "40px 40px 0" }}>
      <Heading text={"General Remarks"} />
      <View style={{display:"flex",flexDirection:"column",gap:"15px"}}>
      {data.generalRemarks.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              alignItems:"center",
              padding: "0px 20px",
              fontFamily:"NunitoM",
              backgroundColor:shades[index]
            }}
          >
            <Text style={{fontSize:"70px",color:"white",opacity:"0.4"}}>{index+1}.</Text>
            <Text style={{fontSize:"17px",width:"470px"}}>
              {item}
            </Text>
          </View>
        );
      })}
      </View>
      <Footer name={data.patientName} barcode={data.barcode} pageNo={pageNo} />
    </Page>
  );
}

export default Page26;
