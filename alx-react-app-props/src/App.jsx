import React from 'react';
import UserContext from './UserContext';
import UserProfile from './UserProfile';

const userData = {
  name: 'NIVA',
  email: 'niva@example.com',
};

function App() {
  return (
    <UserContext.Provider value={userData}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;
