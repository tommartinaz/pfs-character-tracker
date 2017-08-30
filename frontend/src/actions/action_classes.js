import axios from 'axios';

export const getClasses = () => {
    return {
        type: 'GET_CLASSES',
        payload: axios.get('http://localhost:8000/classes')
    }
}