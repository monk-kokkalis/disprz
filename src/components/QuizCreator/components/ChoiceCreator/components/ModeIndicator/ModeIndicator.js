import {useContext} from 'react';
import Style from './ModeIndicator.module.scss';
import {Context} from '../../../../context/Provider';
import constants from 'auxiliary/constants';
function ModeIndicator() {
    const context = useContext(Context);
    const {questState} = context;
    return (
        <div className={Style.Main}>
            {questState.choiceCreatorMode === constants.DELETE ? 'Delete mode active' : ''}
        </div>
    )
}

export default ModeIndicator;