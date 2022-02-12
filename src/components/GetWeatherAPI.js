import axios from "axios";

class getAPI {
    constructor() {
        this.api = axios.create({
            baseURL: "http://localhost:8000/cidades"
        })
    }

    getWeatherData = async (cityID) => {
        try {
            const { data } = await this.api.get(`/`)
            const cityData = data.find(city => city.location.name.toLowerCase() === cityID.toLowerCase())
            return cityData
        } catch (error) {
            throw new Error(`Não pegou a cidade ${cityID}`)
        }
    }

}

export default new getAPI()