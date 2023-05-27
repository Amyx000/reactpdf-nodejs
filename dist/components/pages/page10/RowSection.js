"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderer = require("@react-pdf/renderer");
var _react = _interopRequireDefault(require("react"));
var _Table = _interopRequireDefault(require("./Table"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function RowSection({
  title,
  color,
  tablePosition = "left",
  data
}) {
  return /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      display: "flex",
      flexDirection: tablePosition === "left" ? "row" : "row-reverse",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      height: "205px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "50%"
    }
  }, /*#__PURE__*/_react.default.createElement(_Table.default, {
    data: data
  })), /*#__PURE__*/_react.default.createElement(_renderer.View, null, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      color,
      fontFamily: "NunitoExBold",
      fontSize: "19.5px",
      textAlign: "center"
    }
  }, title)));
}
var _default = RowSection;
exports.default = _default;