import _ from 'lodash';

export default (state={}, action) => {
    switch (action.type) {
        case "GET_ALL_CHARS_FULFILLED":
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}