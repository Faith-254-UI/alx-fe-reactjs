import React, { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
  const user = useContext(UserContext);

  return (
    <div style={{
      border: "2px solid blue",
      padding: "10px",
      margin: "10px",
      color: "blue",
      borderRadius: "8px",
      maxWidth: "400px"
    }}>
      <span>Name: {user.name}</span>
      <span>Age: {user.age}</span>
      <span>Bio: {user.bio}</span>
    </div>
  );
}

export default UserProfile;
