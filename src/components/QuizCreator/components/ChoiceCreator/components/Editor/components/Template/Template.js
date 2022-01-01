import Style from './Template.module.scss';
import {useContext} from 'react';
import {Context} from '../../../../../../context/Provider';
import {questionActions} from '../../../../../../context/reducers/questions/index';
import TextArea from "elements/TextArea/TextArea";
import useTargetQuestionIndex from '../../../../hooks/use-target-question-index';
function Template() {
    const context = useContext(Context);
    const {questions} = context.questState;
    const targetQuestionIndex = useTargetQuestionIndex();
    return (
        <div className={Style.Main}>
            <section className="question--name">
                <TextArea
                    label="Question"
                    value={questions[targetQuestionIndex]?.name}
                    changeCallback={(value) => {
                        context.questDispatch({
                            type: questionActions.EDIT_QUESTION_NAME,
                            payload: {targetQuestionIndex, value}
                        });
                    }}
                />
                <section className="image">
                    <button>Add Image</button>
                </section>
            </section>
        </div>
        
    )
}

export default Template;