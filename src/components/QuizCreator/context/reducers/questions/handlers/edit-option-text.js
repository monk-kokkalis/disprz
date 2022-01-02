import update from 'immutability-helper';
function editOptionText({state, action}) {
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