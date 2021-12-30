import actions from './actions';
import Question from 'models/Question';
function reducer(state, action) {
    switch(action.type) {
        case actions.ADD_QUESTION:
            const newQuestion = new Question({
                name: `New question ${action.payload.index}`,
            });
            const questions = [...state.questions];
            questions.push(newQuestion);
            return {...state, questions, activeQuestion: newQuestion}
        case actions.SET_ACTIVE_QUESTION:
            return {...state, activeQuestion: action.payload}
        default:
            throw new Error();
    }
}

export default reducer;