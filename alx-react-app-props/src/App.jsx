// src/App.jsx
import UserContext from './contexts/UserContext';
import ProfilePage from './components/ProfilePage';

const userData = {
  name: 'NIVA',
  email: 'niva@example.com',
  role: 'Frontend Dev',
};

function App() {
  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
