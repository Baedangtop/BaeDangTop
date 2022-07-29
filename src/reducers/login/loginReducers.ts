import { CustomAction } from "../../util/interface/redux.interface";
import { loginState } from "./loginState";

export const loginReducer = (state = loginState, action: CustomAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
