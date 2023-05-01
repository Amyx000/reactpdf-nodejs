import React from 'react';
import { Document, Page, Text, View } from '@react-pdf/renderer';
import Page1 from './pages/page1/Page1';
import Page2 from './pages/Page2/Page2';

export default function PdfMain({ data }) {
  return (
    <Document>
      <Page1 data={data} />
      <Page2 />
    </Document>
  );
}
