import { v4 as uuidv4 } from 'uuid';
import Option from 'models/Option';
class Question {
    options = [
        new Option({value: 'Option 1'}),
        new Option({value: 'Option 2'})
    ];
    constructor({name}) {
        this.id = `${Date.now()}${uuidv4().slice(0, 6)}`;
        this.name = name;
    }
}

export default Question;