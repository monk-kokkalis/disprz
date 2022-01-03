import db from './init';
import constants from 'auxiliary/constants';
class DexieService {
    constructor() {
        this.db = db;
    }

    async #executeDatabaseOperation({req, op}) {
        try {
            return await req
        } catch(error) {
            console.warn(`there was an error performing the ${op} database operation`);
            console.warn(error);
        }
    }

    addOption({modelId, questionModelId, value}) {
        const req = this.db.options.add({
            modelId,
            questionModelId,
            value
        });
        const op = 'add option';
        this.#executeDatabaseOperation({req, op});
    }

    addQuestion({question, options}) {
        const req = this.db.transaction('rw', this.db.questions, this.db.options, async () => {
            const serializedQuestion = question.serialize();
            await this.db.questions.add(serializedQuestion);
            const serializedOptions = options.map(quest => {
                const serial = quest.serialize();
                serial.questionModelId = serializedQuestion.modelId;
                return serial;
            })
            await this.db.options.bulkAdd(serializedOptions);
        });
        const op = 'add question';
        this.#executeDatabaseOperation({req, op});
    }

    async deleteOption({modelId}) {
        const option = await this.db.options.get({modelId: modelId});
        const req = this.db.options.delete(option.id);
        const op = 'delete option';
        this.#executeDatabaseOperation({req, op});
    }

    async getAllQuestions() {
        const req = this.db.transaction('r', this.db.questions, this.db.options, this.db.images, async () => {
            const questionRows = await this.db.questions.toArray();
            const questions = questionRows.map(async (quest) => {
                const options = await this.db.options
                    .where(constants.QUESTION_MODEL_ID)
                    .equals(quest.modelId)
                    .toArray();
                const image = await this.db.images.get({[constants.QUESTION_MODEL_ID]: quest.modelId});
                quest.options = options;
                quest.image = image?.file;
                return quest;
            });
            return await Promise.all(questions);
        });
        const op = 'get all questions';
        return await this.#executeDatabaseOperation({req, op});
    }

    async getAllQuestionOptions({questionModelId}) {
        const req = this.db.options
            .where(constants.QUESTION_MODEL_ID)
            .equals(questionModelId)
            .toArray();
        const op = 'get all question options'
        return this.#executeDatabaseOperation({req, op});
    }
}

export default DexieService;