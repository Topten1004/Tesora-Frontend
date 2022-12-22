import ActionTypes from "redux/actions/actionTypes";

const INITIAL_STATE = {
  isLogin: false,
  loginInfo: {},
};

export default function eventLoginInfo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.typeLoginInfo:
      return {
        ...state,
        isLogin: true,
        loginInfo: action.payload,
      };
    case ActionTypes.typeLogout:
      return {
        ...state,
        isLogin: false,
        loginInfo: {},
      };
    case ActionTypes.GetAuthenticated:
      return {
        ...state,
        isLogin: action.payload
      }
    default:
      return { ...state };
  }
}
