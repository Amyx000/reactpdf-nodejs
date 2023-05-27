"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderer = require("@react-pdf/renderer");
var _react = _interopRequireDefault(require("react"));
var _Heading = _interopRequireDefault(require("../../common/Heading"));
var _Footer = _interopRequireDefault(require("../../common/Footer"));
var _RangeIndicator = _interopRequireDefault(require("./RangeIndicator"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Page11({
  data
}) {
  return /*#__PURE__*/_react.default.createElement(_renderer.Page, {
    style: {
      padding: "40px 40px 0"
    }
  }, /*#__PURE__*/_react.default.createElement(_Heading.default, {
    text: "Alpha Diversity Index"
  }), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontFamily: "Nunito",
      fontSize: "13px"
    }
  }, "Your Alpha Diversity Scores tells a lot about how many different types of microorganisms are present in your gut, if they are in the optimal proportion, and if they are evenly present within the intestine. For healthy ageing, and resistance against various chronic disease, it is important to maintain a highly diverse gut microbiome."), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      marginTop: "30px"
    }
  }, /*#__PURE__*/_react.default.createElement(_Heading.default, {
    text: "Bacterial Species Richness (Shannon)",
    type: "small"
  }), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      display: "flex",
      flexDirection: "row",
      gap: "10px"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      width: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_RangeIndicator.default, {
    startValue: "0",
    endValue: "6",
    value: data.diversityIndeces[0]["Shannon index"]
  })), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      fontFamily: "Nunito",
      fontSize: "11px",
      width: "50%",
      textAlign: "justify"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, null, "Combines richness and diversity of the population. It measures both the number of species and the inequality between species abundances."), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontFamily: "NunitoB",
      marginTop: "10px"
    }
  }, "Interpretation:"), /*#__PURE__*/_react.default.createElement(_renderer.Text, null, data.diversityIndeces[0].remark)))), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      marginTop: "30px"
    }
  }, /*#__PURE__*/_react.default.createElement(_Heading.default, {
    text: "Bacterial Species Diversity (Simpson)",
    type: "small",
    line: "left"
  }), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      display: "flex",
      flexDirection: "row-reverse",
      gap: "10px"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      width: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_RangeIndicator.default, {
    value: data.diversityIndeces[1]["Simpson index"]
  })), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      fontFamily: "Nunito",
      fontSize: "11px",
      width: "50%",
      textAlign: "justify"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, null, "Simpson's Diversity Index is a measure of diversity which takes into account the number of species present, as well as the relative abundance of each species. As species richness and evenness increase, so diversity increases."), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontFamily: "NunitoB",
      marginTop: "10px"
    }
  }, "Interpretation:"), /*#__PURE__*/_react.default.createElement(_renderer.Text, null, data.diversityIndeces[1].remark)))), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      marginTop: "30px"
    }
  }, /*#__PURE__*/_react.default.createElement(_Heading.default, {
    text: "Bacterial Species Evenness",
    type: "small"
  }), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      display: "flex",
      flexDirection: "row",
      gap: "10px"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      width: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_RangeIndicator.default, {
    value: data.diversityIndeces[2]["Pielou index"]
  })), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      fontFamily: "Nunito",
      fontSize: "11px",
      width: "50%",
      textAlign: "justify"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, null, "Species evenness refers to how close in numbers each species in an environment is Measures how evenly the microbes are distributed in a sample without considering the number of species"), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontFamily: "NunitoB",
      marginTop: "10px"
    }
  }, "Interpretation:"), /*#__PURE__*/_react.default.createElement(_renderer.Text, null, data.diversityIndeces[2].remark)))), /*#__PURE__*/_react.default.createElement(_Footer.default, {
    name: data.patientName,
    barcode: data.barcode,
    pageNo: "11"
  }));
}
var _default = Page11;
exports.default = _default;