import { Link } from "react-router-dom"
import LogoBrand from "../images/LogoBrand.svg";



export const NavBar = ({ onChange }) => {

    return (

        <>
            <div style={{ backgroundColor: "white" }} className="col-md-auto" >
                <div className="rounded border border-dark" style={{ marginLeft: "250px", marginRight: "250px", backgroundColor: "white" }}>
                    <div className="d-flex">
                        <Link to={"/"}>
                            <span><img src={LogoBrand} alt="LogoBrand" /></span>
                        </Link>
                        <div className="input-group mb-3 mx-auto mt-5" style={{ width: "500px", paddingBottom: "25px", backgroundColor: "white" }}>
                            <input type="text" className="form-control " placeholder="Type City name"
                                aria-label="Type city name" aria-describedby="basic-addon2"
                                onChange={onChange}
                            />
                            <div className="input-group-append">
                                <Link to={`/City-details`}>
                                    <button className="btn btn-outline-dark " type="button"  >Search</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}