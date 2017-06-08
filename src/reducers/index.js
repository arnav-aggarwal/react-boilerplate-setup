import { combineReducers } from 'redux';
import testReducer from './test-reducer.js';

const rootReducer = combineReducers({
    testValue: testReducer,
});

export default rootReducer;
