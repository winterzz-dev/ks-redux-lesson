import { CHANGE_MODAL_VISIBLE } from "./action-types";

export const showModalAction = record => {
  return {
    type: CHANGE_MODAL_VISIBLE,
    userData: record
  };
};
