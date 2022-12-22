import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    collection: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.GetEditCollection:
            return ({
                ...state,
                collection: action.payload,
            })
        default:
            return state;
    }
}