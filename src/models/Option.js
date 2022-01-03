import { v4 as uuidv4 } from 'uuid';
class Option {
    constructor({value}) {
        this.id = `${Date.now()}${uuidv4().slice(0, 6)}`;
        this.value = value;
    }

    serialize() {
        return {
            modelId: this.id,
            value: this.value
        }
    }
}

export default Option;