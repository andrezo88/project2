import axios from "axios";
import { useParams } from "react-router-dom"

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

    getWeatherData = async (cityID) => {
        try {
            const { data } = await this.apiWeather.get("/")
            const cityWeather = data.find(city => city.location.name.toLowerCase() === cityID.toLowerCase())
            return cityWeather
        } catch (error) {
            throw new Error(`Não pegou o WEATHER`)
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

    /* ACABA REAL DATA */

    /* getForecastWeatherData = async (cityID) => {
        try {
            const { data } = await this.apiForecastWeather.get("/")

            const cityForecast = data.find(city => city.location.name.toLowerCase() === cityID.toLowerCase())

            const forecasWeathertData = cityForecast.forecast.forecastday.map((forecastDay) => {
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
            throw new Error(`Não pegou o FORECAST`)
        }
    }

    getForecastWaveData = async () => {
        try {
            const { data } = await this.apiForecastWave.get("/")

            const forecastWaveData = new Array

            data[0].hours.map((forecastHour) => {
                forecastWaveData.push({
                    time: forecastHour.time,
                    icon: forecastHour.waveHeight.icon,
                    meteo: forecastHour.waveHeight.meteo,
                    noaa: forecastHour.waveHeight.noaa,
                    sg: forecastHour.waveHeight.sg,
                })
            })

            return forecastWaveData

        } catch (error) {
            throw new Error(`Não pegou o FORECAST WAVE`)
        }
    } 

    getHourWeatherData = async (cityID) => {
        try {
            const { data } = await this.apiForecastWeather.get("/")

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
    }*/

}

export default new getAPI()

