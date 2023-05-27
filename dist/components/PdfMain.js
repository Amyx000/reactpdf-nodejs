"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PdfMain;
var _react = _interopRequireDefault(require("react"));
var _renderer = require("@react-pdf/renderer");
var _Page = _interopRequireDefault(require("./pages/page1/Page1"));
var _Page2 = _interopRequireDefault(require("./pages/page3/Page3"));
var _Page3 = _interopRequireDefault(require("./pages/page2/Page2"));
var _Page4 = _interopRequireDefault(require("./pages/page4/Page4"));
var _Page5 = _interopRequireDefault(require("./pages/page5/Page5"));
var _page = _interopRequireDefault(require("./pages/page6/page6"));
var _page2 = _interopRequireDefault(require("./pages/page7/page7"));
var _Page6 = _interopRequireDefault(require("./pages/page8/Page8"));
var _Page7 = _interopRequireDefault(require("./pages/page9/Page9"));
var _Page8 = _interopRequireDefault(require("./pages/page10/Page10"));
var _Page9 = _interopRequireDefault(require("./pages/page11/Page11"));
var _Page10 = _interopRequireDefault(require("./pages/page12/Page12"));
var _Page11 = _interopRequireDefault(require("./pages/page13/Page13"));
var _Page12 = _interopRequireDefault(require("./pages/page14/Page14"));
var _Page15and = _interopRequireDefault(require("./pages/page15&16/Page15and16"));
var _page3 = _interopRequireDefault(require("./pages/page17/page17"));
var _Page13 = _interopRequireDefault(require("./pages/page18/Page18"));
var _Page14 = _interopRequireDefault(require("./pages/page19/Page19"));
var _Page20to = _interopRequireDefault(require("./pages/page20to25/Page20to25"));
var _Page15 = _interopRequireDefault(require("./pages/page26/Page26"));
var _Page16 = _interopRequireDefault(require("./pages/page27/Page27"));
var _page4 = _interopRequireDefault(require("./pages/page28/page28"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_renderer.Font.register({
  family: "MetropolisSemibold",
  src: `./src/assets/fonts/Metropolis-SemiBold.otf`
});
_renderer.Font.register({
  family: "NunitoB",
  src: `./src/assets/fonts/Nunito-Black.ttf`
});
_renderer.Font.register({
  family: "NunitoBitalic",
  src: `./src/assets/fonts/Nunito-BlackItalic.ttf`
});
_renderer.Font.register({
  family: "NunitoBold",
  src: `./src/assets/fonts/Nunito-Bold.ttf`
});
_renderer.Font.register({
  family: "NunitoBolditalic",
  src: `./src/assets/fonts/Nunito-BoldItalic.ttf`
});
_renderer.Font.register({
  family: "NunitoExBold",
  src: `./src/assets/fonts/Nunito-ExtraBold.ttf`
});
_renderer.Font.register({
  family: "NunitoItalic",
  src: `./src/assets/fonts/Nunito-Italic.ttf`
});
_renderer.Font.register({
  family: "NunitoL",
  src: `./src/assets/fonts/Nunito-Light.ttf`
});
_renderer.Font.register({
  family: "NunitoLitalic",
  src: `./src/assets/fonts/Nunito-LightItalic.ttf`
});
_renderer.Font.register({
  family: "NunitoM",
  src: `./src/assets/fonts/Nunito-Medium.ttf`
});
_renderer.Font.register({
  family: "NunitoMitalic",
  src: `./src/assets/fonts/Nunito-MediumItalic.ttf`
});
_renderer.Font.register({
  family: "Nunito",
  src: `./src/assets/fonts/Nunito-Regular.ttf`
});
_renderer.Font.register({
  family: "NunitoSBold",
  src: `./src/assets/fonts/Nunito-SemiBold.ttf`
});
function PdfMain({
  data,
  charts
}) {
  return /*#__PURE__*/_react.default.createElement(_renderer.Document, null, /*#__PURE__*/_react.default.createElement(_Page.default, {
    name: data.patientName
  }), /*#__PURE__*/_react.default.createElement(_Page3.default, {
    data: {
      patientName: data.patientName,
      barcode: data.barcode
    }
  }), /*#__PURE__*/_react.default.createElement(_Page2.default, {
    data: {
      patientName: data.patientName,
      barcode: data.barcode
    }
  }), /*#__PURE__*/_react.default.createElement(_Page4.default, {
    data: {
      patientName: data.patientName,
      barcode: data.barcode
    }
  }), /*#__PURE__*/_react.default.createElement(_Page5.default, {
    data: {
      patientName: data.patientName,
      barcode: data.barcode
    }
  }), /*#__PURE__*/_react.default.createElement(_page.default, {
    data: {
      patientName: data.patientName,
      barcode: data.barcode
    }
  }), /*#__PURE__*/_react.default.createElement(_page2.default, {
    data: {
      patientName: data.patientName,
      barcode: data.barcode
    }
  }), /*#__PURE__*/_react.default.createElement(_Page6.default, {
    data: data
  }), /*#__PURE__*/_react.default.createElement(_Page7.default, {
    charts: charts,
    data: {
      patientName: data.patientName,
      barcode: data.barcode
    }
  }), /*#__PURE__*/_react.default.createElement(_Page8.default, {
    charts: charts,
    data: data
  }), /*#__PURE__*/_react.default.createElement(_Page9.default, {
    data: data
  }), /*#__PURE__*/_react.default.createElement(_Page10.default, {
    data: data
  }), /*#__PURE__*/_react.default.createElement(_Page11.default, {
    data: data
  }), /*#__PURE__*/_react.default.createElement(_Page12.default, {
    data: data
  }), /*#__PURE__*/_react.default.createElement(_Page15and.default, {
    data: data
  }), /*#__PURE__*/_react.default.createElement(_page3.default, {
    data: {
      patientName: data.patientName,
      barcode: data.barcode
    },
    pageNo: data.keystoneSpecies.length <= 27 ? "16" : "17"
  }), /*#__PURE__*/_react.default.createElement(_Page13.default, {
    data: data,
    pageNo: data.keystoneSpecies.length <= 27 ? "17" : "18"
  }), /*#__PURE__*/_react.default.createElement(_Page14.default, {
    data: {
      patientName: data.patientName,
      barcode: data.barcode
    },
    pageNo: data.keystoneSpecies.length <= 27 ? "18" : "19"
  }), /*#__PURE__*/_react.default.createElement(_Page20to.default, {
    data: data
  }), /*#__PURE__*/_react.default.createElement(_Page15.default, {
    data: {
      patientName: data.patientName,
      generalRemarks: data.generalRemarks,
      barcode: data.barcode
    },
    pageNo: data.keystoneSpecies.length <= 27 ? "25" : "26"
  }), /*#__PURE__*/_react.default.createElement(_Page16.default, {
    data: {
      patientName: data.patientName,
      barcode: data.barcode
    }
  }), /*#__PURE__*/_react.default.createElement(_page4.default, {
    data: {
      patientName: data.patientName,
      barcode: data.barcode
    },
    pageNo: data.keystoneSpecies.length <= 27 ? "27" : "28"
  }));
}