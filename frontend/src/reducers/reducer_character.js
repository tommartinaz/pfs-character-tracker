import _ from 'lodash';

export default (state={}, action) => {
    switch (action.type) {
        case "GET_ALL_CHARS_FULFILLED":
            return _.mapKeys(action.payload.data, 'id');
        case "UPDATE_CHAR_FULFILLED":
            console.log("HEARD UPDATE", action.payload.data)
            return _.mapKeys(action.payload.data, 'id');
        case "ADD_CHAR_FULFILLED":
            console.log("HEARD ADD", action.payload.data)
            return _.mapKeys(action.payload.data, 'id');
        case "DEL_CHAR_FULFILLED":
            console.log("HEARD DELETE", action.payload.data);
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}