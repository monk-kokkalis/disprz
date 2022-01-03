import update from 'immutability-helper';

function saveToLocalStorage({state, targetQuestionIndex, targetOptionIndex, dexie}) {
    const option = state.questions[targetQuestionIndex].options[targetOptionIndex];
    dexie.deleteOption({modelId: option.id});
}

function deleteOption({state, action, dexie}) {
    const {targetQuestionIndex, targetOptionIndex} = action.payload;
    saveToLocalStorage({state, targetQuestionIndex, targetOptionIndex, dexie});
    return update(state, {
        questions: {
            [targetQuestionIndex]: {
                options: {
                    $splice: [[targetOptionIndex, 1]]
                }
            }
        }
    })
}

export default deleteOption;