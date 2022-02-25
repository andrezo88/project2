import React, { useState } from 'react'
import { NavBar } from '../NavBar'
import { ForecastWeather } from "./ForecastWeather"
import { CurrentWeather } from './CurrentWeather'
import { ForecastWave } from './ForecastWave'
import { WeatherHistory } from './WeatherHistory'
import "./DetailsPage.css"

export const CityDetails = () => {

    const [city, setCity] = useState("")

    const handleChange = (e) => {
        (e && setCity(e.target.value))
    }

    return (
        <div /* style={{ backgroundColor: "#F5F5F5" }} */>

            <NavBar onChange={handleChange} id={city} endPoint="city-details" searchButtonActive />
            
            <div className='main-details'>
                
                <div>
                    <CurrentWeather />
                </div>
                  
                <div className='forecast-weather'>
                    <ForecastWeather />
                </div>

                <div style={{marginBottom: "100px", marginTop: "23px", width: "45vw", height: "40vh" }}>
                    <WeatherHistory />
                </div>

                <div>
                    <ForecastWave />
                </div>
                
            </div>

            <p className="rodape">IO FORECAST V.1 - DESENVOLVIDO POR ANDRÉ AUGUSTO E LUCAS SALOMÃO</p>

        </div>
    )
}
