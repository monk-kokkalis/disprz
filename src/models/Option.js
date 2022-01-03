import { v4 as uuidv4 } from 'uuid';
class Option {
    constructor({
        id = `${Date.now()}${uuidv4().slice(0, 6)}`,
        value,
    }) {
        this.id = id;
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