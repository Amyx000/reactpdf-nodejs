"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderer = require("@react-pdf/renderer");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Line({
  marginTop = "19px",
  marginBottom = 0
}) {
  return /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      width: "100%",
      height: "2px",
      backgroundColor: "black",
      marginTop,
      marginBottom
    }
  });
}
var _default = Line;
exports.default = _default;