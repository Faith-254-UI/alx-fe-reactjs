import UserInfo from './UserInfo';

function ProfilePage() { // Remove userData prop
  return <UserInfo />; // No need to pass userData prop here anymore
}

export default ProfilePage;