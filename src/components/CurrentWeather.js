import { useState , useEffect } from "react"
import { useParams } from "react-router-dom"
import getAPI from "./GetWeatherAPI";

export const CityData = ({id, submitStatus}) => {

    let chosenCity = id 

    const [cityData, setCityData] = useState("")

    const getCity = async () => {
        const data = await getAPI.getWeatherData(chosenCity)
        setCityData(data)
    }

    useEffect(()=>{
        if ((id!="")){
            getCity()
        }
    },[submitStatus])

    return (
        <>
            <h1>Esse é o retorno do GET CITY</h1>
            <div>
                {cityData && cityData.location.name}
            </div>
            <div>    
                {cityData && cityData.location.country}
            </div>
            <div>    
                {cityData && cityData.current.temp_c} C
            </div>
            <div>    
                {cityData && <img src={cityData.current.condition.icon}/>}  
                {cityData && cityData.current.condition.text}
            </div>
            <div>
                {cityData && cityData.current.humidity} %
            </div>
            <div>
                {cityData && cityData.current.feelslike_c} C
            </div>
            <div>
                {cityData && cityData.astro.sunrise}
            </div>
            <div>    
                {cityData && cityData.astro.sunset}
            </div>
        </>
    )

}