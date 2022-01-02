import {useRef} from 'react';
import Style from './QuestionSelector.module.scss';
// components
import AddQuestion from './components/AddQuestion/AddQuestion';
import DeleteQuestion from './components/DeleteQuestion/DeleteQuestion';
import ModeIndicator from './components/ModeIndicator/ModeIndicator';
import QuestionList from './components/QuestionList/QuestionList';
import SidebarButton from '../SidebarButton/SidebarButton';
import ButtonTemplate from './components/SidebarButtonControls/Template';
// hooks
import useRefSetter from './hooks/use-ref-setter';
function QuestionSelector() {
    const questionSelectorRef = useRef();
    useRefSetter({questionSelectorRef});
    return (
        <div className={Style.Main} ref={questionSelectorRef}>
            <h1 className="heading">
                <span>Select your questions</span>
                <SidebarButton template={<ButtonTemplate />} />
            </h1>
            <ModeIndicator />
            <section className="questions">
                <QuestionList />
            </section>
            <section className="buttons">
                <AddQuestion />
                <DeleteQuestion />
            </section>
        </div>
    )
}

export default QuestionSelector;