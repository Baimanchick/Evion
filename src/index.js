import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import EmailContext from "./contexts/EmailsContext";
import AuthContext from "./contexts/AuthContext";
import BlogsContext from "./contexts/BlogsContext";
import Toastify from "./components/Toastify";
import PhonesContext from "./contexts/PhonesContext";
import LocationContext from "./contexts/LocationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <EmailContext>
      <AuthContext>
        <BlogsContext>
          <PhonesContext>
            <LocationContext>
              <StrictMode>
                <App />
                <Toastify />
              </StrictMode>
            </LocationContext>
          </PhonesContext>
        </BlogsContext>
      </AuthContext>
    </EmailContext>
  </BrowserRouter>
);
