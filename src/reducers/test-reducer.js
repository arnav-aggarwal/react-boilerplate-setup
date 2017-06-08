import { TEST_ACTION } from '../actions/test-action.js';

export default function testReducer(state = 0, action) {
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
