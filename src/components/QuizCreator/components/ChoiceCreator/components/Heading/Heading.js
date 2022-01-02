import useTargetQuestionIndex from '../../hooks/use-target-question-index';
// import SidebarButton from '../../../SidebarButton/SidebarButton';
function Heading() {
    const targetQuestionIndex = useTargetQuestionIndex();
    function Notice() {
        return <div>Select a question</div>
    }
    function HeadingText() {
        return <h1>Design question {targetQuestionIndex + 1}</h1>
    }
    return targetQuestionIndex !== -1 ? <HeadingText /> : <Notice />
}

export default Heading;