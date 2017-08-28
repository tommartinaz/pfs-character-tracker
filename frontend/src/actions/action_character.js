import axios from 'axios'

const BASE_URL = 'http://localhost:8000'

export const getAllChars = () => {
    console.log("GETTING CHARS")
    return {
        type: "GET_ALL_CHARS",
        payload: axios.get(`${BASE_URL}/characters`)
    }
}