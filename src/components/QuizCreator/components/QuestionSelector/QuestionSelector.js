import Style from './QuestionSelector.module.scss';
// components
import AddQuestion from './components/AddQuestion/AddQuestion';
import DeleteQuestion from './components/DeleteQuestion/DeleteQuestion';
import ModeIndicator from './components/ModeIndicator/ModeIndicator';
import QuestionList from './components/QuestionList/QuestionList';
function QuestionSelector() {
    return (
        <div className={Style.Main}>
            <h1 className="heading">Select your questions</h1>
            <ModeIndicator />
            <section className="questions">
                <QuestionList />
            </section>
            <section className="buttons">
                <AddQuestion />
                <DeleteQuestion />
            </section>
        </div>
    )
}

export default QuestionSelector;