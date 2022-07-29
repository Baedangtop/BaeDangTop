import React from "react";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { loginReducer } from "../reducers/login/loginReducer";

const rootReducer = combineReducers({
  loginReducer,
});
const store = createStore(rootReducer);

const ConfigureStore = ({ children }: any) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ConfigureStore;
