import React, { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
  const user = useContext(UserContext);

  return (
    <div
      style={{
        border: '2px solid blue',
        padding: '10px',
        margin: '10px auto',
        maxWidth: '400px',
        textAlign: 'center',
        color: 'blue',
      }}
    >
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Bio: {user.bio}</p>
      <span>Profile Section</span>
    </div>
  );
}

export default UserProfile;
