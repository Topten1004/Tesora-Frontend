import ActionTypes from "./actionTypes";

export const actionLoginInfo = (type) => async (dispatch) => {
  try {
    dispatch({
      type: ActionTypes.typeLoginInfo,
      payload: type,
    });
  } catch (err) {
    console.log(err);
  }
};

export const actionLogout = () => async (dispatch) => {
  try {
    dispatch({
      type: ActionTypes.typeLogout,
      payload: {},
    });
  } catch (err) {
    console.log(err);
  }
};
