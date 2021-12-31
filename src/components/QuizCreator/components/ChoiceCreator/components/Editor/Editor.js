import {useContext} from 'react';
import {Context} from '../../../../context/Provider';
// components
import Template from './components/Template/Template';

function Editor() {
    const context = useContext(Context);
    const {activeQuestion, questions} = context.questState;
    const targetQuestionIndex = questions.findIndex(quest => quest.id === activeQuestion.id);

    function Notice() {
        return <div>You must first select a question before choices can be modified.</div>
    }

    return (
        targetQuestionIndex !== -1 ? <Template {...{questions, targetQuestionIndex}}/> : <Notice />
    )
}

export default Editor;