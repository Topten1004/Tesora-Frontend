import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    collections: null,
    categories: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.GetMarketPlaceViewModel:
            return ({
                ...state,
                collections: action.payload.collections,
                categories: action.payload.categories,
            })
        default:
            return state;
    }
}