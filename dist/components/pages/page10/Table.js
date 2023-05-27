"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderer = require("@react-pdf/renderer");
var _react = _interopRequireDefault(require("react"));
var _data = require("../../../data");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const style = _renderer.StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: "NunitoBold",
    fontSize: "10.5px",
    color: "white",
    padding: "1px 3px"
  }
});
function Table({
  data
}) {
  return /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "2px",
      marginTop: "25px"
    }
  }, Object.keys(data).map((key, i) => {
    return /*#__PURE__*/_react.default.createElement(_renderer.View, {
      key: i,
      style: {
        backgroundColor: _data.colors[i]
      }
    }, /*#__PURE__*/_react.default.createElement(_renderer.View, {
      style: style.row
    }, /*#__PURE__*/_react.default.createElement(_renderer.Text, null, key), /*#__PURE__*/_react.default.createElement(_renderer.Text, null, (+data[key]).toFixed(2))));
  }));
}
var _default = Table;
exports.default = _default;