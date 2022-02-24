import { useState, useEffect } from "react"
import getAPI from "../GetAPI";
import cityIcon from "../images/cityIcon.svg"
import tempIcon from "../images/tempIcon.png"
import humidityIcon from "../images/humidityIcon.png"
import sunriseIcon from "../images/sunriseIcon.jpg"
import sunsetIcon from "../images/sunsetIcon.jpg"
import earthIcon from "../images/earthIcon.png"
import { useParams, Link } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import "./CurrentWeather.css"

export const CurrentWeather = ({ setError }) => {

    const { id } = useParams();
    const [cityData, setCityData] = useState({});

    useEffect(() => {

        setCityData("")

        const getCity = async () => {
            try {
                const data = await getAPI.getWeatherRealData(id)
                setCityData(data)
            } catch (error) {
                console.log(error.response)
            }
        }
        if ((id !== "")) {
            getCity()
        }
    }, [id])

    return (
        <>
            {cityData.location ?

                <>

                    <div className="main-current-weather">
                        <div className="temp">
                            <div>
                                <div className="weather-condition">
                                    <div className="weather-condition-2nd-layer">
                                        {cityData.current && <img src={cityData.current.condition.icon} alt="icon weather" className="marginRight" />}
                                        <h3>{cityData.current && cityData.current.condition.text}</h3>
                                    </div>
                                    <div>
                                        <h1>{cityData.current && cityData.current.temp_c} ºC</h1>
                                    </div>
                                </div>

                                <div>
                                    <h6>Humidity: {cityData.current && cityData.current.humidity} %</h6>
                                    <h6>Sunrise: {cityData && cityData.forecast.forecastday[0].astro.sunrise}</h6>
                                    <h6>Sunset: {cityData && cityData.forecast.forecastday[0].astro.sunset}</h6>
                                </div>
                            </div>
                        </div>

                        <div className="city-info">
                            <h1>{cityData.location && cityData.location.name}</h1>
                            <h3>{cityData.location && cityData.location.country}</h3>
                            <Link to={`/weather-details/${id}`}>
                                <h6>Weather Details</h6>
                            </Link>
                        </div>
                    </div>


                    {/*<img src={earthIcon} alt="cityIcon" style={{ width: "40px" }} className=" marginRight" />
                    <img src={cityIcon} alt="cityIcon" style={{ width: "40px" }} className=" marginRight" />
                    <img src={tempIcon} alt="tempIcon" style={{ width: "20px" }} className="marginRight" />
                    <img src={humidityIcon} alt="humidityIcon" style={{ width: "40px" }} className="marginRight" />
                    <img src={sunriseIcon} alt="sunriseIcon" style={{ width: "40px" }} className="marginRight" />
                    <img src={tempIcon} alt="tempIcon" style={{ width: "20px" }} className="marginRight" />
                    <img src={sunsetIcon} alt="sunsetIcon" style={{ width: "40px" }} className="marginRight" /> */}

                </>
                :
                <div style={{ marginLeft: "-200px" }}>
                    <ErrorPage />
                    <div></div>
                </div>
            }
        </>

    )

}