// src/pages/Home.js
import React from 'react';
import Main from '../components/home/Main';
import Header from '../components/component/Header';

const Home = () => {
  return (
    <div>
      <div className="flex flex-col">
        <Header />
        <Main />
      </div>
    </div>
  );

};

export default Home;
