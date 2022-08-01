import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import "./style.css";

import App from "./App";
import ConfigureStore from "./store/configureStore";
import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigureStore>
    <ThemeProvider theme={theme.light}>
      <App />
    </ThemeProvider>
  </ConfigureStore>
);

export default App;
