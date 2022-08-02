import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/Profile";

const Home = lazy(() => import("./pages/home/Home"));
const Login = lazy(() => import("./pages/login/Login"));
const Register = lazy(() => import("./pages/register/Register"));

const App = () => {
  const { login } = useSelector((state: any) => state.loginReducer);

  return (
    <BrowserRouter>
      <Routes>
        {!login ? (
          <>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="*" element={<Login />}></Route>
          </>
        ) : (
          <>
            <Route path="/" element={<Home />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="*" element={<div>404</div>}></Route>
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
