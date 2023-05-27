"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderer = require("@react-pdf/renderer");
var _react = _interopRequireDefault(require("react"));
var _ScaleIndicator = _interopRequireDefault(require("../../common/ScaleIndicator"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function CardSection({
  defination,
  data,
  headingWidth = "140px"
}) {
  return /*#__PURE__*/_react.default.createElement(_renderer.View, null, /*#__PURE__*/_react.default.createElement(_ScaleIndicator.default, {
    top: "10px",
    right: "0",
    range: data.remarks
  }), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      backgroundColor: "#177DC0",
      color: "white",
      fontFamily: "NunitoBold",
      fontSize: "20px",
      width: headingWidth,
      position: "relative",
      left: "-40px",
      paddingLeft: "40px"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, null, data.metabolicProfile.toUpperCase())), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      marginTop: "20px",
      fontFamily: "Nunito",
      fontSize: "9px"
    }
  }, defination), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      marginTop: "10px"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontFamily: "NunitoB",
      fontSize: "10px"
    }
  }, "Indications:"), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontFamily: "NunitoItalic",
      fontSize: "9px"
    }
  }, data.curation)), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      marginTop: "9px"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontFamily: "NunitoB",
      fontSize: "10px"
    }
  }, "Food Recommendation:"), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontFamily: "NunitoM",
      fontSize: "9px"
    }
  }, data.recommendation)));
}
var _default = CardSection;
exports.default = _default;