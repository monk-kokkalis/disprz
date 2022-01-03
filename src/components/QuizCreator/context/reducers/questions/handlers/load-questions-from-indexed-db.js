import update from 'immutability-helper';
function loadQuestionsFromIndexedDb({state, action}) {
    return update(state, {
        questions: {
            $set: action.payload.questions
        }
    })
}

export default loadQuestionsFromIndexedDb;