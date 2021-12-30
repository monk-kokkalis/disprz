function DeleteQuestion({state, action}) {
    const questions = [...state.questions];
    questions.splice(action.payload.index, 1);
    return {...state, questions}
}

export default DeleteQuestion;