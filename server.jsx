
import React from 'react';
import express, { Express, Request, Response } from 'express';
import PdfMain from './components/PdfMain';
import ReactPDF from '@react-pdf/renderer';
import { createChart1 } from './createChart';
const app = express()

app.get('/', async (req, res) => {
  const chart1 = await createChart1();
  const pdfStream = await ReactPDF.renderToStream(<PdfMain data={chart1} />);
  // res.setHeader('Content-Type', 'application/pdf');
  // res.setHeader('Content-Disposition', 'inline; filename="MyDocument.pdf"');
  // pdfStream.pipe(res);
  const chunks = [];
  pdfStream.on('data', chunk => chunks.push(chunk));
  pdfStream.on('end', () => {
    const pdfBuffer = Buffer.concat(chunks);
    res.end(pdfBuffer, 'base64');
    console.log('Done streaming, response sent.');
  });
});

app.listen(5000, () =>
  console.log('Port 5000 started'),
);
