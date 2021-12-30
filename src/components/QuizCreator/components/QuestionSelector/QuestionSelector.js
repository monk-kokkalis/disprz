import {useContext} from 'react';
import Style from './QuestionSelector.module.scss';
import {Context} from '../../context/Provider';
// components
import Question from './components/Question/Question';
function QuestionSelector() {
    const context = useContext(Context);
    return (
        <div className={Style.Main}>
            <h1 className="heading">Select your questions</h1>
            <section className="questions">
                <ul>
                    {context.questState.questions.map(question => 
                        <Question
                            key={question.sequenceNumber}
                            question={question}
                        />
                    )}
                </ul>
            </section>
            <section className="buttons">
                <button>Add</button>
                <button>Delete</button>
            </section>
        </div>
    )
}

export default QuestionSelector;