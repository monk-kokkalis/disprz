import Question from 'models/Question';
import Option from 'models/Option';

const questionNames = [
    'What is the capital of India?',
    'What is the capital of the USA?',
    'What is the capital of France?',
    'What is the capital of Germany?'
]

const questions = questionNames.map(name => {
    const question = new Question({name});
    const options = []
    for (let index = 1; index < 3; index++) {
        const op = new Option({
            questionId: question.id,
            value: `Option ${index}`
        })
        options.push(op);
    }
    question.options = options;
    return question
})

export default questions;