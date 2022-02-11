import { useState, useEffect } from "react"
import getAPI from "../GetAPI";

export const ForecastWeather = ({ id , submitAction}) => {

    const [weatherForecastData, setWeatherForecastData] = useState("")

    useEffect(() => {
        const getCity = async () => {
            const data = await getAPI.getForecastWeatherData(id)
            setWeatherForecastData(data)
        }

        if ((id !== "")) {
            getCity()
        }

    }, [id, submitAction])

    return (
        <>
            <h1>Esse é o retorno do FORECAST WEATHER</h1>

            <div> TEM ALGO AQUi {weatherForecastData && weatherForecastData[0]}</div>
            
        </>
    )

}