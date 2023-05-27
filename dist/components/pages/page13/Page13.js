"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Footer = _interopRequireDefault(require("../../common/Footer"));
var _renderer = require("@react-pdf/renderer");
var _Heading = _interopRequireDefault(require("../../common/Heading"));
var _PathogenTable = _interopRequireDefault(require("./PathogenTable"));
var _FoodTable = _interopRequireDefault(require("../../common/FoodTable"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Page13({
  data
}) {
  const Food = data.pathogenFoodRecomendation ? data.pathogenFoodRecomendation.length ? data.pathogenFoodRecomendation.join(", ") : "" : "";
  return /*#__PURE__*/_react.default.createElement(_renderer.Page, {
    style: {
      padding: "40px 40px 0"
    }
  }, /*#__PURE__*/_react.default.createElement(_Heading.default, {
    text: "Pathogens",
    marginBottom: "6px"
  }), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontFamily: "Nunito",
      fontSize: "13px",
      textAlign: "justify",
      marginBottom: "5px"
    }
  }, "Intestinal bacteria play a crucial role in maintaining immune and metabolic homeostasis and protecting against pathogens. Altered gut bacterial composition (dysbiosis) has been associated with the pathogenesis of many inflammatory diseases and infections."), /*#__PURE__*/_react.default.createElement(_PathogenTable.default, {
    data: data.pathogen
  }), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      display: "flex",
      flexDirection: "row",
      gap: "30px",
      marginTop: "11px"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      display: "flex",
      flexDirection: "row",
      gap: "10px",
      alignItems: "center",
      fontFamily: "NunitoBold",
      fontSize: "14px"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      width: "13.5px",
      height: "13.5px",
      backgroundColor: "#FF1616",
      borderRadius: "50%"
    }
  }), /*#__PURE__*/_react.default.createElement(_renderer.Text, null, "Pathogen")), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      display: "flex",
      flexDirection: "row",
      gap: "10px",
      alignItems: "center",
      fontFamily: "NunitoBold",
      fontSize: "14px"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      width: "13.5px",
      height: "13.5px",
      backgroundColor: "#FDCB58",
      borderRadius: "50%"
    }
  }), /*#__PURE__*/_react.default.createElement(_renderer.Text, null, "Moderately Pathogenic"))), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      margin: "10px 0"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontFamily: "NunitoBold",
      fontSize: "14px"
    }
  }, "Indication:"), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontFamily: "NunitoLitalic",
      fontSize: "13px"
    }
  }, data.pathogenIndication)), /*#__PURE__*/_react.default.createElement(_FoodTable.default, {
    Food: Food
  }), /*#__PURE__*/_react.default.createElement(_Footer.default, {
    name: data.patientName,
    barcode: data.barcode,
    pageNo: "13"
  }));
}
var _default = Page13;
exports.default = _default;