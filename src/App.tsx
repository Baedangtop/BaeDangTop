import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
