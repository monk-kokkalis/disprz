import {useContext} from 'react';
import Style from './QuestionSelector.module.scss';
import {Context} from '../../context/Provider';
// components
import AddQuestion from './components/AddQuestion/AddQuestion';
import DeleteQuestion from './components/DeleteQuestion/DeleteQuestion';
import ModeIndicator from './components/ModeIndicator/ModeIndicator';
import Question from './components/Question/Question';
function QuestionSelector() {
    const context = useContext(Context);
    return (
        <div className={Style.Main}>
            <h1 className="heading">Select your questions</h1>
            <ModeIndicator />
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
                <DeleteQuestion />
            </section>
        </div>
    )
}

export default QuestionSelector;