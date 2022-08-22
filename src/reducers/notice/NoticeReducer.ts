import { CustomAction } from "../../util/interface/redux.interface";

const NoticeState = {
  item: [
    {
      date: "2022.07.27",
      image: null,
      title: "게시물 제목",
      description: "게시물 내용",
    },
    {
      date: "2022.07.27",
      image: null,
      title: "게시물 제목",
      description: "게시물 내용",
    },
  ],
  number: 0,
};

export const CHANGE_NOTICE = "CHANGE_NOTICE";
export const ADD_NOTICE = "ADD_NOTICE";

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
    default:
      return state;
  }
};
