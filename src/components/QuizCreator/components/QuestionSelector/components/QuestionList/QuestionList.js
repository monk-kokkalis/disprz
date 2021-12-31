import {useContext} from 'react';
import Style from './QuestionList.module.scss';
import {Context} from '../../../../context/Provider';
import Question from './components/Question/Question';
function QuestionList() {
    const context = useContext(Context);
    function Notice() {
        return <div className="notice">There are no questions yet. Click the Add button to create one.</div>
    }
    function List() {
        return (
            <ul className={Style.Main}>
                {context.questState.questions.map((question, index) => 
                    <Question
                        key={question.id}
                        index={index}
                        question={question}
                    />
                )}
            </ul>
        )
    }
    return context.questState.questions.length > 0 ? <List/> : <Notice />
}

export default QuestionList;