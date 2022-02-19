import { useState, useEffect } from "react"
import getAPI from "../GetAPI";
import { useParams } from "react-router-dom";

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
            <div>
                Oi
            </div>
            <>
                {id}
            </>
        </>
    )

}