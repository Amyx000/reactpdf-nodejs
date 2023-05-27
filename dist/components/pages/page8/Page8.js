"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderer = require("@react-pdf/renderer");
var _react = _interopRequireDefault(require("react"));
var _Heading = _interopRequireDefault(require("../../common/Heading"));
var _Line = _interopRequireDefault(require("../../common/Line"));
var _Footer = _interopRequireDefault(require("../../common/Footer"));
var _CustomFunctions = require("../../../utils/CustomFunctions");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Page8({
  data
}) {
  const biomeScore = data.biomeScore["GMHI Score"];
  const scaleMaxValue = 10;
  const angle = +biomeScore * 90 / scaleMaxValue;
  return /*#__PURE__*/_react.default.createElement(_renderer.Page, {
    style: {
      padding: "40px 40px 0"
    }
  }, /*#__PURE__*/_react.default.createElement(_Heading.default, {
    text: "Your Biome Score"
  }), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontFamily: "Nunito",
      fontSize: "13.5px",
      marginBottom: "28px"
    }
  }, "Our Decode Biome Score is a biologically-interpretable Mathematical Score predicting the overall balance between the health promoting and health deteriorating species. A higher score is indicative of resistance towards various age-related diseases."), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      display: "flex",
      flexDirection: "row",
      gap: "60.4px",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      color: "#177DC0",
      fontSize: "30px",
      fontFamily: "NunitoB"
    }
  }, "< 0 SCORE"), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontFamily: "NunitoBold",
      fontSize: "18px"
    }
  }, "Unhealthy")), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      display: "flex",
      flexDirection: "row",
      gap: "87px",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      color: "#177DC0",
      fontSize: "30px",
      fontFamily: "NunitoB"
    }
  }, "0 SCORE"), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontFamily: "NunitoBold",
      fontSize: "18px"
    }
  }, "Balanced microbial profile")), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      display: "flex",
      flexDirection: "row",
      gap: "60.4px",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      color: "#177DC0",
      fontSize: "30px",
      fontFamily: "NunitoB"
    }
  }, "> 0 SCORE"), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontFamily: "NunitoBold",
      fontSize: "18px"
    }
  }, "Healthy gut score")), /*#__PURE__*/_react.default.createElement(_Line.default, null), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      fontFamily: "NunitoB",
      marginTop: "265px"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      color: "#177DC0",
      fontSize: "24.75px",
      textAlign: "center"
    }
  }, "Your Biome Score : ", (+biomeScore).toFixed(2)), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontSize: "18px",
      marginTop: "20px"
    }
  }, "Interpretation:"), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontSize: "18px",
      fontFamily: "Nunito"
    }
  }, data.biomeScore.remark)), /*#__PURE__*/_react.default.createElement(_renderer.Image, {
    src: (0, _CustomFunctions.ImgToBase64)(__dirname, "cloud1.png"),
    style: {
      width: "126.74px",
      position: "absolute",
      top: "388.9px",
      left: "-14px"
    }
  }), /*#__PURE__*/_react.default.createElement(_renderer.Image, {
    src: (0, _CustomFunctions.ImgToBase64)(__dirname, "cloud2.png"),
    style: {
      width: "146.61px",
      position: "absolute",
      top: "374.48px",
      left: "450.49px"
    }
  }), /*#__PURE__*/_react.default.createElement(_renderer.Image, {
    src: (0, _CustomFunctions.ImgToBase64)(__dirname, "cloud3.png"),
    style: {
      width: "88.23px",
      position: "absolute",
      top: "510.42px",
      left: "89px"
    }
  }), /*#__PURE__*/_react.default.createElement(_renderer.Image, {
    src: (0, _CustomFunctions.ImgToBase64)(__dirname, "cloud4.png"),
    style: {
      width: "110.09px",
      position: "absolute",
      top: "496.13px",
      left: "385.48px"
    }
  }), /*#__PURE__*/_react.default.createElement(_renderer.Image, {
    src: (0, _CustomFunctions.ImgToBase64)(__dirname, "chart.png"),
    style: {
      width: "422px",
      position: "absolute",
      top: "385px",
      left: "83px"
    }
  }), /*#__PURE__*/_react.default.createElement(_renderer.Image, {
    src: (0, _CustomFunctions.ImgToBase64)(__dirname, "needle.png"),
    style: {
      width: "14.38px",
      position: "absolute",
      top: "431px",
      left: "285.7px",
      transformOrigin: "bottom center",
      transform: `rotate(${angle}deg)`
    }
  }), /*#__PURE__*/_react.default.createElement(_renderer.Image, {
    src: (0, _CustomFunctions.ImgToBase64)(__dirname, "semicircle.png"),
    style: {
      width: "36.92px",
      position: "absolute",
      top: "550px",
      left: "275px"
    }
  }), /*#__PURE__*/_react.default.createElement(_Footer.default, {
    name: data.patientName,
    barcode: data.barcode,
    pageNo: "08"
  }));
}
var _default = Page8;
exports.default = _default;