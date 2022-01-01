import React, {useEffect, useRef, useCallback} from 'react';
import Style from './Snackbar.module.scss';

function Snackbar({context}) {
    const snackbarRef = useRef();
    const {text, timeStamp} = context;

    const hideSnackbar = useCallback((delay) => {
        setTimeout(() => {
            snackbarRef.current.style.cssText = "transform: translateX(-50%) scale(0.8); opacity: 0; z-index: -1;";
        }, delay);
    }, [])

    useEffect(function show() {
        if (timeStamp !== 0) {
            hideSnackbar(10);
            setTimeout(() => {
                snackbarRef.current.style.cssText = "transform: translateX(-50%) scale(1); opacity: 1; z-index: 15;";
            }, 350)
            hideSnackbar(3000);
        }
    }, [timeStamp, hideSnackbar]);

    return (
        <div className={Style.Main} ref={snackbarRef}>
            <div className="text">
                {text}
            </div>
        </div>
    )
}

export default Snackbar;