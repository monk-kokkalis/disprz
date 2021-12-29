import Style from './QuizCreator.module.scss';
// components
import QuestionSelector from './components/QuestionSelector/QuestionSelector';
import ChoiceCreator from './components/ChoiceCreator/ChoiceCreator';
// provider
import Provider from './context/Provider';
function QuizCreator() {
    return (
        <div className={Style.Main}>
            <Provider>
                <QuestionSelector />
                <ChoiceCreator />
            </Provider>
        </div>
    )
}

export default QuizCreator;