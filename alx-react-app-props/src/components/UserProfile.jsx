import { createContext, useContext, useState } from 'react';

// Create a new context for user data.
// This is what we will use to provide and consume data.
const UserContext = createContext(null);

// The UserDetails component now consumes the context directly using the useContext hook.
// This eliminates the need for it to receive userData as a prop.
function UserDetails() {
  const userData = useContext(UserContext);

  if (!userData) {
    // This check is important to prevent errors if the context value is null.
    return <div className="text-gray-500">Loading user data...</div>;
  }
  
  return (
    <div className="space-y-2">
      <p className="text-lg">
        <span className="font-semibold text-gray-700">Name:</span> {userData.name}
      </p>
      <p className="text-lg">
        <span className="font-semibold text-gray-700">Email:</span> {userData.email}
      </p>
    </div>
  );
}

// The UserInfo component is now a simple wrapper.
// It no longer receives props, but still renders its child component.
function UserInfo() {
  return <UserDetails />;
}

// The ProfilePage component is also a simple wrapper.
// It renders its child component without any props.
function ProfilePage() {
  return <UserInfo />;
}

// The main App component provides the user data via the context provider.
// This is the source of truth for the user data in the application.
function App() {
  const [userData] = useState({ name: "Jane Doe", email: "jane.doe@example.com" });

  return (
    <UserContext.Provider value={userData}>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm text-center">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">User Profile</h1>
          <ProfilePage />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
