"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renderer = require("@react-pdf/renderer");
var _react = _interopRequireDefault(require("react"));
var _ConvertData = require("../../../utils/ConvertData");
var _FoodTable = _interopRequireDefault(require("../../common/FoodTable"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ProbioticTable({
  data
}) {
  const shades = (0, _ConvertData.generateShades)('#177DC0', Object.keys(data.probiotic).length);
  const Food = data.probioticFoodRecomendation ? data.probioticFoodRecomendation.length ? data.probioticFoodRecomendation.join(", ") : "" : "";
  return /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "2px"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      display: "flex",
      flexDirection: "row",
      alignItems: 'center',
      gap: "5px",
      border: "1px solid black",
      fontFamily: 'NunitoBold',
      fontSize: "9px",
      height: "21.45px",
      padding: "0 5px"
    }
  }, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      width: "150px"
    }
  }, "PROBIOTICS DETECTED"), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      width: "120px"
    }
  }, "RELATIVE ABUNDANCE"), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
    style: {
      width: "257px"
    }
  }, "MAJOR CHARACTERISTICS")), /*#__PURE__*/_react.default.createElement(_renderer.View, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5px"
    }
  }, data.probiotic.map((obj, i) => {
    return /*#__PURE__*/_react.default.createElement(_renderer.View, {
      key: i,
      style: {
        padding: "2px 5px",
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        gap: "5px",
        fontFamily: 'NunitoBold',
        fontSize: "9px",
        backgroundColor: shades[i]
      }
    }, /*#__PURE__*/_react.default.createElement(_renderer.Text, {
      style: {
        width: "150px"
      }
    }, obj.bacteria.replace(/_/g, " ")), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
      style: {
        width: "120px",
        textAlign: "center"
      }
    }, obj.abundance), /*#__PURE__*/_react.default.createElement(_renderer.Text, {
      style: {
        width: "257px",
        fontFamily: "NunitoSBold"
      }
    }, obj.interpretation || "N.A"));
  })), /*#__PURE__*/_react.default.createElement(_FoodTable.default, {
    Food: Food
  }));
}
var _default = ProbioticTable;
exports.default = _default;