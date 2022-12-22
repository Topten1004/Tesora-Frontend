import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    collections : null,
    items : null,
    categories : null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ActionTypes.GetHomeViewModel :
            return({
                ...state,
                collections : action.payload.collections,
                items : action.payload.items,
                categories : action.payload.categories
            })
        default :
            return state;
    }
}