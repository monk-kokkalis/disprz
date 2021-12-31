import { v4 as uuidv4 } from 'uuid';
class Question {
    constructor({name}) {
        this.id = `${Date.now()}${uuidv4().slice(0, 6)}`;
        this.name = name;
    }
}

export default Question;