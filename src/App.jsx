// src/App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // BrowserRouter로 직접 import
import Home from './pages/Home';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
import Lesson from './pages/Lesson';
import Learn from './pages/Learn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
