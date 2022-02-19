import { useState, useEffect } from "react"
import getAPI from "../GetAPI";
import cityIcon from "../images/cityIcon.svg"
import tempIcon from "../images/tempIcon.png"
import humidityIcon from "../images/humidityIcon.png"
import sunriseIcon from "../images/sunriseIcon.jpg"
import sunsetIcon from "../images/sunsetIcon.jpg"
import earthIcon from "../images/earthIcon.png"
import { useParams } from "react-router-dom";

export const CurrentWeather = ({ forecastActive }) => {

    const { id } = useParams();
    const [cityData, setCityData] = useState({});

    useEffect(() => {
        const getCity = async () => {
            const data = await getAPI.getWeatherData(id)
            setCityData(data)
        }
        if ((id !== "")) {
            getCity()
        }
    }, [id])

    return (
        <>
            {cityData ? <>
                <div className=" border border-dark rounded ">
                    <div className="container d-grid gap-2 text-center margin-top margin-bottom">
                        <div className="row justify-content-md-center ">
                            <div className="border border-dark rounded marginRight heightCurrent col padding-current ">
                                <div>
                                    < img src={cityIcon} alt="cityIcon" style={{ width: "40px" }} className=" marginRight" />
                                    <span>City</span>
                                </div>
                                <span className="information ">
                                    {cityData.location && cityData.location.name}
                                </span>
                            </div>

                            <div className="border border-dark rounded heightCurrent col padding-current">
                                <div>< img src={earthIcon} alt="cityIcon" style={{ width: "40px" }} className=" marginRight" />
                                    <span>Country</span>
                                </div>
                                {cityData.location && cityData.location.country}
                            </div>
                        </div>

                        <div className="row justify-content-md-center">

                            <div className="border border-dark rounded heightCurrent width col padding-current">
                                <div >
                                    <img src={tempIcon} alt="tempIcon" style={{ width: "20px" }} className="marginRight" />
                                    <span>Temperature</span>
                                </div>
                                <span className="info">
                                    {cityData.current && cityData.current.temp_c} ºC
                                </span>
                            </div>

                        </div>

                        <div className="row justify-content-md-center ">
                            <div className="border border-dark rounded heightCurrent col padding-current">
                                {cityData.current && <img src={cityData.current.condition.icon} alt="icon weather" className="marginRight" />}
                                {cityData.current && cityData.current.condition.text}
                            </div>
                        </div>

                        <div className="row justify-content-md-center" >
                            <div className="border border-dark rounded heightCurrent marginRight col padding-current">
                                <div>
                                    <img src={humidityIcon} alt="humidityIcon" style={{ width: "40px" }} className="marginRight" />
                                    <span>humidity</span>
                                </div>
                                <span className="info">
                                    {cityData.current && cityData.current.humidity} %
                                </span>
                            </div>

                            <div className="border border-dark rounded heightCurrent col padding-current">
                                <div >
                                    <img src={tempIcon} alt="tempIcon" style={{ width: "20px" }} className="marginRight" />
                                    <span>Feels Like</span>
                                </div>
                                <span className="info">

                                    {cityData.current && cityData.current.feelslike_c} ºC
                                </span>
                            </div>
                        </div>

                        <div className="row justify-content-md-center">
                            <div className="border border-dark rounded heightCurrent marginRight col padding-current">
                                <div>
                                    <img src={sunriseIcon} alt="sunriseIcon" style={{ width: "40px" }} className="marginRight" />
                                    <span>Sunrise</span>
                                </div>
                                <span className="info">
                                    {cityData.astro && cityData.astro.sunrise}
                                </span>
                            </div>

                            <div className="border border-dark rounded heightCurrent col padding-current">
                                <div>
                                    <img src={sunsetIcon} alt="sunsetIcon" style={{ width: "40px" }} className="marginRight" />
                                    <span>Sunset</span>
                                </div>
                                <span className="info">
                                    {cityData.astro && cityData.astro.sunset}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="margin-bottom"></div> </> : "not found"
            }
        </>
    )

}