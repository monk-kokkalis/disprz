import update from 'immutability-helper';

function saveToLocalStorage({state, action, dexie}) {
    const {targetQuestionIndex, image} = action.payload;
    const question = state.questions[targetQuestionIndex];
    dexie.setQuestionImage({modelId: question.id, file: image});
}

function setQuestionImage({state, action, dexie}) {
    saveToLocalStorage({state, action, dexie});
    return update(state, {
        questions: {
            [action.payload.targetQuestionIndex]: {
                image: {
                    $set: action.payload.image
                }
            }
        }
    })
}

export default setQuestionImage;