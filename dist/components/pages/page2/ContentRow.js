"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderer = require("@react-pdf/renderer");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const style = _renderer.StyleSheet.create({
  heading: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between",
    fontFamily: "NunitoB",
    fontSize: "19.5px"
  },
  subheading: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between",
    fontFamily: "NunitoL",
    fontSize: "19.5px"
  }
});
function ContentRow({
  heading = false,
  text,
  no,
  paddingLeft
}) {
  return heading ? /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: style.heading
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, null, text), /*#__PURE__*/_react.default.createElement(_renderer.Text, null, no)) : /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: style.subheading
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      paddingLeft
    }
  }, text), /*#__PURE__*/_react.default.createElement(_renderer.Text, null, no));
}
var _default = ContentRow;
exports.default = _default;