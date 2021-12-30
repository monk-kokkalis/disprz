import {useContext} from 'react';
import Style from './DeleteQuestion.module.scss';
// provider
import {Context} from '../../../../context/Provider';
import {questionActions} from '../../../../context/reducers/questions/index';
function DeleteQuestion() {
    const context = useContext(Context);
    const {questState, questDispatch} = context;
    const clickHandler = () => {
        
    }
    return (
        <button className={Style.Main} onClick={clickHandler}>Delete</button>
    )
}

export default DeleteQuestion;