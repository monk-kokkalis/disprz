import useTargetQuestionIndex from '../../hooks/use-target-question-index';
import SidebarButton from '../../../SidebarButton/SidebarButton';
import ButtonTemplate from '../../components/SidebarButtonTemplate/SidebarButtonTemplate';
import useSidebarButtonCallback from '../../../../hooks/use-sidebar-button-callback';
function Heading() {
    const buttonCallback = useSidebarButtonCallback({visible: false});
    const targetQuestionIndex = useTargetQuestionIndex();
    function Notice() {
        return <div>Select a question</div>
    }
    function HeadingText() {
        return ( 
            <h1>
                <span>Design question {targetQuestionIndex + 1}</span>
                <SidebarButton template={<ButtonTemplate />} callback={buttonCallback} />
            </h1>
        )
    }
    return targetQuestionIndex !== -1 ? <HeadingText /> : <Notice />
}

export default Heading;