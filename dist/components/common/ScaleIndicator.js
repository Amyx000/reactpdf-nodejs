"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderer = require("@react-pdf/renderer");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ScaleIndicator({
  width = "320.42px",
  range,
  top,
  right,
  left
}) {
  const pointerPositions = {
    "Below Average": "14%",
    "Fair": "34%",
    "Good": "47%",
    "Very Good": "66%",
    "Excellent": "88%"
  };
  return /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      position: "absolute",
      top,
      right,
      left,
      width
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "1px"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      backgroundColor: "#D82727",
      height: "3.6px",
      width: "30%"
    }
  }), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      backgroundColor: "#FBA000",
      height: "3.6px",
      width: "12.5%"
    }
  }), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      backgroundColor: "#F8BA31",
      height: "3.6px",
      width: "12.5%"
    }
  }), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      backgroundColor: "#54C45B",
      height: "3.6px",
      width: "25%"
    }
  }), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      backgroundColor: "#159453",
      height: "3.6px",
      width: "20%"
    }
  }), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      position: "absolute",
      top: "-33px",
      left: pointerPositions[range],
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      width: "15px",
      height: "15px",
      borderRadius: "50%",
      backgroundColor: "#177DC0"
    }
  }), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      width: "1px",
      height: "11.5px",
      borderRadius: "50%",
      backgroundColor: "#177DC0"
    }
  }))), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "1px",
      fontFamily: "NunitoBold",
      fontSize: "11px"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      textAlign: "center",
      width: "30%"
    }
  }, "Below Average"), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      textAlign: "center",
      width: "12.5%"
    }
  }, "Fair"), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      textAlign: "center",
      width: "12.5%"
    }
  }, "Good"), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      textAlign: "center",
      width: "25%"
    }
  }, "Very Good"), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      textAlign: "center",
      width: "20%"
    }
  }, "Excellent")));
}
var _default = ScaleIndicator;
exports.default = _default;