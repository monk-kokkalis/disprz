import Style from './Template.module.scss';
import {useContext} from 'react';
import {Context} from '../../../../../../context/Provider';
import {questionActions} from '../../../../../../context/reducers/questions/index';
import useTargetQuestionIndex from '../../../../hooks/use-target-question-index';
import TextArea from "elements/TextArea/TextArea";
// components
import Option from './components/Option/Option';
function Template() {
    const context = useContext(Context);
    const {questions} = context.questState;
    const targetQuestionIndex = useTargetQuestionIndex();
    const targetQuestion = questions[targetQuestionIndex];
    return (
        <div className={Style.Main}>
            <section className="question--name">
                <TextArea
                    label="Question"
                    value={targetQuestion?.name}
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
            <section className="options">
                {targetQuestion?.options.map((option, index) => <Option {...{option, index}} />)}
            </section>
        </div>
        
    )
}

export default Template;