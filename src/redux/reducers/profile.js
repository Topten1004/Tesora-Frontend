import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    userInfo: null,
    userInfoById: null,
    favouriteInfo: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.GetProfileViewModel:
            return ({
                ...state,
                userInfo: action.payload,
            })
        case ActionTypes.GetProfileById:
            return ({
                ...state,
                userInfoById: action.payload,
            })
        case ActionTypes.GetMyFavorites:
            return ({
                ...state,
                favouriteInfo: action.payload,
            })
        case ActionTypes.ProfileCleanup:
            return ({
                ...state,
                userInfo: null,
                userInfoById: null,
            })
        default:
            return state;
    }
}