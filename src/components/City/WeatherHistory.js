import React from 'react'
import { useState, useEffect } from "react"
import getAPI from "../GetAPI"

export const WeatherHistory = ({ id }) => {

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

            {weatherHistoryData && weatherHistoryData.map((forecastHour) => {
                return (
                    <>
                        Olá
                        {/* {forecastHour.time} */}
                    </>
                )
            })}
        </>
    )
}
