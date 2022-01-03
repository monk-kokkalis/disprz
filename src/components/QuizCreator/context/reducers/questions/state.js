import constants from 'auxiliary/constants';
import questions from 'data/questions';
const state = {
    activeQuestion: questions[0],
    questions: [],
    questionSelectorMode: constants.CREATIVE,
    choiceCreatorMode: constants.CREATIVE,
    questionSelectorRef: null,
    sideMenuVisible: false
}
export default state;