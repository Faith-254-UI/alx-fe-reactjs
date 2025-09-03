import React, { createContext, useState } from "react";

// 1. Create the context object
export const UserContext = createContext();

// 2. Create a provider component
export const UserProvider = ({ children }) => {
  // This state holds your user info
  const [user, setUser] = useState({
    name: "Niva Faith",
    email: "niva@example.com",
    age: 21,
  });

  // The provider wraps child components and provides the context value
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
