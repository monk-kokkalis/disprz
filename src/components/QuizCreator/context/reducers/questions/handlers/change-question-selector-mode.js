import constants from "auxiliary/constants";
function changeQuestionSelectorMode({state, action}) {
    const validSelectorModes = [constants.CREATIVE, constants.DELETE];
    const questionSelectorMode = action.payload.questionSelectorMode;
    if (!validSelectorModes.includes(questionSelectorMode)) {
        throw new Error(`${questionSelectorMode} is not a valid mode for change question selector mode`);
    }
    return {...state, questionSelectorMode};
}

export default changeQuestionSelectorMode;