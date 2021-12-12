const initState = 0;
const reduce = (previousState = initState, action) => {
    switch (action.type) {
        case 'increment':
            return previousState + action.data;
        case 'decrement':
            return previousState - action.data;
        default:
            return previousState;
    }
}

export default reduce;