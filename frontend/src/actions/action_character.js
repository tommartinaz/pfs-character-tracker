import axios from 'axios'

const BASE_URL = 'http://localhost:8000/characters'

export const getAllChars = () => {
    return {
        type: "GET_ALL_CHARS",
        payload: axios.get(`${BASE_URL}/details`)
    }
}

export const updateChar = (vals) => {
    return {
        type: "UPDATE_CHAR",
        payload: axios.post(`${BASE_URL}/${vals.id}`, vals)
    }
}

export const newChar = (vals) => {
    console.log("ADD_CHAR_ACTION", vals)
    return {
        type: "ADD_CHAR",
        payload: axios.post(`${BASE_URL}`, vals)
    }
}