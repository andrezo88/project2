import React, { useState } from 'react'

import { NavBar } from '../NavBar'

import { ForecastWeather } from "./ForecastWeather"
import { CurrentWeather } from './CurrentWeather'


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
/*     const [submit, setSubmit] = useState()
 */
    const handleChange = (e) => {
        (e && setCity(e.target.value))
    }

/*     const handleClick = async (e) => {
        setSubmit(!submit)
    } */

    return (
        <>
            <NavBar onChange={handleChange} id={city}/>

            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col">
                        <ForecastWeather id={city}/>
                    </div>
                    <div className="col">
                        <CurrentWeather id={city}/>
                    </div>
                    <div className="col">
                        {/* AQUI VAI O WAVE FORECAST */}
                    </div>
                </div>
            </div>
            
        </>
    )
}
