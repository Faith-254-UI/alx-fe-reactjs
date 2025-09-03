import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./UserContext"; // Import the provider

ReactDOM.createRoot(document.getElementById("root")).render(
  // Wrap App inside UserProvider
  <UserProvider>
    <App />
  </UserProvider>
);
