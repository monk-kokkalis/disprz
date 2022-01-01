import update from 'immutability-helper';
function deleteOption({state, action}) {
    const {targetQuestionIndex, targetOptionIndex} = action.payload;
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