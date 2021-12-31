import {useContext} from 'react';
import {Context} from '../../../../context/Provider';
import TextArea from 'elements/TextArea/TextArea';
// provider
import {questionActions} from '../../../../context/reducers/questions/index';
function Editor() {
    const context = useContext(Context);
    const {activeQuestion, questions} = context.questState;
    const targetQuestionIndex = questions.findIndex(quest => quest.id === activeQuestion.id);
    return (
        <div>
            <TextArea
                label="Question"
                value={questions[targetQuestionIndex].name}
                changeCallback={(value) => {
                    context.questDispatch({
                        type: questionActions.EDIT_QUESTION_NAME,
                        payload: {targetQuestionIndex, value}
                    });
                }}
            />
        </div>
    )
}

export default Editor;