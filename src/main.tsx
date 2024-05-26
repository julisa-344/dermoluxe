import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import GalleryPage from './pages/GalleryPage';
import RegisterPage from './pages/RegisterPage';
import Promociones from './pages/PromocionesPage';
import './index.css';
import './theme.scss';
import ProductDetailPage from './pages/ProductDetailPage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<GalleryPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/promotions" element={<Promociones/>} />
        <Route path="/detail_product" element={<ProductDetailPage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)