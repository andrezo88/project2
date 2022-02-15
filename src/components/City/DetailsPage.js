import React, { useState } from 'react'
import { NavBar } from '../NavBar'
import { ForecastWeather } from "./ForecastWeather"
import { CurrentWeather } from './CurrentWeather'
//import { ForecastWave } from './ForecastWave'
import { WeatherHistory } from './WeatherHistory'


/* Esse trecho de código vai servir como referência
para a navegação.

import { useNavigate } from 'react-router-dom';

const SomeComponent = () => {
   const navigate = useNavigate();

   const someEventHandler = () => {
       navigate('/some-route');
   }
} */

export const CityDetails = () => {

    const [city, setCity] = useState("")
    /* const [submit, setSubmit] = useState() */

    const handleChange = (e) => {
        (setCity(e.target.value))
    }
    /* 
        const handleClick = async (e) => {
            setSubmit(city)
        } */

    return (
        <>
            <NavBar onChange={handleChange} id={city} searchButtonActive />

            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col">
                        <ForecastWeather />
                    </div>
                    <div className="col">
                        <CurrentWeather />
                    </div>
                    <div className="col">
                        <CurrentWeather />
                    </div>
                </div>
            </div>
            <WeatherHistory />

        </>
    )
}
