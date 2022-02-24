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
                    <CurrentWeather/>
                    <div className='com'>
                        <ForecastWeather/>
                    </div>
                
                </div>
            </div>

            <WeatherHistory />

            <iframe
                style={{borderRadius:"8px",marginBottom:"40px",marginTop:"50px",width:"45vw",height:"40vh"}}
                loading="lazy"
                allowfullscreen
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyB5pePeSlLHqQG5PP8hnLP_VRbd9P48s0c&q=${city}`}>
            </iframe>
        </>
    )
}
