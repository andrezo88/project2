import { Link } from "react-router-dom"
import LogoBrand from "../images/LogoBrand.svg"
import { GetCity } from "./GetCity"

export const HomePage = () => {

    return (
        <>
            <div>
                <img src={LogoBrand} alt="Logo Brand" />
                <h1>Io Forecast</h1>
                <h3>Descrição</h3>
                <input placeholder="Type City name"></input>
                <Link to="/city/:id">City Weather</Link>
                <Link to="/favorite-cities">Favorite Cities</Link>
                <Link to="/about"><img alt="Logo Sobre" />SOBRE</Link>
                <p>V1 IO FORECAST - PRODUZIDO POR ANDRÉ AUGUSTO E LUCAS SALOMÃO.</p>
                <GetCity id={"Portland"}/>
            </div>
        </>
    )
}