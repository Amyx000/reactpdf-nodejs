"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderer = require("@react-pdf/renderer");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Footer({
  pageNo = undefined,
  color = "#177DC0",
  name = "Customer Name",
  barcode
}) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      color,
      position: "absolute",
      bottom: "22.68px",
      left: "129px",
      fontFamily: "NunitoL",
      fontSize: "15px"
    }
  }, "Decode Age | Decode Biome ", name, " ", new Date().getFullYear(), " | ", barcode), pageNo && /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      color,
      position: "absolute",
      bottom: "22.68px",
      left: "549.92px",
      borderBottom: "2px",
      borderColor: color,
      fontFamily: "NunitoL",
      fontSize: "15px"
    }
  }, pageNo));
}
var _default = Footer;
exports.default = _default;