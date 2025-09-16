import React from "react";
import Search from "./components/Search";

function App() {
  return (
    <div style={{ maxWidth: 900, margin: "24px auto", padding: 16 }}>
      <h1>GitHub User Search</h1>
      <p>Search for a user by exact username (Get User) or search keywords (Search).</p>
      <Search />
    </div>
  );
}

export default App;
