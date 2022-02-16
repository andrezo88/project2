import React from 'react';
import { useState, useEffect } from "react";
import getAPI from "../GetAPI";
import { useParams } from 'react-router-dom';

export const WeatherHistory = () => {

    const { id } = useParams();
    const [weatherHistoryData, setWeatherHistoryData] = useState("")

    useEffect(() => {
        const getForecast = async () => {
            const data = await getAPI.getHourWeatherData(id)
            setWeatherHistoryData(data)
        }
        if ((id !== "")) {
            getForecast()
        }

    }, [id])

    return (
        <>
            <div>
                {weatherHistoryData && weatherHistoryData.map((forecastDay) => {
/*                     console.log(forecastDay)*/
                    return (
                        <div>
                            {forecastDay.date}
                            {/* {forecastDay.hour.map(() =>)} */}
                        </div>
                    )
                })}
            </div>
        </>
    )
}
