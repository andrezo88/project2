import React, { useState } from 'react'

import { NavBar } from '../NavBar'

import { ForecastWeather } from './ForecastWeather'
import { CurrentWeather } from './CurrentWeather'


export const CityDetails = () => {

    const [city, setCity] = useState("")
    const [submit, setSubmit] = useState()

    const handleChange = (e) => {
        (e && setCity(e.target.value))
    }

    const handleClick = async () => {
        setSubmit(!submit)
        console.log("aqui")
    }

    return (
        <>
            <NavBar onChange={handleChange} />
            <div className="container margin-top">
                <div className="row justify-content-md-center">
                    <div className="col">
                        <ForecastWeather id={city} submitChange={handleClick}/>
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
