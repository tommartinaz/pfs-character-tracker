import axios from 'axios';

export const getAlignments = () => {
    return {
        type: 'GET_ALIGNMENTS',
        payload: axios.get('http://localhost:8000/alignments')
    }
}