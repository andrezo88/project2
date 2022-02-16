import { useState, useEffect } from "react"
import getAPI from "../GetAPI";
import { useParams } from "react-router-dom";


export const ForecastWave = () => {

    const { id } = useParams();

    const [waveForecastData, setWaveForecastData] = useState("");

    useEffect(() => {
        const getForecast = async () => {
            const data = await getAPI.getForecastWaveData(id)
            setWaveForecastData(data)
        }
        if ((id !== "")) {
            getForecast()
        }

    }, [id])


    return (
        <>
            {waveForecastData && waveForecastData.map((forecasthour) => {
                return (
                    <>
                        <div className="justify-content-md-center">
                            Hr: {forecasthour.time} _ 
                            Mt: {forecasthour.meteo} _ 
                            Noaa: {forecasthour.noaa} _ 
                            Sg: {forecasthour.sg} _ 
                            Ic: {forecasthour.icon} _ 
                        </div>
                        
                    </>
                )}
            )}
        </>
    )

}