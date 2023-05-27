"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderer = require("@react-pdf/renderer");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function PathogenTable({
  data
}) {
  return /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      display: "flex",
      flexDirection: "row",
      alignItems: 'center',
      border: "1px solid black",
      fontFamily: 'NunitoBold',
      fontSize: "9px",
      height: "21.45px",
      padding: "0 5px"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      width: "200px"
    }
  }, "PATHOGENS DETECTED"), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      width: "150px",
      textAlign: "center"
    }
  }, "RELATIVE ABUNDANCE"), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      width: "150px",
      textAlign: "right"
    }
  }, "TAG")), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      border: "1px solid black",
      fontFamily: 'NunitoBold',
      fontSize: "12px"
    }
  }, data.map((obj, i) => {
    return /*#__PURE__*/_react.default.createElement(_renderer.View, {
      key: i,
      style: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        padding: "2px 5px"
      }
    }, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
      style: {
        width: "200px",
        color: "#177DC0"
      }
    }, obj.bacteria.replace(/_/g, " ")), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
      style: {
        width: "150px",
        textAlign: "center"
      }
    }, obj.abundance), /*#__PURE__*/_react.default.createElement(_renderer.View, {
      style: {
        width: "150px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
      }
    }, /*#__PURE__*/_react.default.createElement(_renderer.View, {
      style: {
        width: "13.5px",
        height: "13.5px",
        backgroundColor: +obj.abundance > 0.6 ? "#FF1616" : "#FDCB58",
        borderRadius: "50%"
      }
    })));
  })));
}
var _default = PathogenTable;
exports.default = _default;