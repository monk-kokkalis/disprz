import addOption from './add-option';
import addQuestion from "./add-question";
import changeChoiceCreatorMode from './change-choice-creator-mode';
import changeQuestionSelectorMode from "./change-question-selector-mode";
import deleteOption from './delete-option';
import deleteQuestion from './delete-question';
import editOptionText from './edit-option-text';
import editQuestionName from './edit-question-name';
import loadQuestionsFromIndexedDb from './load-questions-from-indexed-db';
import setActiveQuestion from "./set-active-question";
import setQuestionImage from './set-question-image';
import setQuestionSelectorRef from './set-question-selector-ref';
import setSideMenuVisible from './set-side-menu-visible';
export default Object.freeze({
    addOption,
    addQuestion,
    changeChoiceCreatorMode,
    changeQuestionSelectorMode,
    deleteOption,
    deleteQuestion,
    editOptionText,
    editQuestionName,
    loadQuestionsFromIndexedDb,
    setActiveQuestion,
    setQuestionImage,
    setQuestionSelectorRef,
    setSideMenuVisible
})