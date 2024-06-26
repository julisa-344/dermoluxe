import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);

export default Router;