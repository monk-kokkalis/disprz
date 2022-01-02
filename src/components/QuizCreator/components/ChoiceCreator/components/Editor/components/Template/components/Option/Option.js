import {useContext} from 'react';
import Style from './Option.module.scss';
import TextArea from 'elements/TextArea/TextArea';
// auxiliary
import className from 'auxiliary/class-name';
import constants from 'auxiliary/constants';
// provider
import {Context} from 'components/QuizCreator/context/Provider';
import {questionActions} from 'components/QuizCreator/context/reducers/questions/index'
// Snackbar
import {SnackbarContext} from 'components/Snackbar/SnackbarProvider';
function Option({option, index, choiceCreatorMode, targetQuestionIndex}) {
    const context = useContext(Context);
    const {questDispatch, questState} = context;
    const snackbar = useContext(SnackbarContext);
    const targetOptionIndex = index;
    const targetQuestion = questState.questions[targetQuestionIndex];
    const clickHandler = () => {
        if (choiceCreatorMode === constants.DELETE) {
            if (targetQuestion?.options.length > 2) {
                questDispatch({
                    type: questionActions.DELETE_OPTION,
                    payload: {targetQuestionIndex, targetOptionIndex}
                });
            } else {
                snackbar.show({text: 'Unable to delete option. Questions must have atleast 2 options'});
            }
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
                    questDispatch({
                        type: questionActions.EDIT_OPTION_TEXT,
                        payload: {
                            targetQuestionIndex,
                            optionIndex: targetOptionIndex,
                            text: value
                        }
                    });
                }}
            />
        </div>
    )
}

export default Option;