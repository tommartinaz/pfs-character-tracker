import axios from 'axios';

export const getRaces = () => {
    return {
        type: 'GET_RACES',
        payload: axios.get('http://localhost:8000/api/races')
    }
}