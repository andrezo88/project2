import { useState, useEffect } from "react"
import getAPI from "../GetAPI";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export const ForecastWave = () => {

    const { id } = useParams();
    const [waveForecastData, setWaveForecastData] = useState("");

    useEffect(() => {

        setWaveForecastData("")

        const getForecast = async () => {
            try {
                const data = await getAPI.getForecastWaveData()
                console.log(data)
                setWaveForecastData(data)
                console.log(data)
            } catch (error) {
                throw "Erro no Get WAVE"
            }
        }
        if ((id !== "")) {
            getForecast()
        }

    }, [id])

    return (
        <>
            {waveForecastData ?
                <>
                    <section style={{overflowY:"scroll", height:"150vh"}}>
                        <table>
                            <tr>
                                <th>hour</th>
                                <th>mt</th>
                                <th>noaa</th>
                                <th>sg</th>
                                <th>IC</th>
                            </tr>


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
                        </table>
                    </section>


                    

                </> : null

            }

        </>
    )

}