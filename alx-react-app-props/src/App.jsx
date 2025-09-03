// src/App.jsx
import React from "react";
import ProfilePage from "./ProfilePage";
import UserContext from "./UserContext";

function App() {
  const userData = {
    name: "Niva Faith",
    email: "niva@example.com",
    age: 21,
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
