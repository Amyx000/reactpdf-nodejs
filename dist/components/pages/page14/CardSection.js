"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderer = require("@react-pdf/renderer");
var _react = _interopRequireDefault(require("react"));
var _CustomFunctions = require("../../../utils/CustomFunctions");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function CardSection({
  img,
  heading,
  subheading,
  des,
  backgroundColor
}) {
  return /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      display: "flex",
      flexDirection: "row",
      borderRadius: "13.8px",
      backgroundColor
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Image, {
    src: (0, _CustomFunctions.ImgToBase64)(__dirname, img),
    style: {
      width: "50%"
    }
  }), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      width: "50%",
      fontFamily: "NunitoBold",
      padding: "10px 30px 10px 20px"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontSize: "18px",
      color: "#177DC0"
    }
  }, heading), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontSize: "15px"
    }
  }, subheading), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontSize: "12px",
      fontFamily: "NunitoLitalic"
    }
  }, des)));
}
var _default = CardSection;
exports.default = _default;