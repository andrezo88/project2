import React, { useState } from 'react'
import { NavBar } from '../NavBar'
import { ForecastWeather } from "./ForecastWeather"
import { CurrentWeather } from './CurrentWeather'
import { ForecastWave } from './ForecastWave'
import { WeatherHistory } from './WeatherHistory'

export const CityDetails = () => {

    const [city, setCity] = useState("")

    const handleChange = (e) => {
        (e && setCity(e.target.value))
    }

    return (
        <>
            <NavBar onChange={handleChange} id={city} endPoint="city-details" searchButtonActive />

            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col">
                        <ForecastWeather />
                    </div>
                    <div className="col">
                        <CurrentWeather />
                    </div>
{/*                     <div className="col">
                        <div className="scrollComponent">
                            <ForecastWave />
                        </div>
                    </div> */}
                </div>
            </div>

            <WeatherHistory />


        </>
    )
}
