import {useContext} from 'react';
import Style from './AddOption.module.scss';
// hooks
import useTargetQuestionIndex from '../../hooks/use-target-question-index';
// provider
import {Context} from '../../../../context/Provider';
import {questionActions} from '../../../../context/reducers/questions/index';
function AddOption() {
    const context = useContext(Context);
    const {questState, questDispatch} = context;
    const targetQuestionIndex = useTargetQuestionIndex();
    const targetQuestion = questState.questions[targetQuestionIndex];

    const clickHandler = () => {
        const value = `Option ${targetQuestion.options.length + 1}`;
        questDispatch({
            type: questionActions.ADD_OPTION,
            payload: {targetQuestionIndex, value}
        });
    }
    return targetQuestionIndex !== -1 ? (
        <button className={Style.Main} onClick={clickHandler}>Add</button>
    ) : null
}

export default AddOption;