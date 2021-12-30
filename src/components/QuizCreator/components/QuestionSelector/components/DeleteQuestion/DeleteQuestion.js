import {useContext} from 'react';
import Style from './DeleteQuestion.module.scss';
// auxiliary
import constants from 'auxiliary/constants';
import className from 'auxiliary/class-name';
// provider
import {Context} from '../../../../context/Provider';
import {questionActions} from '../../../../context/reducers/questions/index';
function DeleteQuestion() {
    const context = useContext(Context);
    const {questState, questDispatch} = context;
    const currentMode = questState.questionSelectorMode;
    const questionSelectorMode = currentMode  === constants.DELETE ? constants.CREATIVE : constants.DELETE;
    const clickHandler = () => {
        questDispatch({
            type: questionActions.CHANGE_QUESTION_SELECTOR_MODE,
            payload: {questionSelectorMode}
        });
    }
    return (
        <button
            className={className(Style.Main, {delete: currentMode === constants.DELETE})}
            onClick={clickHandler}>

            Delete
        </button>
    )
}

export default DeleteQuestion;