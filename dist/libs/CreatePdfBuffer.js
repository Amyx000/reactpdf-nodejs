"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderer = _interopRequireDefault(require("@react-pdf/renderer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CreatePdfBuffer = async PdfDocument => {
  const pdfStream = await _renderer.default.renderToStream(PdfDocument);
  const chunks = [];
  pdfStream.on('data', chunk => chunks.push(chunk));
  return new Promise((resolve, reject) => {
    pdfStream.on('end', () => {
      const buffer = Buffer.concat(chunks);
      resolve(buffer);
    });
    pdfStream.on('error', reject);
  });
};
var _default = CreatePdfBuffer;
exports.default = _default;