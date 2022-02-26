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
                        <Link to={city && `/city-details/${city}`} >
                            <button className="btn btn-outline-dark mt-5" style={{ marginLeft: "20px", borderWidth: "0px", border: "none" }} type="button" disabled={!city}>
                                City Weather
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link to={city && `/favorite-cities/${city}`} >
                            <button className="btn btn-outline-dark mt-5 ms-5" style={{ marginLeft: "20px", borderWidth: "0px", border: "none" }} type="button" disabled={!city}>
                                Compare Cities
                            </button>
                        </Link>
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
                    <p className="text-center text-dark">IO FORECAST V.1 - DESENVOLVIDO POR ANDRÉ AUGUSTO E LUCAS SALOMÃO</p>
                </footer>
            </div>
        </>
    )
}