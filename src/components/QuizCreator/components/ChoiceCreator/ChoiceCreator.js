import Style from './ChoiceCreator.module.scss';
// components
import AddOption from './components/AddOption/AddOption';
import DeleteOption from './components/DeleteOption/DeleteOption';
import Heading from './components/Heading/Heading';
import Editor from './components/Editor/Editor';
function ChoiceCreator() {
    return (
        <div className={Style.Main}>
            <Heading />
            <div>Mode indicator here</div>
            <section className="options">
                <Editor />
            </section>
            <section className="buttons">
                <AddOption />
                <DeleteOption />
            </section>
        </div>
    )
}

export default ChoiceCreator;