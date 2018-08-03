import axios from 'axios'

const BASE_URL = 'http://localhost:8000/api/characters'

export const getAllChars = () => {
    return {
        type: "GET_ALL_CHARS",
        payload: axios.get(`${BASE_URL}`)
    }
}

export const updateChar = (vals) => {
    return {
        type: "UPDATE_CHAR",
        payload: axios.post(`${BASE_URL}/${vals.id}`, vals)
    }
}

export const newChar = (vals) => {
    return {
        type: "ADD_CHAR",
        payload: axios.post(`${BASE_URL}`, vals)
    }
}

export const delChar = (vals) => {
    return {
        type: "DEL_CHAR",
        payload: axios.post(`${BASE_URL}/delete/${vals}`)
    }
}

export const addScenarioToChar = (vals) => {
    return {
        type: 'ADD_SCENARIO_TO_CHAR',
        payload: axios.post(`http://localhost:8000/scenarios/${vals.id}`, {character_id: vals.char_id})
    }
}