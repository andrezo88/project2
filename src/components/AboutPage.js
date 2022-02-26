import React from 'react'
import { NavBar } from "./NavBar"
import about from "./images/about.gif";

export const AboutPage = () => {
    return (
        <>
            <NavBar />
            <div>
                <img src={about} alt="About Gif" />
            </div>
        </>
    )
}
