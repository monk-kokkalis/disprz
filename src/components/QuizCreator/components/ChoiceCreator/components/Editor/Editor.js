import {useContext} from 'react';
import {Context} from '../../../../context/Provider';
import TextArea from 'elements/TextArea/TextArea';
function Editor() {
    const context = useContext(Context);
    const {activeQuestion, questions} = context.questState;
    return (
        <div>
            <TextArea
                label="Question"
                value={activeQuestion.name}
                changeCallback={() => {

                }}
            />
        </div>
    )
}

export default Editor;