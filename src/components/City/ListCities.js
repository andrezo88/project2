import { CardCities } from "./CardCities";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getAPI from "../GetAPI";
import "./ListCities.css"
import { v4 as uuidv4 } from 'uuid';

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
                    <thead>
                        <tr>
                            <th>location</th>
                            <th>country</th>
                            <th>current condition</th>
                            <th>current temperature</th>
                            <th>humidity</th>
                            <th>sunrise</th>
                            <th>sunset</th>
                        </tr>
                    </thead>

                    <tbody>
                        {cityData.map((city) => {
                            return (
                                <CardCities key={uuidv4()} cityData={city} />
                            )
                        })
                        }
                    </tbody>

                </table>
            </div>
        </>
    )
}