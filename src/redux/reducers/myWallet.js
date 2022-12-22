import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    walletInfo: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.ReceiveCoins:
            return ({
                ...state,
                walletInfo: action.payload,
            })
        default:
            return state;
    }
}