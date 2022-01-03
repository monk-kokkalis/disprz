import Dexie from 'dexie';

const db = new Dexie('quizCreatorDb');
db.version(1).stores({
    questions: '++id, modelId, name',
    options: '++id, modelId, questionModelId, value',
    images: '++id, modelId, questionModelId, file'
});

export default db;