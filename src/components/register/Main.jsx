// src/components/register/main
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageCard from './LanguageCard';

import jsImage from '../../assets/images/js.png'; 
import pythonImage from '../../assets/images/python.png'; 

const Main = () => {
  const navigate = useNavigate();
  const handleLanguageClick = () => {
    navigate('/welcome');
  };
  return (
    <div className="
      flex flex-col items-center justify-center
      h-screen
    ">
      <h2 className="
        flex flex-1 items-center justify-center
        mb-4
        text-2xl font-bold text-cyan-900 text-center
        select-none
      ">
        배우고 싶은 언어는...
      </h2>
      <div 
        className="
          flex gap-3 
        "
        style={{ flex: "2" }}
      >
        <LanguageCard onClick={handleLanguageClick} img={jsImage} language="JavaScript" learner="142" />
        <LanguageCard img={pythonImage} language="python" learner="249" />
      </div>
    </div>
  )
}

export default Main;