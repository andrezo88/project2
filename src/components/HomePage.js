import { Link } from "react-router-dom";
import LogoBrand from "../images/LogoBrand.svg";
import LogoInformation from "../images/LogoInformation.svg";
import "./HomePage.css"

export const HomePage = () => {

    return (
        <>
            <div className="container">

                <img src={LogoBrand} alt="Logo Brand" className="mx-auto d-block" style={{ marginTop: "150px" }} />
                <h1 className="text-center">Io Forecast</h1>
                <h3 className="text-center">Descrição</h3>

                <div className="rounded border border-dark" style={{ marginLeft: "250px", marginRight: "250px", backgroundColor: "white" }}>
                    <div className="input-group mb-3 mx-auto mt-5" style={{ width: "500px", paddingBottom: "25px", backgroundColor: "white" }}>
                        <input type="text" className="form-control " placeholder="Type City name"
                            aria-label="Type city name" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <Link to={`/NavBar`}>
                                <button className="btn btn-outline-dark " type="button">Search</button>
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="d-flex justify-content-center">
                    <div>
                        <Link to="/city/:id" className="btn btn-outline-dark mt-5">City Weather</Link>
                    </div>
                    <div>
                        <Link to="/favorite-cities" className="btn btn-outline-dark mt-5 ms-5 ">Favorite Cities</Link>
                    </div>
                </div>
            </div >

            <div class="container">
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