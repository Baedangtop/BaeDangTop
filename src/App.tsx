import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCheckLogin } from "./core/hooks/useLoginCheck";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

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
            {/* {useCheckLogin()} */}
          </>
        ) : (
          <>
            <Route path="/" element={<Home />}></Route>
            <Route path="/profile" element={<div>profile</div>}></Route>
            <Route path="*" element={<div>404</div>}></Route>
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
