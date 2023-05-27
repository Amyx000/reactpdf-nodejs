"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderer = require("@react-pdf/renderer");
var _react = _interopRequireDefault(require("react"));
var _Footer = _interopRequireDefault(require("../../common/Footer"));
var _ContentRow = _interopRequireDefault(require("./ContentRow"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Page2({
  data
}) {
  const Index = [{
    text: "Introduction",
    no: "03",
    heading: true
  }, {
    text: "Summary",
    no: "04",
    heading: true
  }, {
    text: "Biome Score",
    no: "08",
    heading: true
  }, {
    text: "Gut Composition",
    no: "09",
    heading: true
  }, {
    text: "• Genus Profile",
    no: "09",
    heading: false
  }, {
    text: "• Phylum Profile",
    no: "09",
    heading: false
  }, {
    text: "Bacteria, Fungi & Archaea",
    no: "10",
    heading: true
  }, {
    text: "• Abundant Species",
    no: "10",
    heading: false
  }, {
    text: "• Alpha Diversity",
    no: "11",
    heading: false
  }, {
    text: "• Probiotics",
    no: "12",
    heading: false
  }, {
    text: "• Pathogens",
    no: "13",
    heading: false
  }, {
    text: "• Gut Enterotype",
    no: "14",
    heading: false
  }, {
    text: "• Keystone Species",
    no: "15",
    heading: false
  }, {
    text: "Gut Potential",
    no: "17",
    heading: true
  }, {
    text: "• Gut Inflammation (Acetate, Butyrate, Propionate)",
    no: "18",
    heading: false
  }, {
    text: "• Metabolic Profile",
    no: "19",
    heading: false
  }, {
    text: "• Carbohydrate",
    no: "20",
    heading: false
  }, {
    text: "• Protein",
    no: "21",
    heading: false
  }, {
    text: "• Vitamin",
    no: "22",
    heading: false
  }, {
    text: "• Lipid",
    no: "23",
    heading: false
  }, {
    text: "• Gas Production",
    no: "24",
    heading: false
  }, {
    text: "• Gut Brain Axis",
    no: "25",
    heading: false
  }, {
    text: "General Remarks",
    no: "26",
    heading: true
  }, {
    text: "Disclaimer",
    no: "28",
    heading: true
  }];
  return /*#__PURE__*/_react.default.createElement(_renderer.Page, {
    style: {
      padding: "48px 40px 0"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontFamily: "NunitoBold",
      fontSize: "27px",
      marginBottom: "42px"
    }
  }, "Table of Contents"), Index.map((obj, i) => {
    return /*#__PURE__*/_react.default.createElement(_renderer.View, {
      key: i,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }
    }, /*#__PURE__*/_react.default.createElement(_ContentRow.default, {
      heading: obj.heading,
      text: obj.text,
      no: obj.no,
      paddingLeft: ["• Carbohydrate", "• Protein", "• Vitamin", "• Lipid", "• Gas Production", "• Gut Brain Axis"].includes(obj.text) ? "12px" : "0px"
    }));
  }), /*#__PURE__*/_react.default.createElement(_Footer.default, {
    name: data.patientName,
    barcode: data.barcode
  }));
}
var _default = Page2;
exports.default = _default;