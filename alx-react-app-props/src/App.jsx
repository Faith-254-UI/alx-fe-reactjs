import React from "react";
import UserContext from "./UserContext";
import ProfilePage from "./ProfilePage";

function App() {
  const user = { name: "Faith", email: "faith@example.com" };

  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>Welcome to Context API Example</h1>
        <ProfilePage />
      </div>
    </UserContext.Provider>
  );
}

export default App;
