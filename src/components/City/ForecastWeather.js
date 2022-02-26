import { useState, useEffect } from "react"
import getAPI from "../GetAPI";
import sunriseIcon from "../images/sunriseicon.svg";
import sunsetIcon from "../images/sunseticon.svg";
import upIcon from "../images/up-icon.svg";
import downIcon from "../images/down-icon.svg";
import { useParams } from "react-router-dom";
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
                                <div className="first-info">
                                    <img src={forecastDay.icon} alt="icon-1st-date-forecast" />
                                    <span className="dia">{forecastDay.date.slice(8,10)}/</span>
                                    <span className="dia">{forecastDay.date.slice(5,7)} </span>
                                </div>
                                <div>
                                    <img src={upIcon} alt="maxtempIcon" style={{ width: "30px" }}/> Max Temp: {forecastDay.maxtemp_c} ºC
                                </div>
                                <div>
                                    <img src={downIcon} alt="mintempIcon" style={{ width: "30px" }}/> Min Temp: {forecastDay.mintemp_c} ºC
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