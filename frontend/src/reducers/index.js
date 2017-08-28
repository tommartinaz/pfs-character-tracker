import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import charReducer from './reducer_character';
import scenarioReducer from './reducer_scenario';

const rootReducer = combineReducers({
    characters: charReducer,
    scenarios: scenarioReducer,
    form: formReducer
})

export default rootReducer;