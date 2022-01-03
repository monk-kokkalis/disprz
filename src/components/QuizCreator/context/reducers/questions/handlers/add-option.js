import Option from 'models/Option';
import update from 'immutability-helper';
import constants from 'auxiliary/constants';

function saveToLocalStorage({option, state, action, dexie}) {
    const {targetQuestionIndex, value} = action.payload;
    const question = state.questions[targetQuestionIndex];
    dexie.addOption({
        [constants.MODEL_ID]: option.id,
        [constants.QUESTION_MODEL_ID]: question.id,
        [constants.VALUE]: value
    })
}

function addOption({state, action, dexie}) {
    const {targetQuestionIndex, value} = action.payload;
    const newOption = new Option({value});
    saveToLocalStorage({option: newOption, state, action, dexie});
    return update(state, {
        questions: {
            [targetQuestionIndex]: {
                options: {
                    $push: [newOption]
                }
            }
        }
    })
}

export  default addOption;