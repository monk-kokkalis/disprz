import {useContext} from 'react';
import Style from './AddOption.module.scss';
// hooks
import useTargetQuestionIndex from '../../hooks/use-target-question-index';
// provider
import {Context} from '../../../../context/Provider';
import {questionActions} from '../../../../context/reducers/questions/index';
// Snackbar
import {SnackbarContext} from 'components/Snackbar/SnackbarProvider';
function AddOption() {
    const context = useContext(Context);
    const {questState, questDispatch} = context;
    const snackbar = useContext(SnackbarContext);
    const targetQuestionIndex = useTargetQuestionIndex();
    const targetQuestion = questState.questions[targetQuestionIndex];

    const clickHandler = () => {
        const optionsLength = targetQuestion.options.length;
        if (optionsLength < 6) {
            const value = `Option ${optionsLength + 1}`;
            questDispatch({
                type: questionActions.ADD_OPTION,
                payload: {targetQuestionIndex, value}
            });
        } else {
            snackbar.show({text: "Only a maximum of 6 options can be created for every question."})
        }
        
    }
    return targetQuestionIndex !== -1 ? (
        <button className={Style.Main} onClick={clickHandler}>Add</button>
    ) : null
}

export default AddOption;