"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _renderer = require("@react-pdf/renderer");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function PieChart({
  chartData,
  legend = false,
  top,
  bottom,
  left,
  right,
  width = "170px"
}) {
  return legend ? /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      position: "absolute",
      top,
      bottom,
      left,
      right,
      width,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Image, {
    src: `data:image/png;base64,${chartData.image}`,
    style: {
      width: "70%"
    }
  }), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      display: "flex",
      flexDirection: "row",
      gap: "5px",
      flexWrap: 'wrap',
      fontSize: "7px",
      textAlign: "center",
      justifyContent: "center"
    }
  }, chartData.labels.map((item, i) => {
    return /*#__PURE__*/_react.default.createElement(_renderer.View, {
      key: i,
      style: {
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        gap: "3px"
      }
    }, /*#__PURE__*/_react.default.createElement(_renderer.View, {
      style: {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: chartData.backgroundColor[i]
      }
    }), /*#__PURE__*/_react.default.createElement(_renderer.Text, null, item, `(${chartData.data[i]}%)`));
  }))) : /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      position: "absolute",
      top,
      bottom,
      left,
      right,
      width
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Image, {
    src: `data:image/png;base64,${chartData.image}`,
    style: {
      width: "100%"
    }
  }));
}
var _default = PieChart;
exports.default = _default;