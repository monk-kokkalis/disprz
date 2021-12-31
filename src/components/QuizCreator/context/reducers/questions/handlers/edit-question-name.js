import update from 'immutability-helper';
function EditQuestionName({state, action}) {
    return update(state, {
        questions: {
            [action.payload.targetQuestionIndex]: {name: {
                $set: action.payload.value
            }}
        }
    });
}

export default EditQuestionName;