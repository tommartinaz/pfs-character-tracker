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

export const delChar = (vals) => {
    console.log("DEL_CHAR_ACTION", vals)
    return {
        type: "DEL_CHAR",
        payload: axios.post(`${BASE_URL}/delete/${vals}`)
    }
}

export const addScenarioToChar = (vals) => {
    console.log("ACTION_ADD_CHAR_TO_SCEN", vals)
    return {
        type: 'ADD_SCENARIO_TO_CHAR',
        payload: axios.post(`http://localhost:8000/scenarios/${vals.id}`, {character_id: vals.char_id})
    }
}