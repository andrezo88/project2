import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

import { NavBar } from '../NavBar'

import getAPI from "../GetAPI";

export const WaveDetails = () => {

    const { id } = useParams();

    const [waveDetails, setWaveDetails] = useState("");

    useEffect(() => {
        const getDetails = async () => {
            const data = await getAPI.getForecastWaveData(id)
            setWaveDetails(data)
        }
        if ((id !== "")) {
            getDetails()
        }

    }, [id])

    return (
        <>
            <NavBar inputHide id={id} returnButtonActive />
            <>
            {waveDetails ?
            <>
            <div>{waveDetails[0].time}</div>
            <div>{waveDetails[0].icon}</div>
            <div>{waveDetails[0].meteo}</div>
            <div>{waveDetails[0].noaa}</div>
            <div>{waveDetails[0].sg}</div>
            </>
            : null }
            </>
        </>
    )

}