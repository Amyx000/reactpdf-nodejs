import ReactPDF from "@react-pdf/renderer";


const CreateArrayBufferPdf = async (ArrayOfReactPdf) => {
    const ArrayofPdfBuffer = await Promise.all(
        ArrayOfReactPdf.map(async (doc) => {
            const pdfStream = await ReactPDF.renderToStream(doc)
            const chunks = [];
            pdfStream.on('data', chunk => chunks.push(chunk));
            return new Promise((resolve, reject) => {
                pdfStream.on('end', () => {
                    resolve(Buffer.concat(chunks));
                });
            })
        })
    )
    return ArrayofPdfBuffer
}

export default CreateArrayBufferPdf
