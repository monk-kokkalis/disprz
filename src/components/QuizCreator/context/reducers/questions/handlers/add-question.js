import Question from 'models/Question';
import Option from 'models/Option';
function addQuestion({state, action}) {
    const newQuestion = new Question({
        name: `New question ${action.payload.index}`,
        options: [
            new Option({value: 'Option 1'}),
            new Option({value: 'Option 2'})
        ],
        file: null
    }); 
    const questions = [...state.questions];
    questions.push(newQuestion);
    return {...state, questions, activeQuestion: newQuestion}
}

export default addQuestion;