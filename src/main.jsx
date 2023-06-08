import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CrudProvider } from "./context/CrudContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CrudProvider>
        <App />
      </CrudProvider>
    </BrowserRouter>
  </React.StrictMode>
);
