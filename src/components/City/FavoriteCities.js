import React, { useState } from 'react'
import { NavBar } from '../NavBar'
import { ListCities } from './ListCities';

export const FavoriteCities = () => {

    const [city, setCity] = useState("");

    const handleChange = (e) => {
        (e && setCity(e.target.value))
    }

    return (
        <>
            <NavBar onChange={handleChange} id={city} searchButtonActive endPoint="favorite-cities" />
            <ListCities />
        </>
    )
}
