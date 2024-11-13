// src/pages/Register.js
import React from 'react';
import Header from '../components/component/Header';
import Main from '../components/register/Main';

const Register = () => {
  return (
    <div 
      className="
        flex flex-col items-center justify-center 
        h-screen 
        mx-auto
      "
      style={{ paddingTop: '70px' }}
    >
      <Header />
      <Main />
    </div>
    
  );
};

export default Register;
