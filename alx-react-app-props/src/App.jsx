import ProfilePage from './ProfilePage';
import { UserContext } from './UserContext'; // Import UserContext

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}> {/* Wrap ProfilePage with UserContext.Provider */}
      <ProfilePage /> {/* No need to pass userData prop here anymore */}
    </UserContext.Provider>
  );
}

export default App;