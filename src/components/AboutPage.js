import React from 'react'
import { NavBar } from "./NavBar"
import about from "../components/images/about.gif"
import "./AboutPage.css"

export const AboutPage = () => {
    return (
        <>
            <NavBar />
            <div className="about-section">
                <div className="img-about">
                    <img src={about} alt="About Gif" />
                </div>
                <div className="text-about">
                    <div>
                        <div className="text-about-title">About Us</div>
                        <div className="text-about-msg">
                            The webpage was developed by André Abreu and Lucas Salomão to innovating the way of check the weather and forecast.
                            Making it simple and intuitive to find cities weather around the world also created
                            to compare cities in a fun and functional way.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
