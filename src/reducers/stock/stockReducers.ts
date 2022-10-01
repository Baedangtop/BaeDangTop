import { CustomAction } from "../../util/interface/redux.interface";

const stockState = {
  page: 1,
  stockInfo: [],
};

export const CHANGE_START_PAGE = "CHANGE_START_PAGE";
export const CHANGE_END_PAGE = "CHANGE_END_PAGE";
export const CHANGE_MAX_START_PAGE = "CHANGE_MAX_START_PAGE";
export const CHANGE_MAX_END_PAGE = "CHANGE_MAX_END_PAGE";
export const CHANGE_PAGE = "CHANGE_PAGE";

export const stockReducer = (state = stockState, action: CustomAction) => {
  switch (action.type) {
    case CHANGE_START_PAGE:
      return state.page < 2
        ? state
        : {
            ...state,
            page: state.page - 5,
          };
    case CHANGE_END_PAGE:
      return state.page > 115
        ? state
        : {
            ...state,
            page: state.page + 5,
          };
    case CHANGE_MAX_START_PAGE:
      return {
        ...state,
        page: 1,
      };
    case CHANGE_MAX_END_PAGE:
      return {
        ...state,
        page: 116,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.data,
      };
    default:
      return state;
  }
};
