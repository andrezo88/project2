import { Link } from "react-router-dom";
import { useState } from "react";

import LogoInformation from "./images/LogoInformation.svg";

import { NavBar } from "./NavBar";

import "./HomePage.css"

export const HomePage = () => {

    const [city, setCity] = useState("")

    const handleChange = (e) => {
        (e && setCity(e.target.value))
    }

    return (
        <>

            <div>

            </div>
            <div className="container-fluid">
                <NavBar onChange={handleChange} id={city} />

                <div className="d-flex justify-content-center">
                    <div>
                        <Link to={`/city-details/${city}`} className="btn btn-outline-dark mt-5">City Weather</Link>
                    </div>
                    <div>
                        <Link to={`/favorite-cities/${city}`} className="btn btn-outline-dark mt-5 ms-5 ">Favorite Cities</Link>
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