import { combineReducers } from "redux";
import { CHANGE_MODAL_VISIBLE } from "./action-types";

const initialState = {
  visible: false,
  userData: null
};

export const modal = (state = initialState, action) => {
  if (action.type === CHANGE_MODAL_VISIBLE) {
    return {
      visible: !state.visible,
      userData: action.userData
    };
  }

  return state;
};

export const reducers = combineReducers({
  modal
});
