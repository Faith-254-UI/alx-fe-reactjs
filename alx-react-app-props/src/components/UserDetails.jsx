// src/components/UserDetails.jsx
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>{userData.email}</p>
      <p>{userData.role}</p>
    </div>
  );
}

export default UserDetails;
