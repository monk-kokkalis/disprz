import {useContext, useEffect} from 'react';
import {Context} from '../../../context/Provider';
import {questionActions} from '../../../context/reducers/questions/index';
function useRefSetter({questionSelectorRef}) {
    const context = useContext(Context);
    const {questDispatch} = context;
    useEffect(function setRef() {
        questDispatch({
            type: questionActions.SET_QUESTION_SELECTOR_REF,
            payload: {questionSelectorRef}
        })
    }, [questionSelectorRef, questDispatch])
    return undefined
}

export default useRefSetter;