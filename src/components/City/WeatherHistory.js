import React from 'react';
import { useState, useEffect } from "react";
import getAPI from "../GetAPI";
import { useParams } from 'react-router-dom';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const WeatherHistory = () => {

    const { id } = useParams();
    const [weatherHistoryData, setWeatherHistoryData] = useState([])

    useEffect(() => {
        const getForecast = async () => {
            const data = await getAPI.getHourWeatherData(id)
            setWeatherHistoryData(data)
        }
        if ((id !== "")) {
            getForecast()
        }

    }, [id])

    const options = {

        scales: {
            y: {
                ticks: {
                    callback: function (value, index, values) {
                        return value + "º";
                    }
                }
            }
        },

        Tooltips: {
            displayColors: false,

            backgroundColor: "rgb(150,50,0)",
            titleFontColor: "rgb(255,255,255)",
            bodyFontColor: "rgb(255,255,255)",

        },

        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Hourly Forecast',
                font: {
                    size: 200
                }
            },
        },
    };

    const labels = weatherHistoryData.length && weatherHistoryData[0].hour.map((h) => {
        return h.time;
    });

    const data = {
        labels,
        datasets: [
            {
                label: 'Temp C',
                data: weatherHistoryData.length && weatherHistoryData[0].hour.map((h) => {
                    return h.temp_c
                }),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return (
        <>

            <Line options={options} data={data} />


        </>
    )
}