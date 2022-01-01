function changeChoiceCreatorMode({state, action}) {
    const choiceCreatorMode = action.payload.choiceCreatorMode;
    return {...state, choiceCreatorMode}
}

export default changeChoiceCreatorMode;