import {useCallback, useContext, useEffect, useState} from 'react';
import {Context} from '../../../context/Provider';
function useResponsiveWidth() {
    const context = useContext(Context);
    const {questionSelectorRef} = context.questState;
    const [questionSelectorWidth, setQuestionSelectorWidth] = useState('auto');
    const resizeCallback = useCallback(() => {
            const questRect = questionSelectorRef?.current?.getBoundingClientRect();
            if (questRect && window.innerWidth <= 767) {
                setQuestionSelectorWidth(`${questRect.width}px`);
            } else {
                setQuestionSelectorWidth('auto');
            }
    }, [questionSelectorRef])

    useEffect(function initializeWidth() {
        resizeCallback();
    }, [resizeCallback])

    useEffect(function trackWindowWidth() {
        window.addEventListener('resize', resizeCallback);
        return function removeResizeListener() {
            window.removeEventListener('resize', resizeCallback);
        }
    }, [resizeCallback])

    return questionSelectorWidth;
}

export default useResponsiveWidth;