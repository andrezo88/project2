import "./CurrentWeather.css"


export const CardCities = ({ cityData }) => {


    return (
        <>
            {cityData ? 
            
                <>

                    <tr className="table-information">
                        <td>{cityData.location && cityData.location.name}</td>
                        <td>{cityData.location && cityData.location.country}</td>
                        <td><img src={cityData.current.condition.icon} style={{width:"60px"}}alt="icon weather" /> {cityData.current.condition.text}</td>
                        <td>{cityData.current && cityData.current.temp_c} ºC</td>
                        <td>{cityData.current && cityData.current.humidity} %</td>
                        <td>{cityData && cityData.forecast.forecastday[0].astro.sunrise}</td>
                        <td>{cityData && cityData.forecast.forecastday[0].astro.sunset}</td>
                    </tr>

                
                </> : null
            }
        </>
    )

}