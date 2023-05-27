"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createChart = void 0;
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _canvas = require("canvas");
var _chart = _interopRequireDefault(require("chart.js"));
var _ConvertData = require("./ConvertData");
var _data = require("../data");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const createChart = async (chartType = "pie", plotdata) => {
  const canvas = (0, _canvas.createCanvas)(700, 700);
  const ctx = canvas.getContext('2d');
  const data = (0, _ConvertData.convertDataForChart)(plotdata);
  const chartData = {
    labels: data.labels,
    datasets: [{
      data: data.data,
      backgroundColor: _data.colors,
      borderWidth: 0
    }]
  };
  if (chartType === "pie") {
    const chartOptions = {
      responsive: false,
      // backgroundColor: 'rgba(0, 0, 0, 0)',
      plugins: {
        legend: {
          display: false
        }
      }
    };
    const myPieChart = new _chart.default(ctx, {
      type: 'pie',
      data: chartData,
      options: chartOptions
    });
  }
  if (chartType === "doughnut") {
    const chartOptions = {
      responsive: false,
      // backgroundColor: 'rgba(0, 0, 0, 0)',
      plugins: {
        legend: {
          display: false
        }
      },
      cutout: "80%"
    };
    const DoughnutChart = new _chart.default(ctx, {
      type: 'doughnut',
      data: chartData,
      options: chartOptions
    });
  }
  const buffer = canvas.toBuffer('image/png');
  const result = {
    image: new Buffer.from(buffer).toString('base64'),
    ...data,
    backgroundColor: _data.colors
  };
  return result;
};
exports.createChart = createChart;