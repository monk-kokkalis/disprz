import {useContext} from 'react';
import Style from './QuestionSelector.module.scss';
import {Context} from '../../Provider';
// components
import Question from './components/Question/Question';
function QuestionSelector() {
    const context = useContext(Context);
    return (
        <div className={Style.Main}>
            <h1 className="heading">Select your questions</h1>
            <section className="questions">
                <ul>
                    {context.questions.map(question => 
                        <Question
                            key={question.sequenceNumber} 
                            name={question.name}
                            sequenceNumber={question.sequenceNumber}
                        />
                    )}
                </ul>
            </section>
        </div>
    )
}

export default QuestionSelector;