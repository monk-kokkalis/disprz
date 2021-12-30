import constants from 'auxiliary/constants';
import questions from 'data/questions';
const state = {
    activeQuestion: questions[0],
    questions,
    questionSelectorMode: constants.CREATIVE
}
export default state;