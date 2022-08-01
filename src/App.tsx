import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";

const App = () => {
  const { login } = useSelector((state: any) => state.loginReducer);
  return (
    <BrowserRouter>
      {!login ? (
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<div>register</div>}></Route>
          <Route path="*" element={<Login />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<div>home</div>}></Route>
          <Route path="/profile" element={<div>profile</div>}></Route>
          <Route path="*" element={<div>404</div>}></Route>
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
