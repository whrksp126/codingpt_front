// src/components/home/main
import React from 'react';

import { motion } from "framer-motion";

const Btn = ({ text, color='cyan', onClick=()=>{}, disabled }) => {
  let buttonColorClass;
  if(color === 'cyan'){
    buttonColorClass = 'bg-cyan-500 text-white active:bg-cyan-600 border-b-cyan-100';
  }
  if(color === 'white'){
    buttonColorClass = 'bg-white text-cyan-500 active:bg-gray-50 ';
  }
  return (
    <div className="
      flex 
      w-full h-12
    ">
      <motion.button
        className={`
          h-12 w-full
          border-b-4 rounded-xl 
          ${buttonColorClass} font-semibold
          
          active:h-11 
          active:mt-1 
          active:border-b-0
          select-none
          ${disabled ? 'border-b-gray-100 bg-gray-200 text-gray-300 cursor-not-allowed pointer-events-none' : ``}

        `}
        disabled={disabled} 
        onClick={onClick}
      >
        {text}
      </motion.button>

    </div>
  );
}

export default Btn;