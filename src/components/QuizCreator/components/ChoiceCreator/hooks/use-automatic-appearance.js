import {useContext, useEffect} from 'react';
import {Context} from '../../../context/Provider';
import {questionActions} from '../../../context/reducers/questions/index';
function useAutomaticAppearance() {
    const context = useContext(Context);
    const {questState, questDispatch} = context;
    const {activeQuestion} = questState;

    useEffect(function appear() {
        if (window.innerWidth <= 767) {
            questDispatch({
                type: questionActions.SET_SIDE_MENU_VISIBLE,
                payload: {sideMenuVisible: true}
            })
        }
    }, [activeQuestion, questDispatch])

    return undefined
}

export default useAutomaticAppearance;