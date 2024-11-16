// src/pages/Lesson.js
import React from 'react';
import { X } from "@phosphor-icons/react";

const Lesson = () => {
  return (
    <div className="relative flex flex-col items-center justify-center max-w-96 h-screen mx-auto">
      <div className={`
        w-full h-48
      `}>
        <div className={`flex items-center h-12 px-4`}>
            <X size={24} color="#083344" />
            <div className="flex w-full h-4 ml-5 rounded-xl bg-cyan-100">
              <div 
                className={`h-full rounded-xl bg-cyan-400 transition-all duration-500 ease-in-out`}
                style={{ width: `${(1 / 10) * 100}%` }}
              ></div>
            </div>
          </div>
      </div>
    </div>
      
    
  );
};

export default Lesson;
