"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderer = require("@react-pdf/renderer");
var _react = _interopRequireDefault(require("react"));
var _Heading = _interopRequireDefault(require("../../common/Heading"));
var _Footer = _interopRequireDefault(require("../../common/Footer"));
var _MetabolicProfileSection = _interopRequireDefault(require("./MetabolicProfileSection"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Page20to25({
  data
}) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_renderer.Page, {
    style: {
      padding: "40px 40px 0"
    }
  }, /*#__PURE__*/_react.default.createElement(_Heading.default, {
    text: "Metabolic Profile",
    marginBottom: "15px"
  }), /*#__PURE__*/_react.default.createElement(_MetabolicProfileSection.default, {
    heading: "Carbohydrate Metabolism",
    data: data.metabolism[0],
    img: "carb1.png"
  }), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      marginTop: "20px"
    }
  }, /*#__PURE__*/_react.default.createElement(_MetabolicProfileSection.default, {
    heading: "Protein Metabolism",
    data: data.metabolism[1],
    img: "protein1.png"
  })), /*#__PURE__*/_react.default.createElement(_Footer.default, {
    name: data.patientName,
    barcode: data.barcode,
    pageNo: data.keystoneSpecies.length <= 27 ? "19" : "20"
  })), /*#__PURE__*/_react.default.createElement(_renderer.Page, {
    style: {
      padding: "40px 40px 0"
    }
  }, /*#__PURE__*/_react.default.createElement(_Heading.default, {
    text: "Metabolic Profile",
    marginBottom: "15px"
  }), /*#__PURE__*/_react.default.createElement(_MetabolicProfileSection.default, {
    heading: "Vitamin Metabolism",
    data: [data.vitamin[0], data.vitamin[1]]
  }), /*#__PURE__*/_react.default.createElement(_Footer.default, {
    name: data.patientName,
    barcode: data.barcode,
    pageNo: data.keystoneSpecies.length <= 27 ? "20" : "21"
  })), /*#__PURE__*/_react.default.createElement(_renderer.Page, {
    style: {
      padding: "40px 40px 0"
    }
  }, /*#__PURE__*/_react.default.createElement(_Heading.default, {
    text: "Metabolic Profile",
    marginBottom: "15px"
  }), /*#__PURE__*/_react.default.createElement(_MetabolicProfileSection.default, {
    heading: "Vitamin Metabolism",
    data: [data.vitamin[2], data.vitamin[3]]
  }), /*#__PURE__*/_react.default.createElement(_Footer.default, {
    name: data.patientName,
    barcode: data.barcode,
    pageNo: data.keystoneSpecies.length <= 27 ? "21" : "22"
  })), /*#__PURE__*/_react.default.createElement(_renderer.Page, {
    style: {
      padding: "40px 40px 0"
    }
  }, /*#__PURE__*/_react.default.createElement(_Heading.default, {
    text: "Metabolic Profile",
    marginBottom: "15px"
  }), /*#__PURE__*/_react.default.createElement(_MetabolicProfileSection.default, {
    heading: "Lipid Metabolism",
    data: data.lipid
  }), /*#__PURE__*/_react.default.createElement(_Footer.default, {
    name: data.patientName,
    barcode: data.barcode,
    pageNo: data.keystoneSpecies.length <= 27 ? "22" : "23"
  })), /*#__PURE__*/_react.default.createElement(_renderer.Page, {
    style: {
      padding: "40px 40px 0"
    }
  }, /*#__PURE__*/_react.default.createElement(_Heading.default, {
    text: "Metabolic Profile",
    marginBottom: "15px"
  }), /*#__PURE__*/_react.default.createElement(_MetabolicProfileSection.default, {
    heading: "Gas Production",
    data: data.gas
  }), /*#__PURE__*/_react.default.createElement(_Footer.default, {
    name: data.patientName,
    barcode: data.barcode,
    pageNo: data.keystoneSpecies.length <= 27 ? "23" : "24"
  })), /*#__PURE__*/_react.default.createElement(_renderer.Page, {
    style: {
      padding: "40px 40px 0"
    }
  }, /*#__PURE__*/_react.default.createElement(_Heading.default, {
    text: "Metabolic Profile",
    marginBottom: "15px"
  }), /*#__PURE__*/_react.default.createElement(_MetabolicProfileSection.default, {
    heading: "Gut Brain Axis",
    data: data.gutBrain
  }), /*#__PURE__*/_react.default.createElement(_Footer.default, {
    name: data.patientName,
    barcode: data.barcode,
    pageNo: data.keystoneSpecies.length <= 27 ? "24" : "25"
  })));
}
var _default = Page20to25;
exports.default = _default;