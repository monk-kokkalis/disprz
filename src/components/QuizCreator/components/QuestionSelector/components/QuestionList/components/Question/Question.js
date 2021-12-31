import {useContext, useEffect, useRef} from 'react';
import Style from './Question.module.scss';
// auxiliary
import className from 'auxiliary/class-name';
import constants from 'auxiliary/constants';
// provider
import {Context} from '../../../../../../context/Provider';
import {questionActions} from '../../../../../../context/reducers/questions/index';
function Question({question, index}) {
    const context = useContext(Context);
    const elementRef = useRef();
    const questionActive = question.id === context.questState.activeQuestion.id;
    const clickHandler = () => {
        const selectorMode = context.questState.questionSelectorMode;
        switch(selectorMode) {
            case constants.CREATIVE:
                context.questDispatch({
                    type: questionActions.SET_ACTIVE_QUESTION,
                    payload: question
                });
                break;
            case constants.DELETE:
                context.questDispatch({
                    type: questionActions.DELETE_QUESTION,
                    payload: {index}
                })
                break;
            default:
                console.warn(`${selectorMode} is an invalid selector mode`);
        }
    }
    useEffect(function scrollToView() {
        if (questionActive) {
            elementRef.current.scrollIntoView({behavior: 'smooth'});
        }
    }, [questionActive]);
    return (
        <li 
            className={className(Style.Main, {active: questionActive})}
            onClick={clickHandler}
            ref={elementRef}>

            <div className="sequence">{index + 1}.</div>
            <div className="name">{question.name}</div>
        </li>
    )
}

export default Question