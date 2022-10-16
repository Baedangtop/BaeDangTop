import React, { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";

import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Payment from "./pages/payment/Payment";
import AuthApi from "./core/apis/auth/Auth.api";
import { LOGIN } from "./reducers/login/loginAction";

const App = () => {
  const { login } = useSelector((state: any) => state.loginReducer);
  const dispatch = useDispatch();

  const check = async () => {
    const bool = await AuthApi.loginCheck();
    if (bool.bool) {
      dispatch({
        type: LOGIN,
        data: bool.user,
      });
    }
  };

  const location = useLocation();

  useEffect(() => {
    check();
  }, [location.pathname]);

  return (
    <>
      {!login ? (
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="*" element={<Login />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="*" element={<div>404</div>}></Route>
        </Routes>
      )}
    </>
  );
};

export default App;
