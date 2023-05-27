"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _createChart = require("../utils/createChart");
const GenerateChart = async jsonData => {
  try {
    const doughnutChart = await (0, _createChart.createChart)('doughnut', jsonData.composition);
    const phylumChart = await (0, _createChart.createChart)('pie', jsonData.phylumAbundance);
    const genusChart = await (0, _createChart.createChart)('pie', jsonData.genusAbundance);
    const bacteriaChart = await (0, _createChart.createChart)('pie', jsonData.topSpeciesBacteria);
    const fungiChart = await (0, _createChart.createChart)('pie', jsonData.topSpeciesFungi);
    const archaeaChart = await (0, _createChart.createChart)('pie', jsonData.topSpeciesArchaea);
    return {
      doughnutChart,
      phylumChart,
      genusChart,
      bacteriaChart,
      fungiChart,
      archaeaChart
    };
  } catch (error) {
    throw new Error('Failed to generate the charts.');
  }
};
var _default = GenerateChart;
exports.default = _default;