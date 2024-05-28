import './App.css';
import Nav from './components/navBar';
import Footer from './components/footer';
import LoginSignup from './pages/LoginSignup';

function App() {

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@300" rel="stylesheet" />
      <Nav />
      <LoginSignup />
      <Footer />
    </>
  )
}

export default App
