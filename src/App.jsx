// src/App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // BrowserRouter로 직접 import
import Home from './pages/Home';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
import Lesson from './pages/Lesson';
import Learn from './pages/Learn';
import Admin from './pages/Admin';
import Code from './pages/Code';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/learn" element={<Learn />} />


        
        <Route path="/admin" element={<Admin />} />
        <Route path="/code/:id" element={<Code />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
