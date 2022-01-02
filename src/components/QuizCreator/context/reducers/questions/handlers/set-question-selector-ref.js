import update from 'immutability-helper';
function setQuestionSelectorRef({state, action}) {
    return update(state, {
        questionSelectorRef: {
            $set: action.payload.questionSelectorRef
        }
    })
}

export default setQuestionSelectorRef;