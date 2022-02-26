import { useState, useEffect } from "react"
import getAPI from "../GetAPI";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export const ForecastWave = () => {

    const { id } = useParams();
    const [waveForecastData, setWaveForecastData] = useState("");
    const [geographicLocation, setGeographicLocation] = useState([]);
    const [errorReturn,setError] = useState(false);

    useEffect(() => {

        const getGeographic = async () => {
            try {
                const data = await getAPI.getWeatherRealData(id)
                setGeographicLocation([data.location.lat, data.location.lon])
            } catch (error) {
                console.log(error.response)
            }
        }

        if ((id !== "")) {
            getGeographic()
        }

    }, [id])

    useEffect(() => {

        const getForecast = async () => {
            try {
                const data = await getAPI.getForecastWaveData(geographicLocation)
                setWaveForecastData(data)
            } catch (error) {
                throw "Erro no Get WAVE"
            }
        }

        if ((geographicLocation.length !== 0)) {
            getForecast()
/*             if (geographicLocation[0] === geographicLocation[0]) {
                setError(true)
            } else {
                setError(false)
            } */
        }


    }, [geographicLocation])



    return (
        <>
            {!errorReturn ?
                <>
                    <section style={{overflowY:"scroll", height:"160vh"}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>hour</th>
                                    <th>noaa</th>
                                    <th>sg</th>
                                </tr>
                            </thead>

                            <tbody>
                                {waveForecastData.map((forecasthour) => {
                                    return (
                                        <tr key={uuidv4()}>
                                            <td>{forecasthour.time}</td>
                                            <td>{forecasthour.noaa}</td>
                                            <td>{forecasthour.sg}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </section>                    

                </> : null

            }

        </>
    )

}