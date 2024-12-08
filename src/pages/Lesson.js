// src/pages/Lesson.js
import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import { X, Star, LampPendant } from "@phosphor-icons/react";
import Btn from '../components/component/Btn';
import LottieAnimation from '../components/LottieAnimation';
import { LessonDummy } from '../dummys/LessonDummy';



const Lesson = () => {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  const [stepsData, setStepsData] = useState(LessonDummy);
  const [lessonStep, setLessonStep] = useState(parseInt(searchParams.get('lessonStep')) || 0)

  const [isCorrect, setIsCorrect] = useState(null);

  const handleClick = () => {
    // const nextStep = lessonStep + 1;
    // nextStep === stepsData.length ? navigate('/lesson') : setLessonStep(nextStep);
    if(currentStepData.answer === currentStepData.user_select_data){
      currentStepData.isCorrect = true;
      setIsCorrect(true);
    } else{
      currentStepData.isCorrect = false;
      setIsCorrect(false);
    }
  };

  const handleSelect = (option) => {
    setStepsData((prevSteps) =>
      prevSteps.map((step) =>
        step.step === lessonStep
          ? { ...step, user_select_data: option }
          : step
      )
    );
  };
  // 현재 단계에 해당하는 step 데이터 가져오기
  const currentStepData = stepsData.find(step => step.step === lessonStep);
  console.log(currentStepData)
  return (
    <div className="relative flex flex-col items-center justify-center max-w-96 h-screen mx-auto">
      <div
        className="
          flex flex-col gap-6
          w-full h-screen
          px-4 py-6

        "
      >
        <div className={`flex items-center gap-5 h-12`}>
          <X size={32} color="#083344" />
          <div className="flex w-full h-4 rounded-xl bg-cyan-100">
            <div 
              className={`h-full rounded-xl bg-cyan-400 transition-all duration-500 ease-in-out`}
              style={{ width: `${(1 / 10) * 100}%` }}
            ></div>
          </div>
          <div className={`
            flex gap-1 items-center
            text-lg text-cyan-400 font-bold
          `}
          >
            <Star size={24} weight="fill" />
            <span>5</span>
          </div>
        </div>
        <div className={`flex-1`}>
          <h1 className={`text-2xl font-bold`}>{currentStepData.title}</h1>
          {currentStepData.type === 1 ?
            <div>
              <div className="flex h-36">
                <div className="
                  w-28 h-full
                ">
                  <LottieAnimation width="100%" height="100%" animationKey={'welcome_main'}/>
                </div>
                <div className="flex flex-1 items-center h-full">
                  <div className={`
                    w-full 
                    p-2 
                    border border-gray-200 rounded-lg 
                    text-cyan-950 font-semibold
                  `}>
                    {currentStepData.text}
                  </div>
                </div>
              </div>
              <div className={`flex-1 w-full overflow-auto`}>
                <ul className="flex flex-col gap-3">
                  {currentStepData.options.map((option, index) => (
                  <li 
                    className="
                      w-full
                      break-words whitespace-normal
                    " 
                    key={index} 
                    onClick={() => handleSelect(option.text)}
                  > 
                    <div
                      className={`
                        w-full
                        px-4 py-2
                        border-2 border-b-4 rounded-xl 
                        font-semibold
                        select-none cursor-pointer 
                        active:mt-[2px]
                        active:border-b-2
                        active:border-cyan-400
                        active:bg-cyan-50
                        ${currentStepData.user_select_data === option.text ? 'border-cyan-400 text-cyan-500 bg-cyan-50' : ''}
                      `}
                    >
                      <span>{option.text}</span>
                    </div>
                  </li>
                  ))}
                </ul>
              </div>
            </div>
          : 
            <div>
              
            </div>
          }
            
        </div>
        <div className={`
          relative
        `}>
          {isCorrect !== null ? 
          <div className={`
            absolute bottom-0 left-0 right-0
            flex justify-between items-center
            px-4 pb-16 pt-6 mx-[-16px]
            ${isCorrect ? "bg-cyan-50" : "bg-red-50"}

            
            after:content-[""]
            after:absolute after:top-full after:left-0 after:right-0
            after:w-full after:h-screen
            after:bg-inherit
          `}>
            <div className={`flex flex-col gap-2`}>
              <h2 className={`
                text-2xl font-bold 
                ${isCorrect ? "text-cyan-500" : "text-red-500"}
                
              `}>
                {isCorrect ? "정답입니다!" : "정답:"}
              </h2>
              <div className={`
                ${isCorrect ? "text-cyan-500" : "text-red-500"}
                text-sm
              `}>
                {!isCorrect ? currentStepData.answer : ""}
              </div>
            </div>
            <div>
              <LampPendant size={24} className={`
                ${isCorrect ? "text-cyan-500" : "text-red-500"}

              `} />
            </div>
          </div> 
          : ``}
          
          <Btn 
            text={isCorrect === null ? "확인" : "계속하기"} 
            color={isCorrect === null || isCorrect ? "cyan" : "red"} 
            onClick={handleClick} 
            disabled={!currentStepData.free_next && !currentStepData.user_select_data}
          />
        </div>
      </div>
    </div>
  );
};

export default Lesson;
