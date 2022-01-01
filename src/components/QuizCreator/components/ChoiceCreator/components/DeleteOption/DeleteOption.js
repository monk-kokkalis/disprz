import {useContext} from 'react';
import Style from './DeleteOption.module.scss';
// auxiliary
import constants from 'auxiliary/constants';
import className from 'auxiliary/class-name';
// provider
import {Context} from '../../../../context/Provider';
import {questionActions} from '../../../../context/reducers/questions/index';
function DeleteOption() {
    const context = useContext(Context);
    const {questState, questDispatch} = context;
    const currentMode = questState.choiceCreatorMode;
    const choiceCreatorMode = currentMode  === constants.DELETE ? constants.CREATIVE : constants.DELETE;
    const clickHandler = () => {
        questDispatch({
            type: questionActions.CHANGE_CHOICE_CREATOR_MODE,
            payload: {choiceCreatorMode}
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

export default DeleteOption;