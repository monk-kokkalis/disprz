import Style from './ChoiceCreator.module.scss';
// components
import AddOption from './components/AddOption/AddOption';
import DeleteOption from './components/DeleteOption/DeleteOption';
import Editor from './components/Editor/Editor';
import Heading from './components/Heading/Heading';
import ModeIndicator from './components/ModeIndicator/ModeIndicator';
// hooks
import useResponsiveWidth from './hooks/use-responsive-width';
import useLeftOffset from './hooks/use-left-offset';
function ChoiceCreator() {
    const width = useResponsiveWidth();
    const left = useLeftOffset({width});
    return (
        <div className={Style.Main} style={{width, left}}>
            <Heading />
            <ModeIndicator />
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