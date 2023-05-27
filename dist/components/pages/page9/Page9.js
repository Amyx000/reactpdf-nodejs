"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderer = require("@react-pdf/renderer");
var _react = _interopRequireDefault(require("react"));
var _Heading = _interopRequireDefault(require("../../common/Heading"));
var _Footer = _interopRequireDefault(require("../../common/Footer"));
var _PieChart = _interopRequireDefault(require("../../common/PieChart"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Page9({
  charts,
  data
}) {
  return /*#__PURE__*/_react.default.createElement(_renderer.Page, {
    style: {
      padding: "40px 40px 0"
    }
  }, /*#__PURE__*/_react.default.createElement(_Heading.default, {
    text: "Gut Composition"
  }), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      width: "50%"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      position: "relative",
      left: "-40px",
      backgroundColor: "#177DC0",
      opacity: "0.47",
      width: "300px",
      height: "41.54px",
      color: "white",
      borderBottomRightRadius: "10px",
      borderTopRightRadius: "10px"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontFamily: "NunitoBold",
      fontSize: "30px",
      textAlign: "center",
      opacity: "1"
    }
  }, "Know your Gut")), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      fontFamily: "NunitoL",
      fontSize: "13px",
      textAlign: "justify",
      marginTop: "30px"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      marginBottom: "15px"
    }
  }, "Your microbiome is unique. Therefore, the composition of the bacteria, archaea, fungi and viruses in your gut may differ from that of the average population."), /*#__PURE__*/_react.default.createElement(_renderer.Text, null, "Most of the DNA in your stool (~99%) is from the microorganisms in your gut and only a small amount (~1%) is from you, the host. The microorganisms in your gut fall into four main groups: bacteria, archaea (another form of microscopic life), fungi, parasites and viruses."))), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      position: "absolute",
      top: "47.88%",
      left: "40px",
      width: "50%"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontFamily: "NunitoBold",
      fontSize: "24px",
      color: "#177DC0",
      textAlign: "center"
    }
  }, "Phylum Profile")), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      position: "absolute",
      top: "47.88%",
      right: "40px",
      width: "50%"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontFamily: "NunitoBold",
      fontSize: "24px",
      color: "#177DC0",
      textAlign: "center"
    }
  }, "Genus Profile")), /*#__PURE__*/_react.default.createElement(_PieChart.default, {
    chartData: charts[0],
    top: "100px",
    right: "0",
    legend: true,
    width: "297px"
  }), /*#__PURE__*/_react.default.createElement(_PieChart.default, {
    chartData: charts[1],
    top: "450px",
    left: "0",
    legend: true,
    width: "297px"
  }), /*#__PURE__*/_react.default.createElement(_PieChart.default, {
    chartData: charts[2],
    top: "450px",
    right: "0",
    legend: true,
    width: "297px"
  }), /*#__PURE__*/_react.default.createElement(_Footer.default, {
    name: data.patientName,
    barcode: data.barcode,
    pageNo: "09"
  }));
}
var _default = Page9;
exports.default = _default;