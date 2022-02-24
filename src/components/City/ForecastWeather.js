import { useState, useEffect } from "react"
import getAPI from "../GetAPI";
import tempIcon from "../images/tempIcon.png"
import sunriseIcon from "../images/sunriseIcon.jpg"
import sunsetIcon from "../images/sunsetIcon.jpg"
import { useParams, Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import "./ForecastWeather.css"


export const ForecastWeather = () => {

    const { id } = useParams();
    const [weatherForecastData, setWeatherForecastData] = useState([]);

    useEffect(() => {

        setWeatherForecastData("")

        const getForecast = async () => {
            try {
                const data = await getAPI.getForecastWeatherRealData(id)
                setWeatherForecastData(data)
            } catch (error) {
                console.log(error.response)
            }
        }
        if ((id !== "")) {
            getForecast()
        }
    }, [id])

    return (
        <>
            {weatherForecastData ?
                <>
                    {weatherForecastData && weatherForecastData.map((forecastDay) => {
                        return (

                            <div className="main-forecast-weather-card" key={uuidv4()}>
                                <div>
                                    <img src={forecastDay.icon} alt="icon-1st-date-forecast" /> {forecastDay.date}
                                </div>
                                <div>
                                    Max Temp: {forecastDay.maxtemp_c} ºC
                                </div>
                                <div>
                                    Min Temp: {forecastDay.mintemp_c} ºC
                                </div>
                                <div>
                                    <img src={sunriseIcon} alt="tempIcon" style={{ width: "30px" }}/> Sunrise: {forecastDay.sunrise}
                                </div>
                                <div>
                                    <img src={sunsetIcon} alt="tempIcon" style={{ width: "30px" }}/> Sunset: {forecastDay.sunset}
                                </div>
                            </div>

                        )
                    })
                    }
                    
                </>
                : null
            }
        </>
    )

}