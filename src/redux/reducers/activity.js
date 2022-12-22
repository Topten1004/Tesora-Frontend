import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    histories : null,
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ActionTypes.GetActivityViewModel :
            return({
                ...state,
                histories : action.payload.histories,
            })
        default :
            return state;
    }
}