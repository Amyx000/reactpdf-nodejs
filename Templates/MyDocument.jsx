import React from 'react';
import { Document, Page, Text, View } from '@react-pdf/renderer';

export default function MyDocument() {
  return (
    <Document>
      <Page>
        <Text style={{ color: "blue" }}>Hello, World!</Text>
        <View style={{ width: "100px", height: "100px", backgroundColor: "red" }} />
      </Page>
    </Document>
  );
}
