import Question from 'models/Question';
import Option from 'models/Option';

function saveToLocalStorage({question, options, dexie}) {
    dexie.addQuestion({question, options});
}

function addQuestion({state, action, dexie}) {
    const options = [
        new Option({value: 'Option 1'}),
        new Option({value: 'Option 2'})
    ];
    const newQuestion = new Question({
        name: `New question ${action.payload.index}`,
        options,
        image: null
    }); 
    const questions = [...state.questions];
    questions.push(newQuestion);
    saveToLocalStorage({question: newQuestion, options, dexie});
    return {...state, questions, activeQuestion: newQuestion}
}

export default addQuestion;