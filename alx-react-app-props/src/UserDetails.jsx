// src/UserDetails.jsx
import React, { useContext } from "react";
import UserContext from "./UserContext";

const UserDetails = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default UserDetails;
