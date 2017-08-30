import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import charReducer from './reducer_character';
import scenarioReducer from './reducer_scenario';
import alignmentReducer from './reducer_alignment';
import classReducer from './reducer_class';
import raceReducer from './reducer_race';

const rootReducer = combineReducers({
    characters: charReducer,
    scenarios: scenarioReducer,
    alignments: alignmentReducer,
    classes: classReducer,
    races: raceReducer,
    form: formReducer
})

export default rootReducer;