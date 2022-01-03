import actions from './actions';
import actionHandlers from './handlers/index';
import DexieService from 'services/Dexie/DexieService';
const dexie = new DexieService();

function reducer(state, action) {
    switch(action.type) {
        case actions.ADD_OPTION:
            return actionHandlers.addOption({state, action, dexie});
        case actions.ADD_QUESTION:
            return actionHandlers.addQuestion({state, action, dexie});
        case actions.CHANGE_CHOICE_CREATOR_MODE:
            return actionHandlers.changeChoiceCreatorMode({state, action});
        case actions.CHANGE_QUESTION_SELECTOR_MODE:
            return actionHandlers.changeQuestionSelectorMode({state, action});
        case actions.DELETE_OPTION:
            return actionHandlers.deleteOption({state, action, dexie});
        case actions.DELETE_QUESTION:
            return actionHandlers.deleteQuestion({state, action, dexie});
        case actions.EDIT_OPTION_TEXT:
            return actionHandlers.editOptionText({state, action, dexie});
        case actions.EDIT_QUESTION_NAME:
            return actionHandlers.editQuestionName({state, action, dexie});
        case actions.LOAD_QUESTIONS_FROM_INDEXED_DB:
            return actionHandlers.loadQuestionsFromIndexedDb({state, action});
        case actions.SET_ACTIVE_QUESTION:
            return actionHandlers.setActiveQuestion({state, action});
        case actions.SET_QUESTION_IMAGE:
            return actionHandlers.setQuestionImage({state, action, dexie});
        case actions.SET_QUESTION_SELECTOR_REF:
            return actionHandlers.setQuestionSelectorRef({state, action});
        case actions.SET_SIDE_MENU_VISIBLE:
            return actionHandlers.setSideMenuVisible({state, action});
        default:
            throw new Error(`${action.type} is not supported by the reducer`);
    }
}

export default reducer;