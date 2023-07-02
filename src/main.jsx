import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import './main.css'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <div className="max-w-7xl mx-auto"><App></App></div>
        </div>
        </div>
  </React.StrictMode>
);