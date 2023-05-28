import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import EmailContext from "./contexts/EmailsContext";
import AuthContext from "./contexts/AuthContext";
import Toastify from "./components/Toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <EmailContext>
      <AuthContext>
        <Toastify />
        <App />
      </AuthContext>
    </EmailContext>
  </BrowserRouter>
);
