import Style from './ChoiceCreator.module.scss';
// components
import Heading from './components/Heading/Heading';
function ChoiceCreator() {
    return (
        <div className={Style.Main}>
            <Heading />
            <div>Mode indicator here</div>
        </div>
    )
}

export default ChoiceCreator;