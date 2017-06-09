import { combineReducers } from 'redux';
import testReducer from './test-reducer';

const rootReducer = combineReducers({
    testValue: testReducer,
});

export default rootReducer;
