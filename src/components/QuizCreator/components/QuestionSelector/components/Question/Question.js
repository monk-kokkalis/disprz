import {useContext} from 'react';
import Style from './Question.module.scss';
import className from 'auxiliary/class-name';
// provider
import {Context} from '../../../../context/Provider';
import {questionActions} from '../../../../context/reducers/questions/index';
function Question({question}) {
    const context = useContext(Context);
    const questionActive = question.id === context.questState.activeQuestion.id;
    const clickHandler = () => {
        context.questDispatch({
            type: questionActions.SET_ACTIVE_QUESTION,
            payload: question
        });
    }
    return (
        <li className={className(Style.Main, {active: questionActive})} onClick={clickHandler}>
            <div className="sequence">{question.sequenceNumber}.</div>
            <div className="name">{question.name}</div>
        </li>
    )
}

export default Question