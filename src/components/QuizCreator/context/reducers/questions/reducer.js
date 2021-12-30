import actions from './actions';
import actionHandlers from './handlers/index';
function reducer(state, action) {
    switch(action.type) {
        case actions.ADD_QUESTION:
            return actionHandlers.addQuestion({state, action});
        case actions.CHANGE_QUESTION_SELECTOR_MODE:
            return actionHandlers.changeQuestionSelectorMode({state, action});
        case actions.SET_ACTIVE_QUESTION:
            return actionHandlers.setActiveQuestion({state, action});
        default:
            throw new Error();
    }
}

export default reducer;