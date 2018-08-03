import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case "GET_ALL_SCENARIOS_FULFILLED":
            const groupedScenarios = action.payload.data.reduce((prev, next) => {
                if(!prev[next.season]) prev[next.season] = []
                prev[next.season].push(next);
                return prev;
            }, {});
            const seasonScenarios = [];
            for (var key in groupedScenarios) {
                seasonScenarios[key] = {
                    Season: key,
                    Scenarios: groupedScenarios[key]
                } 
            }

            console.log("DGJHPGHEIQIG", seasonScenarios);
            return seasonScenarios;
        case "ADD_CHAR_TO_SCENARIO_FULFILLED":
            return _.mapKeys(action.payload.data, 'id');
        case 'ADD_SCENARIO_TO_CHAR_FULFILLED':
            return _.mapKeys(action.payload.data, 'id')

        default:
            return state;
    }
}