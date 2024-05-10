import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import ProductForm from './Components/ProductForm/ProductForm';



const App = () => {
  return (
    <div className="app">
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/product/:id" element={<Product />} /> */}
            <Route path="/product/create" element={<ProductForm />} />
            <Route path='*' element='404 Not Found' />
        </Routes>
    </div>
  );
}

export default App;
