"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderer = _interopRequireDefault(require("@react-pdf/renderer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CreateArrayBufferPdf = async ArrayOfReactPdf => {
  const ArrayofPdfBuffer = await Promise.all(ArrayOfReactPdf.map(async doc => {
    const pdfStream = await _renderer.default.renderToStream(doc);
    const chunks = [];
    pdfStream.on('data', chunk => chunks.push(chunk));
    return new Promise((resolve, reject) => {
      pdfStream.on('end', () => {
        resolve(Buffer.concat(chunks));
      });
    });
  }));
  return ArrayofPdfBuffer;
};
var _default = CreateArrayBufferPdf;
exports.default = _default;