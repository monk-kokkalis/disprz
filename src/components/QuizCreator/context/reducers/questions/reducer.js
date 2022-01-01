import actions from './actions';
import actionHandlers from './handlers/index';
function reducer(state, action) {
    switch(action.type) {
        case actions.ADD_OPTION:
            return actionHandlers.addOption({state, action});
        case actions.ADD_QUESTION:
            return actionHandlers.addQuestion({state, action});
        case actions.CHANGE_QUESTION_SELECTOR_MODE:
            return actionHandlers.changeQuestionSelectorMode({state, action});
        case actions.DELETE_OPTION:
            return actionHandlers.deleteOption({state, action});
        case actions.DELETE_QUESTION:
            return actionHandlers.deleteQuestion({state, action});
        case actions.EDIT_QUESTION_NAME:
            return actionHandlers.editQuestionName({state, action});
        case actions.SET_ACTIVE_QUESTION:
            return actionHandlers.setActiveQuestion({state, action});
        default:
            throw new Error();
    }
}

export default reducer;