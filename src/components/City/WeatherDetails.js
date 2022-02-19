import { useState, useEffect } from "react"
import getAPI from "../GetAPI";
import { useParams } from "react-router-dom";

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
            <div>
                Oi
            </div>
            <>
                {id}
            </>
        </>
    )

}