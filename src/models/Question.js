import { v4 as uuidv4 } from 'uuid';
class Question {
    constructor({name, sequenceNumber, active}) {
        this.id = `${Date.now()}${uuidv4()}`;
        this.active = active;
        this.name = name;
        this.sequenceNumber = sequenceNumber;
    }
}

export default Question;