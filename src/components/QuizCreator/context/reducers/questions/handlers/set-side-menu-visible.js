import update from 'immutability-helper';
function setSideMenuVisible({state, action}) {
    return update(state, {
        sideMenuVisible: {
            $set: action.payload.sideMenuVisible
        }
    })
}

export default setSideMenuVisible;