import {useState, useEffect, useContext} from 'react';
import {Context} from '../../../../context/Provider';
function Heading() {
    const [questionIndex, setQuestionIndex] = useState(null);
    const context = useContext(Context);
    const {questions, activeQuestion} = context.questState
    
    useEffect(function updateQuestionNumber() {
        const questIndex = questions.findIndex(quest => {
            return quest.id === activeQuestion.id
        })
        setQuestionIndex(questIndex);
    }, [activeQuestion, questions])

    function Notice() {
        return <div>Select a question</div>
    }
    function HeadingText() {
        return <h1>Design question {questionIndex + 1}</h1>
    }
    return questionIndex !== -1 ? <HeadingText /> : <Notice />
}

export default Heading;