import { v4 as uuidv4 } from 'uuid';
import Option from 'models/Option';
class Question {
    constructor({
        id = `${Date.now()}${uuidv4().slice(0, 6)}`,
        name,
        options = [
            new Option({value: 'Option 1'}),
            new Option({value: 'Option 2'})
        ], 
        image = null
    }) {
        this.id = id;
        this.name = name;
        this.options = options;
        this.image = image;
    }

    serialize() {
        return {
            name: this.name,
            modelId: this.id
        }
    }
}

export default Question;