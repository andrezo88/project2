import axios from "axios";

class getAPI {
    constructor() {
        this.apiWeather = axios.create({
            baseURL: "http://localhost:8000/cidades"
        })
        this.apiForecast = axios.create({
            baseURL: "http://localhost:7500/cidades"
        })
    }

    getWeatherData = async (cityID) => {
        try {
            const { data } = await this.apiWeather.get("/")
            const cityWeather = data.find(city => city.location.name.toLowerCase() === cityID.toLowerCase())
            return cityWeather
        } catch (error) {
            throw new Error(`Não pegou o WEATHER`)
        }
    }

    getForecastWeatherData = async (cityID) => {
        try {
            const { data } = await this.apiForecast.get("/")
            
            const cityForecast = data.find(city => city.location.name.toLowerCase() === cityID.toLowerCase())
            
            const forecastData = new Array 
          
            cityForecast.forecast.forecastday.map( (forecastDay)=> {            
                forecastData.push({
                    date: forecastDay.date,
                    maxtemp_c: forecastDay.day.maxtemp_c,
                    mintemp_c: forecastDay.day.mintemp_c,
                    icon: forecastDay.day.condition.icon,
                    sunrise: forecastDay.astro.sunrise,
                    sunset: forecastDay.astro.sunset
                })
            })

            return forecastData

        } catch (error) {
            throw new Error(`Não pegou o FORECAST`)
        }
    }

}

export default new getAPI()

