import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { InputContextProvider } from "./context/InputContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <InputContextProvider>
      <App />
    </InputContextProvider>
  </React.StrictMode>
);
