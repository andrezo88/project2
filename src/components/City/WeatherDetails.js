import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

import { NavBar } from '../NavBar'

import getAPI from "../GetAPI";

export const WeatherDetails = () => {
    
    const { id } = useParams();

    const [weatherDetails, setWeatherDetails] = useState("");

    useEffect(() => {
        const getDetails = async () => {
            const data = await getAPI.getForecastWeatherData(id)
            setWeatherDetails(data)
        }
        if ((id !== "")) {
            getDetails()
        }

    }, [id])

    return (
        <>
            <NavBar inputHide id={id} returnButtonActive />
            <>
            {weatherDetails ?
            <>
            <div>{weatherDetails[0].date}</div>
            <div>{weatherDetails[0].maxtemp_c}</div>
            <div>{weatherDetails[0].mintemp_c}</div>
            <div>{weatherDetails[0].icon}</div>
            <div>{weatherDetails[0].sunrise}</div>
            <div>{weatherDetails[0].sunset}</div>
            </>
            : null }
            </>
        </>
    )

}