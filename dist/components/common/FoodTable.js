"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderer = require("@react-pdf/renderer");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function FoodTable({
  Food
}) {
  return /*#__PURE__*/_react.default.createElement(_renderer.View, null, /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      fontFamily: "NunitoExBold",
      color: "white",
      backgroundColor: "black",
      padding: "5px 3px",
      fontSize: "11px",
      marginBottom: "1px"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, null, "FOOD RECOMMENDATION")), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      fontFamily: "NunitoBold",
      fontSize: "10.5px",
      backgroundColor: "#177DC0",
      opacity: 0.3,
      padding: "5px"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      opacity: "1"
    }
  }, Food || "N.A")));
}
var _default = FoodTable;
exports.default = _default;