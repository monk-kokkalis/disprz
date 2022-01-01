import {useContext} from 'react';
import {Context} from '../../../../../../context/Provider';
import {questionActions} from '../../../../../../context/reducers/questions/index';
import useTargetQuestionIndex from '../../../../hooks/use-target-question-index';
import TextArea from "elements/TextArea/TextArea";
// components
import ImageSection from './components/ImageSection/ImageSection';
import Option from './components/Option/Option';
function Template() {
    const context = useContext(Context);
    const {questions, choiceCreatorMode} = context.questState;
    const targetQuestionIndex = useTargetQuestionIndex();
    const targetQuestion = questions[targetQuestionIndex];
    return (
        <div className='Template'>
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
                <ImageSection />
            </section>
            <section className="options--section">
                {targetQuestion?.options.map((option, index) => 
                    <Option
                        key={option.id}
                        {...{option, index, choiceCreatorMode, targetQuestionIndex}} 
                    />)
                }
            </section>
        </div>
        
    )
}

export default Template;