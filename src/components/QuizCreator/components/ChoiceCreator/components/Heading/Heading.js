import useTargetQuestionIndex from '../../hooks/use-target-question-index';
import SidebarButton from '../../../SidebarButton/SidebarButton';
import ButtonTemplate from '../../components/SidebarButtonTemplate/SidebarButtonTemplate';
function Heading() {
    const targetQuestionIndex = useTargetQuestionIndex();
    function Notice() {
        return <div>Select a question</div>
    }
    function HeadingText() {
        return ( 
            <h1>
                <span>Design question {targetQuestionIndex + 1}</span>
                <SidebarButton template={<ButtonTemplate />} />
            </h1>
        )
    }
    return targetQuestionIndex !== -1 ? <HeadingText /> : <Notice />
}

export default Heading;