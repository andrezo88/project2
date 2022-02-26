import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import LogoBrand from "./images/LogoBrand.svg";
import "./NavBar.css"

export const NavBar = ({ onChange, id, searchButtonActive, endPoint, returnButtonActive, inputHide }) => {

    const navigate = useNavigate();

    const [error, setError] = useState("")

    const handleEnterKeyPress = (target) => {

        if (endPoint && target.charCode === 13 && id) {
            navigate(`/${endPoint}/${id}`)
            setError(null)
        } else if (!endPoint && target.charCode === 13 && id) {
            setError("Oops, try clicking in one option below :)")
        }
    };

    useEffect(() => {
        setError(null)
    }, [id])

    return (
        <div style={{
            backgroundColor: "#F5F5F5",
            overflow: "hidden",
            position: "fixed",
            top: "0px",
            width: "100vw",
        }}>

            <>
                <div className="main-Nav">
                    <div>
                        <Link to={"/"}>
                            <span><img src={LogoBrand} alt="LogoBrand" style={{ width: "55px" }} /></span>
                        </Link>
                    </div>

                    <div>
                        {inputHide ? <></> :
                            <input
                                type="text"
                                className="form-control "
                                placeholder="Type location name"
                                aria-label="Type location name"
                                aria-describedby="basic-addon2"
                                onChange={onChange} value={id}
                                onKeyPress={handleEnterKeyPress}
                                style={{ verticalAlign: "center", marginLeft: "50px", height: "3.2vh", width: "30vw", borderWidth: "0px", border: "none" }}
                            />
                        }
                        {error &&
                            <div>
                                <spam style={{ fontSize: "12px", marginLeft: "50px", color: "red", marginTop: "5px", marginBottom: "0px" }}> {error} </spam>
                            </div>
                        }
                    </div>



                    <div>
                        {searchButtonActive && (
                            <Link to={id && `/${endPoint}/${id}`}>
                                <button className="btn btn-outline-dark mt-0" style={{ marginLeft: "20px", borderWidth: "0px", border: "none" }} type="button" disabled={!id}>
                                    {endPoint === "city-details" ? "Search City" : "Add City"}
                                </button>
                            </Link>
                        )}
                    </div>

                    <div>
                        {returnButtonActive && (
                            <Link to={`/city-details/${id}`}>
                                <button className="btn btn-outline-dark mt-0" type="button" >Voltar</button>
                            </Link>
                        )}
                    </div>


                </div>
            </>
        </div>
    )
}