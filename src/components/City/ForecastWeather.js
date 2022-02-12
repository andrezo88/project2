import { useState, useEffect } from "react"
import getAPI from "../GetAPI";

export const ForecastWeather = ({ id }) => {

    const [weatherForecastData, setWeatherForecastData] = useState("")

    useEffect(() => {
        const getForecast = async () => {
            const data = await getAPI.getForecastWeatherData(id)
            setWeatherForecastData(data)
        }

        if ((id !== "")) {
            getForecast()
        }

    }, [id])

    return (
        <>
            <h1>Esse é o retorno do FORECAST WEATHER</h1>

            {weatherForecastData && weatherForecastData.map( (forecastDay) => {
                return (
                    <>
                    <div> {forecastDay.date} </div>
                    <div> {forecastDay.maxtemp_c} </div>
                    <div> {forecastDay.mintemp_c} </div>
                    <div> <img src={forecastDay.icon} alt="icon-1st-date-forecast"/> </div>
                    <div> {forecastDay.sunrise} </div>
                    <div> {forecastDay.sunset} </div>
                    </>
                )
                })
            }
            
        </>
    )

}