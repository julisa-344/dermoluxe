import './App.css';
import'./theme.scss';

import Nav from './components/navBar';
import Footer from './components/footer';
// import RegisterPage from './pages/RegisterPage';
import GalleryPage from './pages/GalleryPage';
function App() {

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@300" rel="stylesheet" />
      <Nav />
      <GalleryPage />
      <Footer />

    </>
  )
}

export default App
