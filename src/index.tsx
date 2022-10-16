import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import "./style.css";

import App from "./App";
import ConfigureStore from "./store/configureStore";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigureStore>
    <ThemeProvider theme={theme.light}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </ConfigureStore>
);

export default App;
