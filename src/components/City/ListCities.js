import { CardCities } from "./CardCities";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getAPI from "../GetAPI";
import "./ListCities.css"

export const ListCities = () => {

    const { id } = useParams();

    const [cityData, setCityData] = useState([]);

    useEffect(() => {
        const getCity = async () => {
            const data = await getAPI.getWeatherRealData(id)
            setCityData([...cityData, data])
        }
        if ((id !== "")) {
            getCity()
        }
    }, [id])

    return (
        <>
            <div className="compare-cities">
                <div>
                    <h2>Compare Cities</h2>
                </div>
                <table>
                    <tr>
                        <th>location</th>
                        <th>country</th>
                        <th>current condition</th>
                        <th>current temperature</th>
                        <th>humidity</th>
                        <th>sunrise</th>
                        <th>sunset</th>
                    </tr>


                    {cityData.map((city) => {
                        return (
                            <CardCities cityData={city}/>
                        )
                    })
                    }

                </table>
            </div>

        </>
    )
}