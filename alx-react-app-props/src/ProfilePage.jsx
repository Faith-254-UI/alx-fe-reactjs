import React from "react";
import UserProfile from "./UserProfile";
import UserInfo from "./UserInfo";

const ProfilePage = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <UserInfo />
      <UserProfile />
    </div>
  );
};

export default ProfilePage;
