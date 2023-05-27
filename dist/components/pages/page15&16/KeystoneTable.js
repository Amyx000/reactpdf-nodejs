"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderer = require("@react-pdf/renderer");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function KeystoneTable({
  data
}) {
  const rangeColor = {
    "Low": "#FFDD7A",
    "In-Range": "#58DD85",
    "High": "#E86767"
  };
  return /*#__PURE__*/_react.default.createElement(_renderer.View, null, /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      display: "flex",
      flexDirection: "row",
      alignItems: 'center',
      border: "1px solid black",
      fontFamily: 'NunitoBold',
      fontSize: "9px",
      height: "21.45px",
      padding: "0 5px",
      marginBottom: "15px"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      width: "40%"
    }
  }, "KEYSTONE SPECIES"), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      width: "40%",
      textAlign: "center"
    }
  }, "RELATIVE ABUNDANCE"), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      width: "20%"
    }
  }, "RANGE")), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "3px"
    }
  }, data.map((obj, i) => {
    return /*#__PURE__*/_react.default.createElement(_renderer.View, {
      key: i,
      style: {
        fontFamily: "NunitoBold",
        fontSize: "11px",
        backgroundColor: rangeColor[obj.range],
        display: "flex",
        flexDirection: "row",
        padding: "2px 5px"
      }
    }, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
      style: {
        width: "40%"
      }
    }, obj.bacteria.replace(/_/g, " ")), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
      style: {
        textAlign: "center",
        width: "40%"
      }
    }, obj.abundance), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
      style: {
        width: "20%"
      }
    }, obj.range));
  })));
}
var _default = KeystoneTable;
exports.default = _default;