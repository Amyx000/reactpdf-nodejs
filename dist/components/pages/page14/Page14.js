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
function Page14({
  data
}) {
  return /*#__PURE__*/_react.default.createElement(_renderer.Page, {
    style: {
      padding: "40px 40px 0"
    }
  }, /*#__PURE__*/_react.default.createElement(_Heading.default, {
    text: "Gut Enterotype"
  }), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      display: "flex",
      flexDirection: "row",
      gap: "40px"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      width: "40%",
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      width: "200px",
      height: "65.5px",
      textAlign: "center",
      backgroundColor: "#177DC0",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      fontFamily: "NunitoBold"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontSize: "26px"
    }
  }, (+data.enterotype.Prevotella).toFixed(2)), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontSize: "18px"
    }
  }, "Prevotella")), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      width: "200px",
      height: "65.5px",
      textAlign: "center",
      backgroundColor: "#177DC0",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      fontFamily: "NunitoBold",
      opacity: "0.5"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontSize: "26px",
      opacity: "1"
    }
  }, (+data.enterotype.Bacteroides).toFixed(2)), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontSize: "18px",
      opacity: "1"
    }
  }, "Bacteroides")), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      width: "200px",
      height: "65.5px",
      textAlign: "center",
      backgroundColor: "#177DC0",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      fontFamily: "NunitoBold",
      opacity: "0.25"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontSize: "26px",
      opacity: "1"
    }
  }, (+data.enterotype.Ruminococcus).toFixed(2)), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontSize: "18px",
      opacity: "1"
    }
  }, "Ruminococcus"))), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      width: "60%",
      display: "flex",
      flexDirection: "column",
      gap: "15px"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontFamily: "NunitoBold",
      fontSize: "18px",
      color: "#177DC0"
    }
  }, "Your Gut Type: Enterotype 1"), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontFamily: "NunitoLitalic",
      fontSize: "13px"
    }
  }, data.enterotypeRemarks), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      fontFamily: "NunitoLitalic",
      fontSize: "13px"
    }
  }, "Bacteroides enterotype is associated with a diet high in fats but low in fiber. Studies have claimed that a high abundance of Bacteroides maybe associated with diabetes and obesity."))), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      marginTop: "57px",
      display: "flex",
      flexDirection: "column",
      gap: "15px"
    }
  }, /*#__PURE__*/_react.default.createElement(_CardSection.default, {
    img: "food1.png",
    heading: "Enterotype 1",
    subheading: "Protein Favorite",
    des: "Especially for people who often eat meat: Bacteroides",
    backgroundColor: "#C9EEFF"
  }), /*#__PURE__*/_react.default.createElement(_CardSection.default, {
    img: "food2.png",
    heading: "Enterotype 2",
    subheading: "Fibre Favorite",
    des: "Especially for people who eat vegan or vegetarian food: Prevotella",
    backgroundColor: "#C9EEFF"
  }), /*#__PURE__*/_react.default.createElement(_CardSection.default, {
    img: "food3.png",
    heading: "Enterotype 3",
    subheading: "Omnivores",
    des: "Especially for people who prefer a balanced diet: Ruminococcus",
    backgroundColor: "#C9EEFF"
  })), /*#__PURE__*/_react.default.createElement(_Footer.default, {
    name: data.patientName,
    barcode: data.barcode,
    pageNo: "14"
  }));
}
var _default = Page14;
exports.default = _default;