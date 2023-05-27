"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderer = require("@react-pdf/renderer");
var _react = _interopRequireDefault(require("react"));
var _Heading = _interopRequireDefault(require("../../common/Heading"));
var _Footer = _interopRequireDefault(require("../../common/Footer"));
var _Circle = _interopRequireDefault(require("./Circle"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Page19({
  data,
  pageNo
}) {
  return /*#__PURE__*/_react.default.createElement(_renderer.Page, {
    style: {
      padding: "40px 40px 0"
    }
  }, /*#__PURE__*/_react.default.createElement(_Heading.default, {
    text: "Metabolic Profile"
  }), /*#__PURE__*/_react.default.createElement(_Circle.default, {
    top: "246.9px",
    left: "232.35px",
    name: "Gas Production",
    size: "196px",
    color: "#09505B"
  }), /*#__PURE__*/_react.default.createElement(_Circle.default, {
    top: "151.05px",
    left: "248px",
    name: "Carbohydrate",
    size: "131.41px",
    color: "#177DC0"
  }), /*#__PURE__*/_react.default.createElement(_Circle.default, {
    top: "216.71px",
    left: "378.28px",
    name: "Vitamin",
    size: "120px",
    color: "#177DC0"
  }), /*#__PURE__*/_react.default.createElement(_Circle.default, {
    top: "361.58px",
    left: "376.39px",
    name: "Gut Brain",
    size: "124px",
    color: "#177DC0"
  }), /*#__PURE__*/_react.default.createElement(_Circle.default, {
    top: "382.56px",
    left: "193.66px",
    name: "Lipid",
    size: "179px",
    color: "#0E677F"
  }), /*#__PURE__*/_react.default.createElement(_Circle.default, {
    top: "241.48px",
    left: "94.79px",
    name: "Amino Acid",
    size: "164.36px",
    color: "#177DC0"
  }), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontFamily: "Nunito",
      fontSize: "15px",
      position: "absolute",
      bottom: "80px",
      left: "40px",
      right: "40px",
      textAlign: "justify"
    }
  }, "The gut microbiome is a key producer of some essential nutrients such as amino acid, vitamins, carbohydrate, energy, glycan, lipid, nucleotide and xenobiotic degradation. These essential nutrients could be an energy source to the intestinal epithelial cells and affect the human metabolism. Additionally, a number of micronutrients are known to serve as antioxidants. This score indicates your gut microbial functions that lead to the production of nutrients known to beneficially affect many wellness areas."), /*#__PURE__*/_react.default.createElement(_Footer.default, {
    name: data.patientName,
    barcode: data.barcode,
    pageNo: pageNo
  }));
}
var _default = Page19;
exports.default = _default;