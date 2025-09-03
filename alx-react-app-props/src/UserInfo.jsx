import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const UserInfo = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h3>Basic Info</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserInfo;
