"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderer = require("@react-pdf/renderer");
var _react = _interopRequireDefault(require("react"));
var _CustomFunctions = require("../../../utils/CustomFunctions");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const style = _renderer.StyleSheet.create({});
function RangeIndicator({
  startValue = "0",
  endValue = "1",
  value = startValue
}) {
  const factorValue = ((+value - +startValue) / (+endValue - +startValue)).toFixed(6);
  return /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      fontFamily: "NunitoBold",
      fontSize: "14px"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      position: "relative",
      width: "90%"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Image, {
    src: (0, _CustomFunctions.ImgToBase64)(__dirname, "Bar.png")
  }), /*#__PURE__*/_react.default.createElement(_renderer.Image, {
    src: (0, _CustomFunctions.ImgToBase64)(__dirname, "Pointer.png"),
    style: {
      position: "absolute",
      top: "-3px",
      left: `${220 * factorValue - 5}`,
      width: "21.42px",
      height: "21.42px"
    }
  }), value !== startValue && value !== endValue && /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      position: "absolute",
      top: "-22px",
      left: `${220 * factorValue - 5}`,
      width: "21.42px",
      textAlign: "center"
    }
  }, (+value).toFixed(3))), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: "5px"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, null, startValue), /*#__PURE__*/_react.default.createElement(_renderer.Text, null, endValue)));
}
var _default = RangeIndicator;
exports.default = _default;