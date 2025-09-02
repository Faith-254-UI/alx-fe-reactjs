import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';
import UserContext from './UserContext';

function App() {
  const userData = { name: "Alice", age: 25, bio: "Loves hiking and photography" };

  return (
    <div>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Counter />
      <Footer />

      <UserContext.Provider value={userData}>
        <UserProfile />
      </UserContext.Provider>
    </div>
  );
}

export default App;
