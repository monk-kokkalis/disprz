import Question from 'models/Question';
const questions = [
    new Question({
        active: true,
        name: 'What is the capital of India?',
        sequenceNumber: 1
    }),
    new Question({
        active: false,
        name: 'What is the capital of the USA?',
        sequenceNumber: 2
    })
]
export default questions;