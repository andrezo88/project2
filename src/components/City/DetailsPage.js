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
        <>
            <NavBar onChange={handleChange} id={city} endPoint="city-details" searchButtonActive />
            <div className='main-details'>
                <div className="container">
                    <div className="weather">
                        <CurrentWeather/>
                        <div className='forecast-weather'>
                            <ForecastWeather/>
                        </div>
                    </div>
                    <div className='map'>
                        <iframe
                            style={{borderRadius:"8px",marginBottom:"20px",marginTop:"23px",width:"45vw",height:"40vh"}}
                            loading="lazy"
                            allowFullScreen
                            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyB5pePeSlLHqQG5PP8hnLP_VRbd9P48s0c&q=${city}`}>
                        </iframe>
                    </div>
                </div>

                <div>
                    <ForecastWave/>
                </div>
            </div>
            

            <WeatherHistory />

            <p className="rodape">IO FORECAST V.1 - DESENVOLVIDO POR ANDRÉ AUGUSTO E LUCAS SALOMÃO</p>


        </>
    )
}
