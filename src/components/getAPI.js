import axios from "axios";


class getAPI {
    constructor() {
        this.api = axios.create({
            baseURL: "http://localhost:8000/cidades"
        })
    }

    getOneCity = async (id) => {
        try {
            const { data } = await this.api.get(`/`)
            return data[0]
        } catch (error) {
            throw new Error(`Não pegou a cidade ${id}`)
        }
    }

}

export default new getAPI()