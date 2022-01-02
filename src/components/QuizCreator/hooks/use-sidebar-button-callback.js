import {useContext, useCallback} from 'react';
import {Context} from '../context/Provider';
import {questionActions} from '../context/reducers/questions/index';
function useSidebarButtonCallback({visible}) {
    const context = useContext(Context);
    const {questDispatch} = context;
    const buttonCallback = useCallback(() => {
        questDispatch({
            type: questionActions.SET_SIDE_MENU_VISIBLE,
            payload: {sideMenuVisible: visible}
        })
    }, [questDispatch, visible]);

    return buttonCallback;
}

export default useSidebarButtonCallback;