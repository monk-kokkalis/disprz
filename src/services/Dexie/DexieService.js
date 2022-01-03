import db from './init';
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
}

export default DexieService;