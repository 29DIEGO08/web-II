import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes/routes";
import "./index.css"; // Aquí cargas Tailwind

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);