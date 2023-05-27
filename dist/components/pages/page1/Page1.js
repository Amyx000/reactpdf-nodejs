"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderer = require("@react-pdf/renderer");
var _react = _interopRequireDefault(require("react"));
var _CustomFunctions = require("../../../utils/CustomFunctions");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const styles = _renderer.StyleSheet.create({
  heading: {
    backgroundColor: '#2E3192',
    color: "white",
    borderRadius: "20px",
    display: "flex",
    width: "283.02px",
    height: "28.64px",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
    fontFamily: "Nunito"
  },
  name: {
    fontFamily: "MetropolisSemibold",
    fontSize: "65px",
    marginTop: "50px"
  },
  art: {
    position: "absolute",
    bottom: "-10px",
    right: "37.31px",
    width: "229.3px"
  },
  bottomLeft: {
    position: "absolute",
    left: "40px",
    bottom: "25px",
    width: "212px"
  }
});
function Page1({
  name
}) {
  return /*#__PURE__*/_react.default.createElement(_renderer.Page, {
    style: {
      paddingLeft: "40px",
      paddingRight: "40px"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Image, {
    src: (0, _CustomFunctions.ImgToBase64)(__dirname, "logo.png"),
    style: {
      width: '280px',
      marginTop: "60px"
    }
  }), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: styles.heading
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, null, "Advanced Gut Microbiome Test")), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: styles.name
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, null, "Hello,"), name.split(" ")[1].length <= 11 ? /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      color: "#177DC1",
      fontSize: "55px"
    }
  }, name) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      color: "#177DC1",
      fontSize: "55px"
    }
  }, name.split(" ")[0]), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      color: "#177DC1",
      fontSize: "55px"
    }
  }, name.split(" ")[1]))), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: styles.bottomLeft
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      marginBottom: "10px",
      fontFamily: "NunitoBold",
      fontSize: "19.5px"
    }
  }, "Decode Age"), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontFamily: "NunitoM",
      fontSize: "12px"
    }
  }, "No. 7, 1, Haudin Rd, Yellappa Chetty Layout Sivanchetti Gardens, Halasuru, Bengaluru, Karnataka 560042")), /*#__PURE__*/_react.default.createElement(_renderer.Image, {
    src: (0, _CustomFunctions.ImgToBase64)(__dirname, "Asset1.png"),
    style: styles.art
  }));
}
var _default = Page1;
exports.default = _default;