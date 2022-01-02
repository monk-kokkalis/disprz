import update from 'immutability-helper';
function setQuestionImage({state, action}) {
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