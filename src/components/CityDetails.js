import React, { useState } from 'react'
import { CityData } from './CurrentWeather'
import { NavBar } from './NavBar'


export const CityDetails = () => {

    const [city, setCity] = useState("")

    const handleChange = (e) => {
        (e && setCity(e.target.value))
    }

    return (
        <>
            <NavBar onChange={handleChange} />
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col">
                        <CityData id={city} />
                    </div>
                    <div className="col">
                        <CityData id={city} />
                    </div>
                    <div className="col">
                        <CityData id={city} />
                    </div>
                </div>
            </div>
        </>
    )
}
