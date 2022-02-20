import { useState, useEffect } from "react"
import getAPI from "../GetAPI";
import tempIcon from "../images/tempIcon.png"
import sunriseIcon from "../images/sunriseIcon.jpg"
import sunsetIcon from "../images/sunsetIcon.jpg"
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


export const ForecastWeather = () => {

    const { id } = useParams();

    const [weatherForecastData, setWeatherForecastData] = useState("");


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
            {weatherForecastData ?
                <div>
                    {weatherForecastData && weatherForecastData.map((forecastDay) => {
                        return (
                            <div key={uuidv4()}>
                                <div className=" border border-dark rounded">
                                    <div className="container d-grid gap-1 text-center margin-top-forecast margin-bottom-forecast">
                                        <div className="row justify-content-md-center ">
                                            <div className="border border-dark rounded marginRight col ">
                                                <div className="marginRight"> Date:
                                                    <span className="date-font ">
                                                        {forecastDay.date}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row justify-content-md-center ">
                                            <div className="border border-dark rounded marginRight padding-itens col ">
                                                <span>Min Temp: </span>
                                                <div><img src={tempIcon} alt="tempIcon" style={{ width: "20px" }} className="marginRight" /> {forecastDay.mintemp_c}ºC  </div>
                                            </div>
                                            <div className="border border-dark rounded marginRight padding-itens col ">
                                                <div> <img src={forecastDay.icon} alt="icon-1st-date-forecast" /> </div>
                                            </div>
                                            <div className="border border-dark rounded marginRight padding-itens col ">
                                                <span>Max Temp: </span>
                                                <div><img src={tempIcon} alt="tempIcon" style={{ width: "20px" }} className="marginRight" /> {forecastDay.maxtemp_c}ºC </div>
                                            </div>
                                        </div>
                                        <div className="row justify-content-md-center ">
                                            <div className="border border-dark rounded marginRight padding-itens col ">
                                                <div><img src={sunriseIcon} alt="tempIcon" style={{ width: "30px" }} className="marginRight" /> Sunrise: </div>
                                                <span>{forecastDay.sunrise} </span>
                                            </div>
                                            <div className="border border-dark rounded marginRight padding-itens col ">
                                                <div><img src={sunsetIcon} alt="tempIcon" style={{ width: "30px" }} className="marginRight" /> Sunset: </div>
                                                <span>{forecastDay.sunset} </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="padding-itens"></div>
                            </div>
                        )
                    })
                    }
                </div> : "page not found"
            }

        </>
    )

}