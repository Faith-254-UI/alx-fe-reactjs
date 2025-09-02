// UserDetails.jsx
import React, { useContext } from "react";
import UserContext from "../UserContext";

function UserDetails() {
  const user = useContext(UserContext);

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
}

export default UserDetails;