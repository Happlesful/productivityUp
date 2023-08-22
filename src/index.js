import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SharedStateProvider, SharedStateContext } from "./SharedStateContext";

ReactDOM.render(
  <SharedStateProvider>
    <App />
  </SharedStateProvider>,
  document.getElementById("root")
);
