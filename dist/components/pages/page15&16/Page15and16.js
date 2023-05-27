"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderer = require("@react-pdf/renderer");
var _react = _interopRequireDefault(require("react"));
var _Heading = _interopRequireDefault(require("../../common/Heading"));
var _Footer = _interopRequireDefault(require("../../common/Footer"));
var _KeystoneTable = _interopRequireDefault(require("./KeystoneTable"));
var _FoodTable = _interopRequireDefault(require("../../common/FoodTable"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Page15and16({
  data
}) {
  const Food = data.keystoneFoodRecommendations;
  let page15data;
  let page16data;
  (() => {
    const maxLengthPerPage = 27;
    if (data.keystoneSpecies.length > maxLengthPerPage) {
      page15data = data.keystoneSpecies.slice(0, maxLengthPerPage);
      page16data = data.keystoneSpecies.slice(maxLengthPerPage);
    } else {
      page15data = data.keystoneSpecies;
      page16data = [];
    }
  })();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_renderer.Page, {
    style: {
      padding: "40px 40px 0"
    }
  }, /*#__PURE__*/_react.default.createElement(_Heading.default, {
    text: "Keystone Species",
    marginBottom: "6px"
  }), /*#__PURE__*/_react.default.createElement(_KeystoneTable.default, {
    data: page15data
  }), !page16data.length ? /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      marginTop: "20px"
    }
  }, /*#__PURE__*/_react.default.createElement(_FoodTable.default, {
    Food: Food
  })) : null, /*#__PURE__*/_react.default.createElement(_Footer.default, {
    name: data.patientName,
    barcode: data.barcode,
    pageNo: "15"
  })), page16data.length ? /*#__PURE__*/_react.default.createElement(_renderer.Page, {
    style: {
      padding: "40px 40px 0"
    }
  }, /*#__PURE__*/_react.default.createElement(_Heading.default, {
    text: "Keystone Species",
    marginBottom: "6px"
  }), /*#__PURE__*/_react.default.createElement(_KeystoneTable.default, {
    data: page16data
  }), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      marginTop: "20px"
    }
  }, /*#__PURE__*/_react.default.createElement(_FoodTable.default, {
    Food: Food
  })), /*#__PURE__*/_react.default.createElement(_Footer.default, {
    name: data.patientName,
    barcode: data.barcode,
    pageNo: "16"
  })) : null);
}
var _default = Page15and16;
exports.default = _default;