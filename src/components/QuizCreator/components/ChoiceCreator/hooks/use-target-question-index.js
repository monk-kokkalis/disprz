import {useContext, useEffect, useState} from 'react';
import {Context} from '../../../context/Provider';
function useTargetQuestionIndex() {
    const [targetQuestionIndex, setTargetQuestionIndex] = useState(-1);
    const context = useContext(Context);
    const {questions, activeQuestion} = context.questState;

    useEffect(() => {
        const questIndex = questions.findIndex(quest => {
            return quest.id === activeQuestion.id
        })
        setTargetQuestionIndex(questIndex);
    }, [activeQuestion, questions])

    return targetQuestionIndex;
}

export default useTargetQuestionIndex;