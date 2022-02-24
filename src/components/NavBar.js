import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import LogoBrand from "./images/LogoBrand.svg";

export const NavBar = ({ onChange, id, searchButtonActive, endPoint, returnButtonActive, inputHide}) => {

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

        <>
            <div style={{ width: "1600px" }} className=" mx-auto margin-top">
                <div style={{ backgroundColor: "white" }}  >
                    <div className="rounded border border-dark" style={{ marginLeft: "250px", marginRight: "250px", backgroundColor: "white" }}>
                        <div className="d-flex align-items-center">
                            <Link to={"/"}>
                                <span><img src={LogoBrand} alt="LogoBrand" /></span>
                            </Link>
                            <div className="input-group mb-3 mx-auto mt-5" style={{ width: "500px", backgroundColor: "white" }}>
                                <div style={{ width: "500px"}}>
                                    {inputHide ? <></> : <input type="text" className="form-control " placeholder="Type City name"
                                        aria-label="Type city name" aria-describedby="basic-addon2"
                                        onChange={onChange} value={id}
                                        onKeyPress={handleEnterKeyPress}
                                    />}
                                    <div style={{color:"red", marginTop:"5px", marginBottom:"0px"}}>{error}</div>
                                </div>
                                <div className="input-group-append">
                                    {searchButtonActive && (
                                        <Link to={id && `/${endPoint}/${id}`}>
                                            <button className="btn btn-outline-dark mt-0" type="button" disabled={!id}>
                                                {endPoint==="city-details" ? "Search" : "Add"}
                                            </button>
                                        </Link>
                                    )}
                                    {returnButtonActive && (
                                        <Link to={`/city-details/${id}`}>
                                            <button className="btn btn-outline-dark mt-0" type="button" >Voltar</button>
                                        </Link>
                                    )}
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="margin-bottom"></div>
        </>
    )
}