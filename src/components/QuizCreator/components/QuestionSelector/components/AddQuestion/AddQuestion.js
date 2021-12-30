import {useContext} from 'react';
import Style from './AddQuestion.module.scss';
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
    }
    return (
        <button onClick={clickHandler} className={Style.Main} >Add</button>
    )
}

export default AddQuestion;