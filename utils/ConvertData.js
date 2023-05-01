

export function generateShades(hexCode, numShades) {
    const hexToRgb = (hex) => [
        parseInt(hex.slice(1, 3), 16),
        parseInt(hex.slice(3, 5), 16),
        parseInt(hex.slice(5, 7), 16),
    ];

    const rgbToHex = (r, g, b) =>
        "#" +
        [r, g, b]
            .map((c) => Math.round(c).toString(16).padStart(2, "0"))
            .join("");

    const [r, g, b] = hexToRgb(hexCode);
    const stepSize = 1 / (numShades - 1);

    const shades = [];
    for (let i = 0; i < numShades; i++) {
        const shade = rgbToHex(
            r * (1 - i * stepSize),
            g * (1 - i * stepSize),
            b * (1 - i * stepSize)
        );
        shades.push(shade);
    }

    return shades;
}

export const convertDataForChart = (json) => {
    const keys = Object.keys(json)
    const allVal = Object.values(json)
    let total = 0
    allVal.forEach((val) => total += (+val))
    let result = { labels: [], data: [], backgroundColor: [] }
    result.backgroundColor = ['#044389', '#0B2447', '#576CBC', '#7CAFC4', '#5995ED', '#19A7CE', '#146C94', '#C9EEFF', "#62CDFF", "#2F58CD", "#3C84AB", "#93BFCF", "#13005A", "#6C00FF"];
    for (let key of keys) {
        result.labels.push(key)
        result.data.push(((json[key] * 100) / total).toFixed(2))
    }
    return result
}
