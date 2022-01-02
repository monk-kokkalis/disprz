import {useContext} from 'react';
import Style from './DeleteOption.module.scss';
// auxiliary
import constants from 'auxiliary/constants';
import className from 'auxiliary/class-name';
// hooks
import useTargetQuestionIndex from '../../hooks/use-target-question-index';
// provider
import {Context} from '../../../../context/Provider';
import {questionActions} from '../../../../context/reducers/questions/index';
function DeleteOption() {
    const context = useContext(Context);
    const {questState, questDispatch} = context;
    const currentMode = questState.choiceCreatorMode;
    const choiceCreatorMode = currentMode  === constants.DELETE ? constants.CREATIVE : constants.DELETE;
    const targetQuestionIndex = useTargetQuestionIndex();
    const clickHandler = () => {
        questDispatch({
            type: questionActions.CHANGE_CHOICE_CREATOR_MODE,
            payload: {choiceCreatorMode}
        });
    }

    return targetQuestionIndex !== -1 ? (
        <button
            className={className(Style.Main, {delete: currentMode === constants.DELETE})}
            onClick={clickHandler}>
                
            Delete
        </button>
    ) : null
}

export default DeleteOption;