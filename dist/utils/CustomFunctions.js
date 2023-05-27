"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImgToBase64 = void 0;
var _path = _interopRequireDefault(require("path"));
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ImgToBase64 = (dirpath, imgfilename, foldername = "assets") => {
  const imgbase64 = _fs.default.readFileSync(_path.default.join(dirpath, `./${foldername}/${imgfilename}`), {
    encoding: 'base64'
  });
  return `data:image/png;base64,${imgbase64}`;
};
exports.ImgToBase64 = ImgToBase64;