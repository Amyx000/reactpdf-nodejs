"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderer = require("@react-pdf/renderer");
var _react = _interopRequireDefault(require("react"));
var _CustomFunctions = require("../../../utils/CustomFunctions");
var _Footer = _interopRequireDefault(require("../../common/Footer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Page28({
  data,
  pageNo
}) {
  return /*#__PURE__*/_react.default.createElement(_renderer.Page, null, /*#__PURE__*/_react.default.createElement(_renderer.Image, {
    src: (0, _CustomFunctions.ImgToBase64)(__dirname, "page28.png"),
    style: {
      position: "absolute",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0"
    }
  }), /*#__PURE__*/_react.default.createElement(_Footer.default, {
    name: data.patientName,
    barcode: data.barcode,
    pageNo: pageNo
  }));
}
var _default = Page28;
exports.default = _default;