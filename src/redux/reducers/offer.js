import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    offersInfo: null,
    createAuctionError: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.GetMyOffers:
            return ({
                ...state,
                offersInfo: action.payload
            })
        case ActionTypes.CreateAuctionError:
            return ({
                ...state,
                createAuctionError: action.payload
            })
        default:
            return state;
    }
}