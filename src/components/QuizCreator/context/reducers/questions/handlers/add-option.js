import Option from 'models/Option';
import update from 'immutability-helper';
function addOption({state, action}) {
    const {targetQuestionIndex, value} = action.payload
    return update(state, {
        questions: {
            [targetQuestionIndex]: {
                options: {
                    $push: [new Option({value})]
                }
            }
        }
    })
}

export  default addOption;