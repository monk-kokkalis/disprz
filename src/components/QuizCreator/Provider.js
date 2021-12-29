import React, {useState} from 'react';
import questionItems from 'data/questions';
function Provider({children}) {
    const [questions, setQuestions] = useState(questionItems);
    const map = {questions, setQuestions};
    return (
        <Context.Provider value={map}>
            {children}
        </Context.Provider>
    )
}

export const Context = React.createContext();
export default Provider;