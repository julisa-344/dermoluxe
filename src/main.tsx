import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

import LoginSignup from "./pages/LoginSignup";
import GalleryPage from "./pages/GalleryPage";
import Promociones from "./pages/PromocionesPage";
import ProductDetailPage from "./pages/ProductDetailPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/LoginSignup" element={<LoginSignup />} />
        <Route path="/shop" element={<GalleryPage />} />
        <Route path="/promotions" element={<Promociones/>} />
        <Route path="/detail_product" element={<ProductDetailPage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);