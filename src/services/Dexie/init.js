import Dexie from 'dexie';
import constants from 'auxiliary/constants';

const db = new Dexie('quizCreatorDb');
db.version(1).stores({
    questions: `++id, ${constants.MODEL_ID}, ${constants.NAME}`,
    options: `++id, ${constants.MODEL_ID}, ${constants.QUESTION_MODEL_ID}, ${constants.VALUE}`,
    images: `++id, ${constants.MODEL_ID}, ${constants.QUESTION_MODEL_ID}, ${constants.FILE}`
});

export default db;