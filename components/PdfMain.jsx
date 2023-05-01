import React from 'react';
import { Document, Page, Text, View } from '@react-pdf/renderer';
import Page1 from './pages/page1/Page1';

export default function PdfMain() {
  return (
    <Document>
      <Page1 />
      <Page1 />
    </Document>
  );
}
