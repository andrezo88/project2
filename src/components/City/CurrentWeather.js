import { useState, useEffect } from "react"
import getAPI from "../GetAPI";
import { useParams } from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import "./CurrentWeather.css"

export const CurrentWeather = () => {

    const { id } = useParams();
    const [cityData, setCityData] = useState({})


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

                    <div style={{ marginLeft: "255px", marginBottom: "12px", marginTop: "150px" }}>
                        <h3 style={{ fontWeight: "600" }} >Current Weather </h3>
                    </div>

                    <div className="main-current-weather">
                        <div className="temp">
                            <div>
                                <div className="weather-condition">
                                    <div className="weather-condition-2nd-layer">
                                        {cityData.current &&
                                            <>
                                                <img src={cityData.current.condition.icon} style={{ width: "60px" }} alt="icon weather" />
                                                <h5>{cityData.current.condition.text}</h5>
                                            </>
                                        }
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
                        </div>
                    </div>

                </>
                :
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <ErrorPage />
                </div>
            }
        </>

    )

}