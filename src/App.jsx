// src/App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // BrowserRouter로 직접 import
import Home from './pages/Home';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
// import Lesson from './pages/Lesson'; // 주석처리: 최상위 레벨 코드 실행 방지
import Learn from './pages/Learn';
import Execute from './pages/Execute';

import Curriculums from './pages/Curriculums';
import Curriculum from './pages/Curriculum';
import Sections from './pages/Sections';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* 루트 */}
        <Route path="/register" element={<Register />} /> 
        <Route path="/welcome" element={<Welcome />} /> 
        {/* <Route path="/lesson" element={<Lesson />} />  */}
        <Route path="/learn" element={<Learn />} /> 

        <Route path="/curriculums" element={<Curriculums />} /> {/* 커리큘럼 리스트 페이지 */}
        <Route path="/sections" element={<Sections />} /> {/* 섹션 리스트 페이지 */}
        <Route path="/curriculum" element={<Curriculum />} /> {/* 커리큘럼 페이지 */}
        {/* <Route path="/lesson" element={<Lesson />} /> 레슨 페이지 - 주석처리: 최상위 레벨 코드 실행 방지 */}




        
        <Route path="/execute" element={<Execute />} /> {/* 코드 실행 페이지 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
