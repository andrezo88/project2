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
            <div className=" border border-dark rounded ">
                <div className="container d-grid gap-2 text-center col">
                    {weatherHistoryData && weatherHistoryData.map((forecastDay) => {
                        return (
                            <div className="row justify-content-md-center col">
                                {forecastDay.hour.map((hour) => {
                                    return (
                                        <>

                                            <div >
                                                <div className="border border-dark rounded col ">
                                                    {hour.time}
                                                </div>
                                                <div className="border border-dark rounded col ">
                                                    {hour.temp_c}
                                                </div>
                                            </div>

                                        </>
                                    )
                                }
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
