import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const { login } = useSelector((state: any) => state.loginReducer);
  return (
    <BrowserRouter>
      {!login ? (
        <Routes>
          <Route path="/login" element={<div>login</div>}></Route>
          <Route path="/register" element={<div>register</div>}></Route>
          <Route path="*" element={<div>login</div>}></Route>
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
