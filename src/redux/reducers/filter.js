import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    filterSortBy: 'MostRecent',
    filterPrice: 'Any',
    filterCategory: 0,
    filterCurrency: 'ETH',
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.SetFilterSortBy:
            return ({
                ...state,
                filterSortBy: action.payload,
            })
        case ActionTypes.SetFilterPrice:
            return ({
                ...state,
                filterPrice: action.payload,
            })
        case ActionTypes.SetFilterCategory:
            return ({
                ...state,
                filterCategory: action.payload,
            })
        case ActionTypes.SetFilterCurrency:
            return ({
                ...state,
                filterCurrency: action.payload,
            })
        default:
            return state;
    }
}