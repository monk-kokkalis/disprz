import {useContext, useEffect, useState} from 'react';
import {Context} from '../../../context/Provider';
function useLeftOffset({width}) {
    const context = useContext(Context);
    const {sideMenuVisible} = context.questState;
    const [leftOffset, setLeftOffset] = useState('0px');
    useEffect(function() {
        if (sideMenuVisible) {
            setLeftOffset('0px');
        } else {
            setLeftOffset(`-${width}`);
        }
    }, [sideMenuVisible, width]);

    return leftOffset
}

export default useLeftOffset;