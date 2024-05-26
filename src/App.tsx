import './App.css';
import HomePage from './pages/HomePage';
import'./theme.scss';
import Nav from './components/navBar';
import Footer from './components/footer';
import LoginSignup from './pages/LoginSignup';

function App() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@300" rel="stylesheet" />
      <Nav />
      <HomePage />
      <Footer/>
    </>
  )
}

export default App;