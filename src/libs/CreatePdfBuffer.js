import ReactPDF from "@react-pdf/renderer";


const CreatePdfBuffer = async (PdfDocument) => {
    const pdfStream = await ReactPDF.renderToStream(PdfDocument)
    const chunks = [];
    pdfStream.on('data', chunk => chunks.push(chunk));
    return new Promise((resolve, reject) => {
        pdfStream.on('end', () => {
            const buffer = Buffer.concat(chunks);
            resolve(buffer);
        });
        pdfStream.on('error', reject);
    })
}

export default CreatePdfBuffer
