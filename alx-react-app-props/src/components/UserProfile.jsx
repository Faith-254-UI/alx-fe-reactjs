import React, { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
  const user = useContext(UserContext);

  return (
    <div style={{ border: "2px solid blue", padding: "10px", margin: "10px", textAlign: "center" }}>
      <span style={{ color: "blue" }}>Name: {user.name}</span><br />
      <span style={{ color: "blue" }}>Age: {user.age}</span><br />
      <span style={{ color: "blue" }}>Bio: {user.bio}</span>
    </div>
  );
}

export default UserProfile;
