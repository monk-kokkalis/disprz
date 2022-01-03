import update from 'immutability-helper';

function saveToLocalStorage({state, action, dexie}) {
    const {targetQuestionIndex, value} = action.payload;
    const question = state.questions[targetQuestionIndex];
    dexie.editQuestionName({modelId: question.id, name: value});
}

function EditQuestionName({state, action, dexie}) {
    saveToLocalStorage({state, action, dexie})
    return update(state, {
        questions: {
            [action.payload.targetQuestionIndex]: {name: {
                $set: action.payload.value
            }}
        }
    });
}

export default EditQuestionName;