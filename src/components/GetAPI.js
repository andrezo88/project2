import axios from "axios";

class getAPI {
    constructor() {
        this.apiWeather = axios.create({
            baseURL: "http://localhost:8000/cidades"
        })
        this.apiForecast = axios.create({
            baseURL: "http://localhost:7500/forecast"
        })
    }

    getWeatherData = async (cityID) => {
        try {
            const { data } = await this.apiWeather.get("/")
            /* const cityWeather = data.find(city => city.location.name === cityID) */
            return data[0]
        } catch (error) {
            throw new Error(`Não pegou o WEATHER`)
        }
    }

    getForecastWeatherData = async () => {
        /* cityID */
        try {
            const { data } = await this.apiForecast.get("/")
            const cityForecast = data
            return cityForecast
        } catch (error) {
            throw new Error(`Não pegou o FORECAST`)
        }
    }
    

}

export default new getAPI()