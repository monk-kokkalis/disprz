import Question from 'models/Question';
function addQuestion({state, action}) {
    const newQuestion = new Question({
        name: `New question ${action.payload.index}`,
    }); 
    const questions = [...state.questions];
    questions.push(newQuestion);
    return {...state, questions, activeQuestion: newQuestion}
}

export default addQuestion;