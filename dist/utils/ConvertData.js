"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertDataForChart = void 0;
exports.generateShades = generateShades;
function generateShades(hexCode, numShades) {
  // Convert hex code to RGB values
  let r = parseInt(hexCode.slice(1, 3), 16);
  let g = parseInt(hexCode.slice(3, 5), 16);
  let b = parseInt(hexCode.slice(5, 7), 16);

  // Generate lighter shades of the color
  let lighterShades = [];
  for (let i = 0; i < numShades; i++) {
    // Calculate new RGB values for the lighter shade
    let newR = Math.min(Math.floor(r + (255 - r) * (i / numShades)), 255);
    let newG = Math.min(Math.floor(g + (255 - g) * (i / numShades)), 255);
    let newB = Math.min(Math.floor(b + (255 - b) * (i / numShades)), 255);

    // Convert RGB values back to hex code
    let newHexCode = "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1);

    // Add the new shade to the array
    lighterShades.push(newHexCode);
  }
  return lighterShades;
}
const convertDataForChart = json => {
  const keys = Object.keys(json);
  const allVal = Object.values(json);
  let total = 0;
  allVal.forEach(val => total += +val);
  let result = {
    labels: [],
    data: []
  };
  // result.backgroundColor = ['#044389', '#0B2447', '#576CBC', '#7CAFC4', '#5995ED', '#19A7CE', '#146C94', '#C9EEFF', "#62CDFF", "#2F58CD", "#3C84AB", "#93BFCF", "#13005A", "#6C00FF"];
  for (let key of keys) {
    result.labels.push(key);
    result.data.push((json[key] * 100 / total).toFixed(2));
  }
  return result;
};
exports.convertDataForChart = convertDataForChart;