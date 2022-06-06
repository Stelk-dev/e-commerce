import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { ProductPage } from './pages/product_page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/product/:titleWithNoSpace' element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
