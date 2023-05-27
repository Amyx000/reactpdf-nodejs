import fs from 'fs';
import path from 'path';
import { createCanvas } from 'canvas';
import Chart from 'chart.js';
import { convertDataForChart } from './ConvertData';
import { colors } from '../data';

export const createChart = async (chartType = "pie", plotdata) => {
    const canvas = createCanvas(700, 700);
    const ctx = canvas.getContext('2d');
    const data = convertDataForChart(plotdata)

    const chartData = {
        labels: data.labels,
        datasets: [
            {
                data: data.data,
                backgroundColor: colors,
                borderWidth: 0,
            },
        ],
    };

    if (chartType === "pie") {
        const chartOptions = {
            responsive: false,
            // backgroundColor: 'rgba(0, 0, 0, 0)',
            plugins: {
                legend: {
                    display: false,
                },
            },
        };

        const myPieChart = new Chart(ctx, {
            type: 'pie',
            data: chartData,
            options: chartOptions,
        });
    }
    if (chartType === "doughnut") {
        const chartOptions = {
            responsive: false,
            // backgroundColor: 'rgba(0, 0, 0, 0)',
            plugins: {
                legend: {
                    display: false,
                },
            },
            cutout: "80%"
        };

        const DoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: chartData,
            options: chartOptions,
        });
    }

    const buffer = canvas.toBuffer('image/png');
    const result = {
        image: new Buffer.from(buffer).toString('base64'),
        ...data,
        backgroundColor: colors
    }
    return result

}
