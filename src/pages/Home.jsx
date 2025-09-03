// src/pages/Home.js
import React from 'react';
import Main from '../components/home/Main';
import Header from '../components/home/Header';

const Home = () => {
  return (
    <div className="
      flex flex-col items-center justify-center
      mx-auto
    ">
      <Header />
      <Main />
    </div>
  );

};

export default Home;
