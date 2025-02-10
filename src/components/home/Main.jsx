// src/components/home/main
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LottieAnimation from '../LottieAnimation';
import Btn from '../component/Btn';
import * as common from '../../utils/common';
console.log(common.backendUrl)

const Main = () => {
  const navigate = useNavigate();
  const handleStartClick = () => {
    navigate('/curriculum-list');
  };
  
  

  return (
    <div className="
      flex flex-col
      max-w-96 h-screen
      p-3
      pb-5
      
    ">
      <div className="flex flex-1 justify-center align-bottom">
        <LottieAnimation width={250} height={250} animationKey={'home_main'} />
      </div>
      <div className="flex flex-col flex-1">
        <h1 className="
          flex-1
          mb-4
          text-2xl font-bold text-cyan-900 text-center
          select-none
        ">
          코딩을 배우는 재미있고 효과적인 방법!!
        </h1>
        <div className="flex flex-col gap-3">
          <Btn color="cyan" text="시작하기" onClick={handleStartClick} />
          {/* <Btn color="white" text="계정이 이미 있습니다" /> */}
        </div>
      </div>

    </div>
  )
}
export default Main;