"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderer = require("@react-pdf/renderer");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Circle({
  size,
  name,
  color,
  top,
  left,
  fontSize = "18px",
  padding = "0px"
}) {
  return /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      padding,
      backgroundColor: color,
      width: size,
      height: size,
      borderRadius: "50%",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "NunitoBold",
      fontSize,
      position: "absolute",
      top,
      left
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      textAlign: "center"
    }
  }, name));
}
var _default = Circle;
exports.default = _default;