import Style from './App.module.scss';
import QuizCreator from 'components/QuizCreator/QuizCreator';
function App() {
    return (
        <div className={Style.Main}>
            <QuizCreator />
        </div>
    );
}

export default App;
