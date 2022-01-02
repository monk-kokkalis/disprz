import {useContext, useCallback} from 'react';
import {Context} from '../../../context/Provider';
import {questionActions} from '../../../context/reducers/questions/index';
function useSidebarButtonCallback() {
    const context = useContext(Context);
    const {questDispatch} = context;
    const buttonCallback = useCallback(() => {
        questDispatch({
            type: questionActions.SET_SIDE_MENU_VISIBLE,
            payload: {sideMenuVisible: true}
        })
    }, [questDispatch]);

    return buttonCallback;
}

export default useSidebarButtonCallback;