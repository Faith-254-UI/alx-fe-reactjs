import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

// Import the context
import UserContext from './UserContext';

function App() {
  const userData = { name: "Alice", age: 25, bio: "Loves hiking and photography" };

  return (
    <div>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Counter />  {/* ✅ Counter component added */}
      <Footer />

      {/* Wrap UserProfile with context */}
      <UserContext.Provider value={userData}>
        <UserProfile />
      </UserContext.Provider>
    </div>
  );
}

export default App;
