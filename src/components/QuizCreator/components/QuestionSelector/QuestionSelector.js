import {useContext} from 'react';
import Style from './QuestionSelector.module.scss';
import {Context} from '../../context/Provider';
// components
import AddQuestion from './components/AddQuestion/AddQuestion';
import Question from './components/Question/Question';
function QuestionSelector() {
    const context = useContext(Context);
    return (
        <div className={Style.Main}>
            <h1 className="heading">Select your questions</h1>
            <section className="questions">
                <ul>
                    {context.questState.questions.map((question, index) => 
                        <Question
                            key={question.id}
                            index={index}
                            question={question}
                        />
                    )}
                </ul>
            </section>
            <section className="buttons">
                <AddQuestion />
                <button>Delete</button>
            </section>
        </div>
    )
}

export default QuestionSelector;