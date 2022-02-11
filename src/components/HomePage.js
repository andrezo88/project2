import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoBrand from "../images/LogoBrand.svg";
import LogoInformation from "../images/LogoInformation.svg";
import "./HomePage.css"

import { CurrentWeather } from "./City/CurrentWeather"
import { NavBar } from "./NavBar";

export const HomePage = () => {

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

            <div>

            </div>
            <div className="container">
                {/* <NavBar onChange={handleChange} /> */}


                <div className="d-flex justify-content-center">
                    <div>
                        <Link to="/city-details" className="btn btn-outline-dark mt-5">City Weather</Link>
                    </div>
                    <div>
                        <Link to="/favorite-cities" className="btn btn-outline-dark mt-5 ms-5 ">Favorite Cities</Link>
                    </div>
                </div>
            </div >

            <div className="container">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3 ">
                        <Link to="/about" className="text-dark text-opacity-50 text-center " style={{ textDecoration: "none" }}>
                            <div className="media text-dark" style={{ marginTop: "100px" }}>
                                <img src={LogoInformation} alt="Logo Sobre" style={{ width: "20px" }} />SOBRE
                            </div>
                        </Link>
                    </ul>
                    <p className="text-center text-dark">V1 IO FORECAST - PRODUZIDO POR ANDRÉ AUGUSTO E LUCAS SALOMÃO.</p>
                </footer>
            </div>
        </>
    )
}