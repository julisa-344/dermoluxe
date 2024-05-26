import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

import GalleryPage from "./pages/GalleryPage";
import RegisterPage from "./pages/RegisterPage";
import Promociones from "./pages/PromocionesPage";
import ProductDetailPage from "./pages/ProductDetailPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* Asegúrate de reemplazar estos componentes con los tuyos */}
        <Route path="/shop" element={<GalleryPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/promotions" element={<Promociones/>} />
        <Route path="/detail_product" element={<ProductDetailPage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);