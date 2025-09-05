import UserDetails from './UserDetails';

function UserInfo() { // Remove userData prop
  return <UserDetails />; // No need to pass userData prop here anymore
}

export default UserInfo;