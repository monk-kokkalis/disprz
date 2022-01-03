function saveToLocalStorage({state, action, dexie}) {
    const question = state.questions[action.payload.index];
    dexie.deleteQuestion({modelId: question.id});
}

function DeleteQuestion({state, action, dexie}) {
    const questions = [...state.questions];
    questions.splice(action.payload.index, 1);
    saveToLocalStorage({state, action, dexie})
    return {...state, questions}
}

export default DeleteQuestion;