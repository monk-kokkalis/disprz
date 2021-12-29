import actions from './actions';
function reducer(state, action) {
    switch(action.type) {
        case actions.SET_ACTIVE_QUESTION:
            return {...state, activeQuestion: action.payload}
        default:
            throw new Error();
    }
}

export default reducer;