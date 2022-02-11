import { useState, useEffect } from "react"
import getAPI from "./GetWeatherAPI";
import cityIcon from "../images/cityIcon.svg"
import tempIcon from "../images/tempIcon.png"
import humidityIcon from "../images/humidityIcon.png"
import sunriseIcon from "../images/sunriseIcon.jpg"
import sunsetIcon from "../images/sunsetIcon.jpg"

export const CityData = ({ id, submitStatus }) => {

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

            <div className="container margin-top d-grid gap-3 text-center">
                <div className="border border-dark rounded ">
                    <div>
                        < img src={cityIcon} alt="cityIcon" style={{ width: "30px" }} />
                        <span>City</span>
                    </div>
                    <span >
                        {cityData && cityData.location.name}
                    </span>
                </div>

                <div className="border border-dark rounded">
                    {cityData && cityData.location.country}
                </div>

                <div className="border border-dark rounded">
                    <div>
                        <img src={tempIcon} alt="tempIcon" style={{ width: "20px" }} />
                        <span>Temperature</span>
                    </div>
                    <span className="info">

                        {cityData && cityData.current.temp_c} ºC
                    </span>
                </div>

                <div className="border border-dark rounded">
                    {cityData && <img src={cityData.current.condition.icon} alt="icon weather" />}
                    {cityData && cityData.current.condition.text}
                </div>
                <div className="border border-dark rounded">
                    <div>
                        <img src={humidityIcon} alt="humidityIcon" style={{ width: "30px" }} />
                        <span>humidity</span>
                    </div>
                    <span className="info">

                        {cityData && cityData.current.humidity} %
                    </span>
                </div>

                <div className="border border-dark rounded">
                    <div>
                        <img src={tempIcon} alt="tempIcon" style={{ width: "20px" }} />
                        <span>Feels Like</span>
                    </div>
                    <span className="info">

                        {cityData && cityData.current.feelslike_c} ºC
                    </span>
                </div>

                <div className="border border-dark rounded">
                    <div>
                        <img src={sunriseIcon} alt="sunriseIcon" style={{ width: "30px" }} />
                        <span>Sunrise</span>
                    </div>
                    <span className="info">
                        {cityData && cityData.astro.sunrise}
                    </span>
                </div>

                <div className="border border-dark rounded">
                    <div>
                        <img src={sunsetIcon} alt="sunsetIcon" style={{ width: "30px" }} />
                        <span>Sunset</span>
                    </div>
                    <span className="info">
                        {cityData && cityData.astro.sunset}
                    </span>
                </div>

            </div>
        </>
    )

}