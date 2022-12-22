import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    collection : null,
    items : null,
    categories : null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ActionTypes.GetCollectionViewDetail :
            return({
                ...state,
                collection : action.payload.collection,
                items : action.payload.items,
                categories : action.payload.categories
            })
        default :
            return state;
    }
}