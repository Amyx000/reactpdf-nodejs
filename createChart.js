import fs from 'fs';
import path from 'path';
import { createCanvas, loadImage } from 'canvas';
import Chart from 'chart.js';
import { convertDataForChart } from './utils/ConvertData';
import { genusData } from './data';

export const createChart1 = async () => {
    const canvas = createCanvas(400, 400);
    const ctx = canvas.getContext('2d');
    const data = convertDataForChart(genusData)

    const chartData = {
        labels: data.labels,
        datasets: [
            {
                data: data.data,
                backgroundColor: data.backgroundColor,
                borderWidth: 0,
            },
        ],
    };

    const chartOptions = {
        responsive: false,
        // backgroundColor: 'rgba(0, 0, 0, 0)',
        plugins: {
            legend: {
                display: false,
            },
        }
    };

    const myPieChart = new Chart(ctx, {
        type: 'pie',
        data: chartData,
        options: chartOptions,
    });

    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync('piechart.png', buffer);
    const imgData = fs.readFileSync('piechart.png', { encoding: 'base64' });
    return imgData;

}
