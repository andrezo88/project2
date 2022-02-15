import { useState, useEffect } from "react"
import getAPI from "../GetAPI";

export const ForecastWave = ({ id }) => {

    const [waveForecastData, setWaveForecastData] = useState("")

    useEffect(() => {
        const getForecastWave = async () => {
            const data = await getAPI.getWaveData(id)
            setWaveForecastData(data)
        }

        if ((id !== "")) {
            getForecastWave()
        }

    }, [id])

    return (
        <>
            <h1>Esse é o retorno do FORECAST WAVE </h1>

        </>
    )

}