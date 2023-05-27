"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderer = require("@react-pdf/renderer");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Heading({
  text,
  line = "right",
  type = "large",
  marginBottom = "23px"
}) {
  return type === "large" ? /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      display: "flex",
      flexDirection: line === "right" ? "row" : "row-reverse",
      gap: "20px",
      marginBottom
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontFamily: "NunitoBold",
      fontSize: "27px"
    }
  }, text), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      position: "relative",
      flexGrow: "1"
    }
  }, line === "right" ? /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      position: "absolute",
      left: "0",
      top: "20px",
      backgroundColor: "black",
      height: "3px",
      width: "500px"
    }
  }) : /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      position: "absolute",
      right: "0",
      top: "20px",
      backgroundColor: "black",
      height: "3px",
      width: "500px"
    }
  }))) : /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      display: "flex",
      flexDirection: line === "right" ? "row" : "row-reverse",
      gap: "20px",
      marginBottom
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontFamily: "NunitoBold",
      fontSize: "18px"
    }
  }, text), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      position: "relative",
      flexGrow: "1"
    }
  }, line === "right" ? /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      position: "absolute",
      left: "0",
      top: "14px",
      backgroundColor: "black",
      height: "2px",
      width: "500px"
    }
  }) : /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      position: "absolute",
      right: "0",
      top: "14px",
      backgroundColor: "black",
      height: "2px",
      width: "500px"
    }
  })));
}
var _default = Heading;
exports.default = _default;