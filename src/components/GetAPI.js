import axios from "axios";

class getAPI {
    constructor() {
        this.weatherData = {
            baseURL: "https://api.weatherapi.com/v1/forecast.json"
        }
        this.weatherHeader = {
            headers: { "key": process.env.REACT_APP_TOKEN_WEATHER_API }
        }
        this.waveData = {
            baseURL: "https://api.stormglass.io/v2/weather/point"
        }
        this.waveHeader = {
            headers: { "Authorization": process.env.REACT_APP_TOKEN_WAVE_API }
        }
        this.waveTest = {
            baseURL: "http://localhost:8000/hours"
        }
    }

    getWeatherRealData = async (cityID) => {
        try {
            const { data } = await axios.get(`${this.weatherData.baseURL}?q=${cityID}`, this.weatherHeader)
            return data
        } catch (error) {
            throw error
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
            throw error
        }
    }

    getHourWeatherRealData = async (cityID) => {
        try {
            const { data } = await axios.get(`${this.weatherData.baseURL}?q=${cityID}&days=3`, this.weatherHeader)

            let forecastHourData = data.forecast.forecastday.map((forecastDay) => {
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
            throw error
        }
    }

    getForecastWaveData = async (cityID) => {
        try {

            /* const { data } = await axios.get(`https://api.stormglass.io/v2/weather/point?lat=${58.7984}&lng=${17.8081}&params=${'waveHeight,airTemperature'}`,this.waveHeader) */
            
            const { data } = await axios.get(this.waveTest.baseURL)
            
            const forecastWaveData = new Array 

            data.map( (forecastHour)=> {
                forecastWaveData.push({
                    time: `${forecastHour.time.slice(0,10)} - ${forecastHour.time.slice(11,13)}`,
                    icon: forecastHour.waveHeight.icon,
                    meteo: forecastHour.waveHeight.meteo,
                    noaa: forecastHour.waveHeight.noaa,
                    sg: forecastHour.waveHeight.sg,
                })
            })

            return forecastWaveData

        } catch (error) {
            throw new Error("Nao pegou o FORECAST WAVE")

        
    }}

    


}

export default new getAPI()

