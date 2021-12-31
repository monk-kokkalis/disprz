import { v4 as uuidv4 } from 'uuid';
class Option {
    constructor({value, questionId}) {
        this.id = `${Date.now()}${uuidv4().slice(0, 6)}`;
        this.questionId = questionId;
        this.value = value;
    }
}

export default Option;