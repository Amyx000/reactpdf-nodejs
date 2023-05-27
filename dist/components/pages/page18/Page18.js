"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderer = require("@react-pdf/renderer");
var _react = _interopRequireDefault(require("react"));
var _Heading = _interopRequireDefault(require("../../common/Heading"));
var _Footer = _interopRequireDefault(require("../../common/Footer"));
var _CardSection = _interopRequireDefault(require("./CardSection"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Page18({
  data,
  pageNo
}) {
  return /*#__PURE__*/_react.default.createElement(_renderer.Page, {
    style: {
      padding: "40px 40px 0"
    }
  }, /*#__PURE__*/_react.default.createElement(_Heading.default, {
    text: "Gut Inflammation Profile",
    marginBottom: "6px"
  }), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontFamily: "Nunito",
      fontSize: "12px"
    }
  }, "Short Chain Fatty Acids (SCFAs) are small molecules produced by our gut microbiome by digesting fibres. They have been found to help slow down the aging process by supporting healthy gut function, boosting the immune system, and improving metabolism."), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      marginTop: "35px",
      display: "flex",
      flexDirection: "column",
      gap: "40px"
    }
  }, /*#__PURE__*/_react.default.createElement(_CardSection.default, {
    defination: "Acetate is produced by gut bacteria which has Anti-Inflammatory properties and helps in maintaining gut homeostasis and reduces risk of Hypertension and brain diseases.",
    data: data.scfa[0],
    headingWidth: "140px"
  }), /*#__PURE__*/_react.default.createElement(_CardSection.default, {
    defination: "Butyrate is one of the important and abundantly present metabolite in human gut. It plays a major role in maintaining gut health, has anti-inflammatory and anti-neoplastic properties, aids in boosting immune system in the body and reduces risk of developing cardio-vascular and neural diseases.",
    data: data.scfa[1],
    headingWidth: "155px"
  }), /*#__PURE__*/_react.default.createElement(_CardSection.default, {
    defination: "Propionate is produced by gut bacteria which regulates appetite and helps in weight management. It also aids in maintaining glucose level and reduces risk for Inflammation.",
    data: data.scfa[2],
    headingWidth: "180px"
  })), /*#__PURE__*/_react.default.createElement(_Footer.default, {
    name: data.patientName,
    barcode: data.barcode,
    pageNo: pageNo
  }));
}
var _default = Page18;
exports.default = _default;