import { useState, useEffect } from "react"
import getAPI from "../GetAPI";
import { useParams, Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
/* import { WaveDetails } from "./WaveDetails"; */

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

            <Link to={`/wave-details/${id}`}>
                <span>Wave Details</span>
            </Link>

            {waveForecastData && waveForecastData.map((forecasthour) => {
                return (
                    <div key={uuidv4()}>
                        <div className="justify-content-md-center">
                            Hr: {forecasthour.time} _
                            Mt: {forecasthour.meteo} _
                            Noaa: {forecasthour.noaa} _
                            Sg: {forecasthour.sg} _
                            Ic: {forecasthour.icon} _
                        </div>

                    </div>
                )
            }
            )}

        </>
    )

}