import {useContext} from 'react';
import Style from './Option.module.scss';
import TextArea from 'elements/TextArea/TextArea';
// auxiliary
import className from 'auxiliary/class-name';
import constants from 'auxiliary/constants';
// provider
import {Context} from 'components/QuizCreator/context/Provider';
import {questionActions} from 'components/QuizCreator/context/reducers/questions/index'
function Option({option, index, choiceCreatorMode, targetQuestionIndex}) {
    const context = useContext(Context);
    const {questDispatch} = context;
    const targetOptionIndex = index;
    const clickHandler = () => {
        if (choiceCreatorMode === constants.DELETE) {
            questDispatch({
                type: questionActions.DELETE_OPTION,
                payload: {targetQuestionIndex, targetOptionIndex}
            });
        }
    }
    return (
        <div
            className={className(Style.Main, {delete: choiceCreatorMode === constants.DELETE})}
            onClick={clickHandler}>
            <TextArea
                label={`Option ${index + 1}`}
                value={option.value}
                changeCallback={(value) => {
                    console.log(`Option ${index + 1}: `, value);
                }}
            />
        </div>
    )
}

export default Option;