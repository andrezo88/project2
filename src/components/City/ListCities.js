import { CardCities } from "./CardCities";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getAPI from "../GetAPI";

export const ListCities = () => {

    const { id } = useParams();

    const [cityData, setCityData] = useState([]);

    useEffect(() => {
        const getCity = async () => {
            const data = await getAPI.getWeatherData(id)
            setCityData([...cityData, data])
        }
        if ((id !== "")) {
            getCity()
        }
    }, [id])

    return (
        <>
            <div className="container">
                <div className="row justify-content-md-center">
                    {cityData.map((city) => {
                        return (
                            <div className="col-4">
                                <CardCities cityData={city} />

                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}