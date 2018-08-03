import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/scenarios';

export const getAllScenarios = () => {
    return {
        type: "GET_ALL_SCENARIOS",
        payload: axios.get(BASE_URL)
    }
}

export const addCharToScenario = (vals) => {
    return {
        type: 'ADD_CHAR_TO_SCENARIO',
        payload: axios.post(`${BASE_URL}/${vals.scenario_id}`, {character_id: vals.values.char_id})
    }
}