import { v4 as uuidv4 } from 'uuid';
import Option from 'models/Option';
class Question {
    constructor({
        name,
        options = [
            new Option({value: 'Option 1'}),
            new Option({value: 'Option 2'})
        ], 
        file = null
    }) {
        this.id = `${Date.now()}${uuidv4().slice(0, 6)}`;
        this.name = name;
        this.options = options;
        this.file = file;
    }
}

export default Question;