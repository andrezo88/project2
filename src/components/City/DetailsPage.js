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
        <div>

            <NavBar onChange={handleChange} id={city} endPoint="city-details" searchButtonActive />

            <div /* className='table-orientation' */>
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
                    
                </div>

{/*                 <div>
                    <div style={{marginBottom:"12px"}}>
                        <h5 style={{fontWeight:"600"}} > Wave Forecast by Day and Hour </h5>
                    </div>

                    <ForecastWave />
                </div> */}

            </div>

            <div>
                <p className="rodape">IO FORECAST V.1 - DESENVOLVIDO POR ANDRÉ AUGUSTO E LUCAS SALOMÃO</p>
            </div>

        </div>
    )
}
