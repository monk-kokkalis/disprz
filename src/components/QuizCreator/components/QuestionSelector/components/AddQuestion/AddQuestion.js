import {useContext} from 'react';
import Style from './AddQuestion.module.scss';
import constants from 'auxiliary/constants';
// provider
import {Context} from '../../../../context/Provider';
import {questionActions} from '../../../../context/reducers/questions/index';
function AddQuestion() {
    const context = useContext(Context);
    const {questState, questDispatch} = context;
    const clickHandler = () => {
        const index = questState.questions.length + 1;
        questDispatch({
            type: questionActions.ADD_QUESTION,
            payload: {index}
        });
        questDispatch({
            type: questionActions.CHANGE_QUESTION_SELECTOR_MODE,
            payload: {questionSelectorMode: constants.CREATIVE}
        });
    }
    return (
        <button onClick={clickHandler} className={Style.Main} >Add</button>
    )
}

export default AddQuestion;