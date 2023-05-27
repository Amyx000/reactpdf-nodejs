"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderer = require("@react-pdf/renderer");
var _react = _interopRequireDefault(require("react"));
var _CustomFunctions = require("../../../utils/CustomFunctions");
var _Footer = _interopRequireDefault(require("../../common/Footer"));
var _Heading = _interopRequireDefault(require("../../common/Heading"));
var _ConvertData = require("../../../utils/ConvertData");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Page26({
  data,
  pageNo
}) {
  const shades = (0, _ConvertData.generateShades)('#177DC0', data.generalRemarks.length);
  return /*#__PURE__*/_react.default.createElement(_renderer.Page, {
    style: {
      padding: "40px 40px 0"
    }
  }, /*#__PURE__*/_react.default.createElement(_Heading.default, {
    text: "General Remarks"
  }), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "15px"
    }
  }, data.generalRemarks.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement(_renderer.View, {
      key: index,
      style: {
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        alignItems: "center",
        padding: "0px 20px",
        fontFamily: "NunitoM",
        backgroundColor: shades[index]
      }
    }, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
      style: {
        fontSize: "70px",
        color: "white",
        opacity: "0.4"
      }
    }, index + 1, "."), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
      style: {
        fontSize: "17px",
        width: "470px"
      }
    }, item));
  })), /*#__PURE__*/_react.default.createElement(_Footer.default, {
    name: data.patientName,
    barcode: data.barcode,
    pageNo: pageNo
  }));
}
var _default = Page26;
exports.default = _default;