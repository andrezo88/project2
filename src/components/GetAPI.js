import axios from "axios";

class getAPI {
    constructor() {
        this.apiWeather = axios.create({
            baseURL: "http://localhost:8000/currentWeather"
            /* baseURL: `http://api.weatherapi.com/v1/current.json?key=37a3bc7210484cbbbf210800220202&q=` */
        })
        this.apiForecastWeather = axios.create({
            baseURL: "http://localhost:7500/forecastWeather"
        })
        this.apiForecastWave = axios.create({
            baseURL: "http://localhost:7000/forecastWave"
        })

        /* real data */
        this.weatherData = {
            baseURL: "http://api.weatherapi.com/v1/forecast.json"
        }
        this.weatherHeader = {
            headers: { "key": process.env.REACT_APP_TOKEN }
        }
    }

    /* INICIA REAL DATA */
    getWeatherRealData = async (cityID) => {
        try {
            const { data } = await axios.get(`${this.weatherData.baseURL}?q=${cityID}`, this.weatherHeader)
            return data
        } catch (error) {
            throw new Error(`Não pegou o WEATHER`)
        }
    }

    getForecastWeatherRealData = async (cityID) => {
        try {
            const { data } = await axios.get(`${this.weatherData.baseURL}?q=${cityID}&days=3`, this.weatherHeader)
            const forecasWeathertData = data.forecast.forecastday.map((forecastDay) => {

                return {
                    date: forecastDay.date,
                    maxtemp_c: forecastDay.day.maxtemp_c,
                    mintemp_c: forecastDay.day.mintemp_c,
                    icon: forecastDay.day.condition.icon,
                    sunrise: forecastDay.astro.sunrise,
                    sunset: forecastDay.astro.sunset
                }
            })
            return forecasWeathertData
        } catch (error) {
            throw new Error(`Não pegou o FORECAST WEATHER`)
        }
    }
    getHourWeatherRealData = async (cityID) => {
        try {
            const { data } = await axios.get(`${this.weatherData.baseURL}?q=${cityID}&days=3`, this.weatherHeader)

            let forecastHourData = data.forecast.forecastday.map((forecastDay) => {
                console.log(forecastDay)
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

    /* ACABA REAL DATA */


}

export default new getAPI()

