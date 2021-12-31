import {useContext} from 'react';
import {Context} from '../../../../context/Provider';
import Question from './components/Question/Question';
function QuestionList() {
    const context = useContext(Context);
    function Notice() {
        return <div className="notice">There are no questions yet. Click the Add button to create one.</div>
    }
    function ListItems() {
        return (
            <>
                {context.questState.questions.map((question, index) => 
                    <Question
                        key={question.id}
                        index={index}
                        question={question}
                    />
                )}
            </>   
        )
    }
    return <ul>{context.questState.questions.length > 0 ? <ListItems/> : <Notice />}</ul>
}

export default QuestionList;