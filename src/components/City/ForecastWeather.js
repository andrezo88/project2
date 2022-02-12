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

    console.log(weatherForecastData[0])
    console.log(weatherForecastData[1])
    console.log(weatherForecastData[2])

    return (
        <>
            <h1>Esse é o retorno do FORECAST WEATHER</h1>

            {weatherForecastData && weatherForecastData.forEach( (forecastDay) => {
                return (
                    <>
                    <div> Oi </div>
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