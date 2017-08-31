import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case "GET_ALL_SCENARIOS_FULFILLED":
            return _.mapKeys(action.payload.data, 'id');
        case "ADD_CHAR_TO_SCENARIO_FULFILLED":
            return _.mapKeys(action.payload.data, 'id');
        case 'ADD_SCENARIO_TO_CHAR_FULFILLED':
            console.log("HEARD ADD SCEN TO CHAR", action.payload.data);
            return _.mapKeys(action.payload.data, 'id')

        default:
            return state;
    }
}