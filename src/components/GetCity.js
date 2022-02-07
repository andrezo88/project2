import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import getAPI from "./getAPI";
import { useParams } from "react-router-dom"

export const GetCity = ({id}) => {

    const [city,setCity] = useState() 

    console.log("Este é a props",id)

    const params = useParams()

    const getCity = async () => {
        const data = await getAPI.getOneCity(`/${params.id}`)
        setCity(data)
    }

    useEffect(()=>{
        getCity()
    },[])

    return (
        <>
            <>
            <h1>Oi</h1></>
            <div>
                {/*{cities && cities.map(city=>city.location.name)}*/}
                {city && city.location.name}
            </div>        
        </>
    )

}