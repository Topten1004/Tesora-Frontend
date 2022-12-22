import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    collections: null,
    collectionInfo: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.GetMyCollectionViewModel:
            return ({
                ...state,
                collections: action.payload,
            })
        case ActionTypes.GetMyCollection:
            return ({
                ...state,
                collectionInfo: action.payload,
            })
        default:
            return state;
    }
}