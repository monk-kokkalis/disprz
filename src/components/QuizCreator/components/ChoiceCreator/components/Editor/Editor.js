// components
import Template from './components/Template/Template';
// hooks
import useTargetQuestionIndex from '../../hooks/use-target-question-index';

function Editor() {
    const targetQuestionIndex = useTargetQuestionIndex();

    function Notice() {
        return <div>You must first select a question before choices can be modified.</div>
    }

    return (
        targetQuestionIndex !== -1 ? <Template /> : <Notice />
    )
}

export default Editor;