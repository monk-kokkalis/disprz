import React, {useReducer} from 'react';
import {questionReducer, questionState} from '../../QuizCreator/context/reducers/questions/index';
function Provider({children}) {
    const [questState, questDispatch] = useReducer(questionReducer, questionState);
    const map = {questState, questDispatch};
    return (
        <Context.Provider value={map}>
            {children}
        </Context.Provider>
    )
}

export const Context = React.createContext();
export default Provider;