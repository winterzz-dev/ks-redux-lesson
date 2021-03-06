import { combineReducers } from "redux";
import { CHANGE_MODAL_VISIBLE, TOGGLE_USER_BLOCK } from "./action-types";

const modalInitialState = {
  visible: false,
  userData: null
};

const blockedInitialState = {
  users: []
};

export const modal = (state = modalInitialState, action) => {
  if (action.type === CHANGE_MODAL_VISIBLE) {
    return {
      visible: !state.visible,
      userData: action.userData
    };
  }

  return state;
};

export const blockedUsers = (state = blockedInitialState, action) => {
  if (action.type === TOGGLE_USER_BLOCK) {
    if (state.users.indexOf(action.userId) === -1) {
      return {
        users: [...state.users].concat([action.userId])
      };
    } else {
      const filtredUsers = state.users.filter(item => {
        return item !== action.userId;
      });
      return {
        users: filtredUsers
      };
    }
  }

  return state;
};

export const reducers = combineReducers({
  modal,
  blockedUsers
});
