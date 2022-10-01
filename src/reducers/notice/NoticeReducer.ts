import { CustomAction } from "../../util/interface/redux.interface";

const NoticeState = {
  item: [],
};

export const CHANGE_NOTICE = "CHANGE_NOTICE";
export const ADD_NOTICE = "ADD_NOTICE";
export const ADD_COMMENT = "ADD_COMMENT";

export const NoticeReducer = (state = NoticeState, action: CustomAction) => {
  switch (action.type) {
    case CHANGE_NOTICE:
      return {
        ...state,
        item: action.data,
      };
    case ADD_NOTICE:
      return {
        ...state,
        item: state.item.concat(action.data),
      };
    case ADD_COMMENT:
      return {
        ...state,
        item: state.item.map((v) =>
          v.id === action.data.id
            ? {
                ...v,
                comment: v.comment.concat({
                  image: action.data.image,
                  writing: action.data.writing,
                }),
              }
            : v
        ),
      };
    default:
      return state;
  }
};
