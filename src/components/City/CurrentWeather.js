import { useState, useEffect } from "react"
import getAPI from "../GetAPI";
import cityIcon from "../images/cityIcon.svg"
import tempIcon from "../images/tempIcon.png"
import humidityIcon from "../images/humidityIcon.png"
import sunriseIcon from "../images/sunriseIcon.jpg"
import sunsetIcon from "../images/sunsetIcon.jpg"

export const CurrentWeather = ({ id, submitStatus }) => {

    const [cityData, setCityData] = useState("")

    useEffect(() => {
        const getCity = async () => {
            const data = await getAPI.getWeatherData(id)
            setCityData(data)
        }
        if ((id !== "")) {
            getCity()
        }
    }, [submitStatus, id])

    return (
        <>
            <div className=" border border-dark rounded ">
                <div className="container d-grid gap-2 text-center margin-top margin-bottom">
                    <div className="row justify-content-md-center ">
                        <div className="border border-dark rounded marginRight height col ">
                            <div>
                                < img src={cityIcon} alt="cityIcon" style={{ width: "40px" }} className="marginRight" />
                                <span>City</span>
                            </div>
                            <span className="information">
                                {cityData && cityData.location.name}
                            </span>
                        </div>

                        <div className="border border-dark rounded height col ">
                            <div>Country</div>
                            {cityData && cityData.location.country}
                        </div>
                    </div>

                    <div className="row justify-content-md-center">

                        <div className="border border-dark rounded height width col">
                            <div >
                                <img src={tempIcon} alt="tempIcon" style={{ width: "20px" }} className="marginRight" />
                                <span>Temperature</span>
                            </div>
                            <span className="info">
                                {cityData && cityData.current.temp_c} ºC
                            </span>
                        </div>

                    </div>

                    <div className="row justify-content-md-center ">
                        <div className="border border-dark rounded height col">
                            {cityData && <img src={cityData.current.condition.icon} alt="icon weather" className="marginRight" />}
                            {cityData && cityData.current.condition.text}
                        </div>
                    </div>

                    <div className="row justify-content-md-center" >
                        <div className="border border-dark rounded height marginRight  col">
                            <div>
                                <img src={humidityIcon} alt="humidityIcon" style={{ width: "40px" }} className="marginRight" />
                                <span>humidity</span>
                            </div>
                            <span className="info">
                                {cityData && cityData.current.humidity} %
                            </span>
                        </div>

                        <div className="border border-dark rounded height col">
                            <div >
                                <img src={tempIcon} alt="tempIcon" style={{ width: "20px" }} className="marginRight" />
                                <span>Feels Like</span>
                            </div>
                            <span className="info">

                                {cityData && cityData.current.feelslike_c} ºC
                            </span>
                        </div>
                    </div>

                    <div className="row justify-content-md-center">
                        <div className="border border-dark rounded height marginRight col">
                            <div>
                                <img src={sunriseIcon} alt="sunriseIcon" style={{ width: "40px" }} className="marginRight" />
                                <span>Sunrise</span>
                            </div>
                            <span className="info">
                                {cityData && cityData.astro.sunrise}
                            </span>
                        </div>

                        <div className="border border-dark rounded height col">
                            <div>
                                <img src={sunsetIcon} alt="sunsetIcon" style={{ width: "40px" }} className="marginRight" />
                                <span>Sunset</span>
                            </div>
                            <span className="info">
                                {cityData && cityData.astro.sunset}
                            </span>
                        </div>
                    </div>

                </div>
            </div>
            <div className="margin-bottom"></div>
        </>
    )

}