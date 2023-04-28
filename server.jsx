
import React from 'react';
import express, { Express, Request, Response } from 'express';
import MyDocument from './Templates/MyDocument';
import ReactPDF from '@react-pdf/renderer';
const app = express()

app.get('/', async (req, res) => {
  const pdfStream = await ReactPDF.renderToStream(<MyDocument />);
  // res.setHeader('Content-Type', 'application/pdf');
  // res.setHeader('Content-Disposition', 'inline; filename="MyDocument.pdf"');
  // pdfStream.pipe(res);
  const chunks = [];
  pdfStream.on('data', chunk => chunks.push(chunk));
  pdfStream.on('end', () => {
    const pdfBuffer = Buffer.concat(chunks);
    res.end(pdfBuffer,'base64');
    console.log('Done streaming, response sent.');
  });
});

app.listen(3000, () =>
  console.log('Port 3000 started'),
);
