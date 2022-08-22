import React from "react";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { loginReducer } from "../reducers/login/loginReducers";
import { stockReducer } from "../reducers/stock/stockReducers";
import { NoticeReducer } from "../reducers/notice/NoticeReducer";

const rootReducer = combineReducers({
  loginReducer,
  stockReducer,
  NoticeReducer,
});
const store = createStore(rootReducer);

const ConfigureStore = ({ children }: any) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ConfigureStore;
