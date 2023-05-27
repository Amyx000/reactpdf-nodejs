"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderer = require("@react-pdf/renderer");
var _react = _interopRequireDefault(require("react"));
var _Footer = _interopRequireDefault(require("../../common/Footer"));
var _Heading = _interopRequireDefault(require("../../common/Heading"));
var _RowSection = _interopRequireDefault(require("./RowSection"));
var _PieChart = _interopRequireDefault(require("../../common/PieChart"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Page10({
  charts,
  data
}) {
  return /*#__PURE__*/_react.default.createElement(_renderer.Page, {
    style: {
      padding: "40px 40px 0"
    }
  }, /*#__PURE__*/_react.default.createElement(_Heading.default, {
    text: "Abundant Species"
  }), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "30px"
    }
  }, /*#__PURE__*/_react.default.createElement(_RowSection.default, {
    data: data.topSpeciesBacteria,
    title: "Top Bacterial Species",
    color: "#1034A6"
  }), /*#__PURE__*/_react.default.createElement(_RowSection.default, {
    data: data.topSpeciesFungi,
    title: "Top Fungal Species",
    color: "#0080FF",
    tablePosition: "right"
  }), /*#__PURE__*/_react.default.createElement(_RowSection.default, {
    data: data.topSpeciesArchaea,
    title: "Top Archaeal Species",
    color: "#008081"
  })), /*#__PURE__*/_react.default.createElement(_PieChart.default, {
    chartData: charts[3],
    top: "140px",
    right: "60px"
  }), /*#__PURE__*/_react.default.createElement(_PieChart.default, {
    chartData: charts[4],
    top: "380px",
    left: "60px"
  }), /*#__PURE__*/_react.default.createElement(_PieChart.default, {
    chartData: charts[5],
    bottom: "55px",
    right: "60px"
  }), /*#__PURE__*/_react.default.createElement(_Footer.default, {
    name: data.patientName,
    barcode: data.barcode,
    pageNo: "10"
  }));
}
var _default = Page10;
exports.default = _default;