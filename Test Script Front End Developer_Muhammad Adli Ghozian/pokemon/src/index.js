import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

// axios.defaults.withCredentials = true;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>
);
