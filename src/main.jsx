import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@/styles.css";

// We also need to include the Tailwind CSS base styles, but they are already included via @tailwindcss/vite in vite.config.ts
// and the styles.css imports the Tailwind base.

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);