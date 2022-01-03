import update from 'immutability-helper';

function saveToLocalStorage({state, action, dexie}) {
    const {targetQuestionIndex, optionIndex, text} = action.payload;
    const option = state.questions[targetQuestionIndex].options[optionIndex];
    dexie.editOptionText({modelId: option.id, text});
}

function editOptionText({state, action, dexie}) {
    saveToLocalStorage({state, action, dexie});
    return update(state, {
        questions: {
            [action.payload.targetQuestionIndex]: {
                options: {
                    [action.payload.optionIndex]: {
                        value: {
                            $set: action.payload.text
                        }
                    }
                }
            }
        }
    })
}

export default editOptionText;