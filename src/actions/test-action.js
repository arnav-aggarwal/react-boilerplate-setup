export const TEST_ACTION = 'TEST_ACTION';

export default function testAction(testValue) {
    // returning an action
    return {
        type: TEST_ACTION,
        payload: testValue
    };
};
