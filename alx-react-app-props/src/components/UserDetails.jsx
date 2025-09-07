﻿import { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Age: {userData.age}</p>
      <p>Bio: {userData.bio}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
