"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderer = require("@react-pdf/renderer");
var _react = _interopRequireDefault(require("react"));
var _Heading = _interopRequireDefault(require("../../common/Heading"));
var _Footer = _interopRequireDefault(require("../../common/Footer"));
var _ProbioticTable = _interopRequireDefault(require("./ProbioticTable"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Page12({
  data
}) {
  return /*#__PURE__*/_react.default.createElement(_renderer.Page, {
    style: {
      padding: "40px 40px 0"
    }
  }, /*#__PURE__*/_react.default.createElement(_Heading.default, {
    text: "Probiotics",
    marginBottom: "6px"
  }), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontFamily: "Nunito",
      fontSize: "11px",
      textAlign: "justify",
      marginBottom: "5px"
    }
  }, "The World Health Organization(WHO) defines probiotics as living microorganisms that are beneficial to your health when administered in sufficient quantities. The probiotic bacteria listed here are typically found in readily available foods or probiotic supplements. It is important to keep in mind that your microbiome is unique and that the amount of each bacterial species does not necessarily have a negative impact on your health. As diverse as nature is, there are certainly healthy people in whose gut few probiotic bacteria can be detected."), /*#__PURE__*/_react.default.createElement(_ProbioticTable.default, {
    data: data
  }), /*#__PURE__*/_react.default.createElement(_Footer.default, {
    name: data.patientName,
    barcode: data.barcode,
    pageNo: "12"
  }));
}
var _default = Page12;
exports.default = _default;