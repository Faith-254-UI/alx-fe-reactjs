import React from 'react';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

// Import Context and ProfilePage for the new task
import UserContext from './UserContext';
import ProfilePage from './components/ProfilePage';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <div>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Counter />  {/* ✅ Counter component added */}
      
      {/* Context API example */}
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>

      <Footer />
      <UserProfile 
        name="Alice" 
        age={25} 
        bio="Loves hiking and photography" 
      />
    </div>
  );
}

export default App;
