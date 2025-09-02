import React, { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
  const user = useContext(UserContext);

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '2rem auto', maxWidth: '400px', textAlign: 'center' }}>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
}

export default UserProfile;
