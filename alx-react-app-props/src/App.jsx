// src/App.jsx
import UserContext from './UserContext';
import UserProfile from './UserProfile';

const userData = {
  name: "Jane Doe",
  email: "jane.doe@example.com"
};

function App() {
  return (
    <UserContext.Provider value={userData}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;
