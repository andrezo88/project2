import axios from "axios";

class getAPI {
    constructor() {
        this.apiWeather = axios.create({
            baseURL: "http://localhost:8000/cidades"
        })
        this.apiForecast = axios.create({
            baseURL: "http://localhost:7500/cidades"
        })
        /*         this.apiForecastWave = axios.create({
                    baseURL: "http://localhost:8500/hours"
                }) */
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

            const forecastData = cityForecast.forecast.forecastday.map((forecastDay) => {
                return {
                    date: forecastDay.date,
                    maxtemp_c: forecastDay.day.maxtemp_c,
                    mintemp_c: forecastDay.day.mintemp_c,
                    icon: forecastDay.day.condition.icon,
                    sunrise: forecastDay.astro.sunrise,
                    sunset: forecastDay.astro.sunset
                }
            })

            return forecastData

        } catch (error) {
            throw new Error(`Não pegou o FORECAST`)
        }
    }

    /*     getWaveData = async () => {
            try {
                const { data } = await this.apiForecastWave.get("/")
    
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
    
                return data
                
            } catch (error) {
                throw new Error(`Não pegou o WEATHER`)
            }
        } */

    getHourWeatherData = async (cityID) => {
        try {
            const { data } = await this.apiForecast.get("/")

            const cityForecast = data.find(city => city.location.name.toLowerCase() === cityID.toLowerCase())

            let forecastHourData = cityForecast.forecast.forecastday.map((forecastDay) => {
                const hourArray = forecastDay.hour.map((hour) => {
                    return {
                        time: hour.time,
                        temp_c: hour.temp_c
                    }
                });

                return {
                    time_epoch: forecastDay.day.condition.text,
                    date: forecastDay.date,
                    hour: hourArray
                }
            });

            return forecastHourData

        } catch (error) {
            throw new Error(`Não pegou o FORECAST HOUR`)
        }
    }

}

export default new getAPI()

