import {useContext, useEffect, useState} from 'react';
import {Context} from 'components/QuizCreator/context/Provider';
import Style from './ImageSection.module.scss';
import FileInput from 'elements/FileInput/FileInput';
import {questionActions} from 'components/QuizCreator/context/reducers/questions/index';
import useTargetQuestionIndex from '../../../../../../hooks/use-target-question-index';
function ImageSection() {
    const context = useContext(Context);
    const {questState, questDispatch} = context;
    const targetQuestionIndex = useTargetQuestionIndex();
    const targetQuestion = questState.questions[targetQuestionIndex];
    const [activeImage, setActiveImage] = useState({url: null, name: ''})

    useEffect(function updateActiveImage() {
        (async () => {
            if (targetQuestion && targetQuestion.image) {
                const readerPromise = new Promise((resolve) => {
                    const fileReader = new FileReader();
                    fileReader.onload = function() {
                        const url = fileReader.result;
                        resolve({
                            url,
                            name: targetQuestion.image.name
                        })
                    }
                    fileReader.readAsDataURL(targetQuestion.image);
                })
                setActiveImage(await readerPromise);
            } else {
                setActiveImage({url: null, name: ''});
            }
        })();
    }, [targetQuestion])

    const changeCallback = ({image}) => {
        questDispatch({
            type: questionActions.SET_QUESTION_IMAGE,
            payload: {targetQuestionIndex, image}
        })
    }

    return (
        <section className={Style.Main}>
            {activeImage.url ? (
                <>
                    <div className="preview--container">
                        <img src={activeImage.url} alt="" className="preview" />
                    </div>
                    <div className="name">{activeImage.name}</div>
                </>
                ) : null
            }
            <FileInput {...{changeCallback}} />
        </section>
    )
}

export default ImageSection;