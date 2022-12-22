import ActionTypes from "./actionTypes"

export const ProfileCleanup = () => async (dispatch) => {
    try {
        dispatch({
            type: ActionTypes.ProfileCleanup,
            payload: null
        })
    } catch (err) {

    }
}

export const FavouriteItemsCleanup = () => async (dispatch) => {
    try {
        dispatch({
            type: ActionTypes.GetMyFavorites,
            payload: null
        })
    } catch (err) {

    }
}

export const ItemViewCleanup = () => async (dispatch) => {
    try {
        dispatch({
            type: ActionTypes.GetItemViewItem,
            payload: ''
        })
    } catch (err) {

    }
}

export const FilterItemsCleanup = () => async (dispatch) => {
    try {
        dispatch({
            type: ActionTypes.GetFilterItems,
            payload: ''
        })
    } catch (err) {

    }
}