import Style from './App.module.scss';
// components
import QuizCreator from 'components/QuizCreator/QuizCreator';
import Snackbar from 'components/Snackbar/Snackbar';
import SnackbarProvider, {SnackbarContext} from 'components/Snackbar/SnackbarProvider';
function App() {
    return (
        <div className={Style.Main}>
            <SnackbarProvider>
                <SnackbarContext.Consumer>
                    {(snackbarContext) => 
                        <>
                            <Snackbar context={snackbarContext} />
                            <QuizCreator />
                        </>
                    }
                </SnackbarContext.Consumer>
            </SnackbarProvider>
            
        </div>
    );
}

export default App;