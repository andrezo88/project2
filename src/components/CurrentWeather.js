import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import getAPI from "./GetWeatherAPI";

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
            <h1>Esse é o retorno do GET CITY</h1>
            <div>
                {cityData && cityData.location.name}
            </div>
            <div>
                {cityData && cityData.location.country}
            </div>
            <div>
                {cityData && cityData.current.temp_c} C
            </div>
            <div>
                {cityData && <img src={cityData.current.condition.icon} alt="icon weather" />}
                {cityData && cityData.current.condition.text}
            </div>
            <div>
                {cityData && cityData.current.humidity} %
            </div>
            <div>
                {cityData && cityData.current.feelslike_c} C
            </div>
            <div>
                {cityData && cityData.astro.sunrise}
            </div>
            <div>
                {cityData && cityData.astro.sunset}
            </div>
        </>
    )

}