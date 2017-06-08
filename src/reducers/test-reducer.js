import { TEST_ACTION } from '../actions/test-action.js';

const INITIAL_STATE = 0;

export default function testReducer(state = INITIAL_STATE, action) {
    if(action === undefined) {
        return state;
    }

    switch (action.type) {
        case TEST_ACTION:
            return action.payload || state;
        default:
            return state;
    }
};
