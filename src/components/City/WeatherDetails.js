import { useState, useEffect } from "react"
import getAPI from "../GetAPI";
import { useParams } from "react-router-dom";
import { NavBar } from '../NavBar'

export const WeatherDetails = () => {
    
    const { id } = useParams();

    const [weatherDetails, setWeatherDetails] = useState("");

    useEffect(() => {
        const getDetails = async () => {
            const data = await getAPI.getForecastWaveData(id)
            setWeatherDetails(data)
        }
        if ((id !== "")) {
            getDetails()
        }

    }, [id])

    return (
        <>
            <NavBar inputHide id={id} returnButtonActive />
            
            <div>
                Oi
            </div>
            <>
                {id}
            </>
        </>
    )

}