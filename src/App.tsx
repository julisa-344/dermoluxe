import './App.css';
import Nav from './components/navBar';
import HomePage from './pages/HomePage';
import Footer from './components/footer';
import './theme.scss';

function App() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@300" rel="stylesheet" />
      <Nav />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;