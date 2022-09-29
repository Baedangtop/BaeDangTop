import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Payment from "./pages/payment/Payment";

const App = () => {
  const { login } = useSelector((state: any) => state.loginReducer);

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
