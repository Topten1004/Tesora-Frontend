import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  itemInfo: "",
  items: "",
  filterItems: "",
  itemsByCatId: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GetItemViewItem:
      return {
        ...state,
        itemInfo: action.payload,
      };
    case ActionTypes.GetItems:
      return {
        ...state,
        items: action.payload,
      };
    case ActionTypes.GetSearchAssets:
      return {
        ...state,
        items: action.payload,
      };
    case ActionTypes.GetItemsByCategoryId:
      return ({
        ...state,
        itemsByCatId: action.payload
      })
    case ActionTypes.GetFilterItems:
      return {
        ...state,
        filterItems: action.payload,
      };
    default:
      return state;
  }
};
