"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderer = require("@react-pdf/renderer");
var _react = _interopRequireDefault(require("react"));
var _CustomFunctions = require("../../../utils/CustomFunctions");
var _ScaleIndicator = _interopRequireDefault(require("../../common/ScaleIndicator"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function MetabolicProfileSection({
  heading,
  data,
  img = "carb1.png"
}) {
  let gap;
  let marginBottom;
  (() => {
    if (Array.isArray(data)) {
      if (data.length > 2) {
        gap = "15px";
        marginBottom = "20px";
      } else {
        gap = "20px";
        marginBottom = "30px";
      }
    } else {
      gap = "20px";
      marginBottom = "30px";
    }
  })();
  return /*#__PURE__*/_react.default.createElement(_renderer.View, null, /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      fontFamily: "NunitoBold",
      fontSize: "23px",
      backgroundColor: "#177DC0",
      width: "120%",
      padding: "5px",
      marginBottom
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, null, heading)), Array.isArray(data) ? /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap
    }
  }, data.map((obj, i) => {
    return /*#__PURE__*/_react.default.createElement(_renderer.View, {
      key: i,
      style: {
        display: "flex",
        flexDirection: "row",
        position: "relative"
      }
    }, /*#__PURE__*/_react.default.createElement(_renderer.View, {
      style: {
        width: '60%'
      }
    }, /*#__PURE__*/_react.default.createElement(_renderer.Image, {
      src: (0, _CustomFunctions.ImgToBase64)(__dirname, img),
      style: {
        width: "244px"
      }
    })), /*#__PURE__*/_react.default.createElement(_ScaleIndicator.default, {
      top: "140px",
      left: "0",
      range: obj.remarks,
      width: "280px"
    }), /*#__PURE__*/_react.default.createElement(_renderer.View, {
      style: {
        width: '40%'
      }
    }, /*#__PURE__*/_react.default.createElement(_renderer.View, {
      style: {
        fontFamily: "NunitoBold",
        fontSize: "17px",
        backgroundColor: "#177DC0",
        color: "white",
        width: "120%",
        paddingLeft: "2px"
      }
    }, /*#__PURE__*/_react.default.createElement(_renderer.Text, null, obj.metabolicProfile)), /*#__PURE__*/_react.default.createElement(_renderer.View, null, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
      style: {
        fontFamily: "NunitoB",
        fontSize: "13.88px",
        margin: "10px 0 1px"
      }
    }, "Indications:"), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
      style: {
        fontFamily: "NunitoM",
        fontSize: "10px"
      }
    }, obj.curation)), /*#__PURE__*/_react.default.createElement(_renderer.View, null, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
      style: {
        fontFamily: "NunitoB",
        fontSize: "13.88px",
        margin: "10px 0 1px"
      }
    }, "Food Recommendation:"), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
      style: {
        fontFamily: "NunitoM",
        fontSize: "10px"
      }
    }, obj.recommendation))));
  })) : /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      display: "flex",
      flexDirection: "row",
      position: "relative"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      width: '60%'
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Image, {
    src: (0, _CustomFunctions.ImgToBase64)(__dirname, img),
    style: {
      width: "244px"
    }
  })), /*#__PURE__*/_react.default.createElement(_ScaleIndicator.default, {
    top: "140px",
    left: "0",
    range: data.remarks,
    width: "280px"
  }), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      width: '40%'
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      fontFamily: "NunitoBold",
      fontSize: "17px",
      backgroundColor: "#177DC0",
      color: "white",
      width: "120%",
      paddingLeft: "2px"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, null, data.metabolicProfile)), /*#__PURE__*/_react.default.createElement(_renderer.View, null, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontFamily: "NunitoB",
      fontSize: "13.88px",
      margin: "10px 0 1px"
    }
  }, "Indications:"), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontFamily: "NunitoM",
      fontSize: "10px"
    }
  }, data.curation)), /*#__PURE__*/_react.default.createElement(_renderer.View, null, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontFamily: "NunitoB",
      fontSize: "13.88px",
      margin: "10px 0 1px"
    }
  }, "Food Recommendation:"), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontFamily: "NunitoM",
      fontSize: "10px"
    }
  }, data.recommendation)))));
}
var _default = MetabolicProfileSection;
exports.default = _default;