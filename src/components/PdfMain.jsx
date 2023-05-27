import React from 'react';
import { Document, Font } from '@react-pdf/renderer';
import Page1 from './pages/page1/Page1';
import Page3 from './pages/page3/Page3';
import Page2 from './pages/page2/Page2';
import Page4 from './pages/page4/Page4';
import Page5 from './pages/page5/Page5';
import Page6 from './pages/page6/page6';
import Page7 from './pages/page7/page7';
import Page8 from './pages/page8/Page8';
import Page9 from './pages/page9/Page9';
import Page10 from './pages/page10/Page10';
import Page11 from './pages/page11/Page11';
import Page12 from './pages/page12/Page12';
import Page13 from './pages/page13/Page13';
import Page14 from './pages/page14/Page14';
import Page15and16 from './pages/page15&16/Page15and16';
import Page17 from './pages/page17/page17';
import Page18 from './pages/page18/Page18'
import Page19 from './pages/page19/Page19'
import Page20to25 from './pages/page20to25/Page20to25'
import Page26 from './pages/page26/Page26'
import Page27 from './pages/page27/Page27'
import Page28 from './pages/page28/page28'



Font.register({ family: "MetropolisSemibold", src: `./src/assets/fonts/Metropolis-SemiBold.otf` })
Font.register({ family: "NunitoB", src: `./src/assets/fonts/Nunito-Black.ttf` })
Font.register({ family: "NunitoBitalic", src: `./src/assets/fonts/Nunito-BlackItalic.ttf` })
Font.register({ family: "NunitoBold", src: `./src/assets/fonts/Nunito-Bold.ttf` })
Font.register({ family: "NunitoBolditalic", src: `./src/assets/fonts/Nunito-BoldItalic.ttf` })
Font.register({ family: "NunitoExBold", src: `./src/assets/fonts/Nunito-ExtraBold.ttf` })
Font.register({ family: "NunitoItalic", src: `./src/assets/fonts/Nunito-Italic.ttf` })
Font.register({ family: "NunitoL", src: `./src/assets/fonts/Nunito-Light.ttf` })
Font.register({ family: "NunitoLitalic", src: `./src/assets/fonts/Nunito-LightItalic.ttf` })
Font.register({ family: "NunitoM", src: `./src/assets/fonts/Nunito-Medium.ttf` })
Font.register({ family: "NunitoMitalic", src: `./src/assets/fonts/Nunito-MediumItalic.ttf` })
Font.register({ family: "Nunito", src: `./src/assets/fonts/Nunito-Regular.ttf` })
Font.register({ family: "NunitoSBold", src: `./src/assets/fonts/Nunito-SemiBold.ttf` })


export default function PdfMain({ data, charts }) {
    return (
        <Document>
            <Page1 name={data.patientName} />
            <Page2 data={{ patientName: data.patientName,barcode: data.barcode }} />
            <Page3 data={{ patientName: data.patientName,barcode: data.barcode }} />
            <Page4 data={{ patientName: data.patientName,barcode: data.barcode }} />
            <Page5 data={{ patientName: data.patientName,barcode: data.barcode }} />
            <Page6 data={{ patientName: data.patientName,barcode: data.barcode }} />
            <Page7 data={{ patientName: data.patientName,barcode: data.barcode }} />
            <Page8 data={data} />
            <Page9 charts={charts} data={{ patientName: data.patientName,barcode: data.barcode }} />
            <Page10 charts={charts} data={data} />
            <Page11 data={data} />
            <Page12 data={data} />
            <Page13 data={data} />
            <Page14 data={data} />
            <Page15and16 data={data} />
            <Page17 data={{ patientName: data.patientName,barcode: data.barcode }} pageNo={data.keystoneSpecies.length<=27?"16":"17"}/>
            <Page18 data={data} pageNo={data.keystoneSpecies.length<=27?"17":"18"}/>
            <Page19 data={{ patientName: data.patientName,barcode: data.barcode }} pageNo={data.keystoneSpecies.length<=27?"18":"19"}/>
            <Page20to25 data={data} />
            <Page26 data={{ patientName: data.patientName,generalRemarks:data.generalRemarks,barcode: data.barcode }} pageNo={data.keystoneSpecies.length<=27?"25":"26"}/>
            <Page27 data={{ patientName: data.patientName,barcode: data.barcode }} />
            <Page28 data={{ patientName: data.patientName,barcode: data.barcode }} pageNo={data.keystoneSpecies.length<=27?"27":"28"}/>
        </Document>
    );
}
