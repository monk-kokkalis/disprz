import Style from './Template.module.scss';
import {useContext} from 'react';
import {Context} from '../../../../../../context/Provider';
import {questionActions} from '../../../../../../context/reducers/questions/index';
import TextArea from "elements/TextArea/TextArea";
function Template({questions, targetQuestionIndex}) {
    const context = useContext(Context);
    return (
        <div className={Style.Main}>
            <section className="question--name">
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
                <section className="image">
                    <button>Add Image</button>
                </section>
            </section>
        </div>
        
    )
}

export default Template;