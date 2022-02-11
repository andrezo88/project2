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
            <NavBar onChange={handleChange} id={city}/>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col">
                        {/* AQUI VAI O WEATHER FORECAST */}
                    </div>
                    <div className="col">
                        <CityData id={city} />
                    </div>
                    <div className="col">
                        {/* AQUI VAI O WAVE FORECAST */}
                    </div>
                </div>
            </div>
            
        </>
    )
}