import { useState, useEffect } from "react"
import getAPI from "../GetAPI";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export const ForecastWave = ( geographicData ) => {

    const { id } = useParams();
    const [waveForecastData, setWaveForecastData] = useState("");
    const [geographicLocation, setGeographicLocation] = useState([]);

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
                console.log(data)
                setWaveForecastData(data)
                console.log(waveForecastData)
            } catch (error) {
                throw "Erro no Get WAVE"
            }
        }

        if ((geographicLocation.length !== 0)) {
            getForecast()
        }

    }, [geographicLocation])



    return (
        <>
            {waveForecastData ?
                <>
                    <section style={{overflowY:"scroll", height:"150vh"}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>hour</th>
                                    <th>mt</th>
                                    <th>noaa</th>
                                    <th>sg</th>
                                    <th>IC</th>
                                </tr>
                            </thead>

                            <tbody>
                                {waveForecastData.map((forecasthour) => {
                                    return (
                                        <tr key={uuidv4()}>
                                            <td>{forecasthour.time}</td>
                                            <td>{forecasthour.meteo}</td>
                                            <td>{forecasthour.noaa}</td>
                                            <td>{forecasthour.sg}</td>
                                            <td>{forecasthour.icon}</td>
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