import Style from './QuizCreator.module.scss';
import QuestionSelector from './QuestionSelector/QuestionSelector';
import ChoiceCreator from './ChoiceCreator/ChoiceCreator';
function QuizCreator() {
    return (
        <div className={Style.Main}>
            <QuestionSelector />
            <ChoiceCreator />
        </div>
    )
}

export default QuizCreator;