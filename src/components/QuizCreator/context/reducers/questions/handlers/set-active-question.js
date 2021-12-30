function setActiveQuestion({state, action}) {
    return {...state, activeQuestion: action.payload}
}

export default setActiveQuestion;