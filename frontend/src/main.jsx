import React from "react";
import ReactDOM from "react-dom/client";
import { Reset } from "styled-reset";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./GlobalStyle";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <ToastContainer />
  </React.StrictMode>
);
