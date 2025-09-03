import React, { useContext } from 'react';
import UserContext from '../UserContext';

function UserDetails() {
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
      <p>Email: {user.email}</p>
      <span>Profile Details</span>
    </div>
  );
}

export default UserDetails;
