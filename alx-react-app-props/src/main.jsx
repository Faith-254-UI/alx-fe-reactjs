import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./UserContext";

// Wrap App with UserProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <App />
  </UserProvider>
);
