import {useContext} from 'react';
import {Context} from '../../../../../../context/Provider';
import {questionActions} from '../../../../../../context/reducers/questions/index';
import TextArea from "elements/TextArea/TextArea";
function Template({questions, targetQuestionIndex}) {
    const context = useContext(Context);
    return (
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
    )
}

export default Template;