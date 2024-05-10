import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';

import './App.css';


const App = () => {
  return (
    <div className="app">
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/product/:id" element={<Product />} /> */}
        </Routes>
    </div>
  );
}

export default App;
