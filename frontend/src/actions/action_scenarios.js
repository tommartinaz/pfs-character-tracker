import axios from 'axios';

const BASE_URL = 'http://localhost:8000/scenarios';

export const getAllScenarios = () => {
    return {
        type: "GET_ALL_SCENARIOS",
        payload: axios.get(BASE_URL)
    }
}