// src/pages/Lesson.js
import {useEffect, useRef, useState} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { X, Star, LampPendant } from "@phosphor-icons/react";
import Btn from '../components/component/Btn';
// import LottieAnimation from '../components/LottieAnimation';
import { LessonDummy } from '../dummys/LessonDummy';

import ReactMarkdown from 'react-markdown';

const Lesson = () => {
  const inputRefs = useRef([]);
  const [disabledOptions, setDisabledOptions] = useState([]); // 비활성화된 옵션 상태
  const [allInputsFilled, setAllInputsFilled] = useState(false); // 모든 input이 채워졌는지 상태 확인

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const [stepsData, setStepsData] = useState(LessonDummy);
  const [lessonStep, setLessonStep] = useState(parseInt(searchParams.get('lessonStep')) || 0);

  const currentStepData = stepsData.find((step) => step.index === lessonStep);
  const [isCorrect, setIsCorrect] = useState(null);
  useEffect(()=>{
    // options 세팅
    LessonDummy.forEach((dummy)=>{
      if(dummy?.interactionModule?.interactionOptions){
        const values = dummy.interactionModule.interactionOptions.map(({value})=>{return value})
        dummy.options = [...dummy.interactionModule.wrongOptions, ...values];
        function shuffleArray(array) {
          for (let i = array.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [array[i], array[randomIndex]] = [array[randomIndex], array[i]]; // Swap
          }
          return array;
        }
        dummy.options = shuffleArray(dummy.options);
      }
    })
  },[])

  const resetInputRefs = () => {
    // 기존 참조 초기화
    inputRefs.current.forEach((inputRef) => {
      if (inputRef) {
        inputRef.value = ""; // 값 제거
      }
    });
    inputRefs.current = []; // 완전히 새로운 배열로 초기화
  };


  const handleClick = () => {
    if(currentStepData?.interactionModule?.type === "codeFillTheGap") {
      const interactionOptions = currentStepData?.interactionModule?.interactionOptions
      if(interactionOptions){
        const hasIncorrectAnswer = interactionOptions.some((option, index) => option.value !== inputRefs.current[index]?.value);
        const postInteractionModules = currentStepData?.postInteractionModules
        if(hasIncorrectAnswer){
          const content = postInteractionModules.find((postInteractionModule)=>postInteractionModule.visibleIf === "wrong");
          console.log(content)
          setIsCorrect(false);
        }else{
          const content = postInteractionModules.find((postInteractionModule)=>postInteractionModule.visibleIf === "correct");
          console.log(content)
          setIsCorrect(true); 
        }
        if(isCorrect !== null){
          resetInputRefs();
          setIsCorrect(null);
          const nextStep = lessonStep + 1;
          nextStep === stepsData.length ? Navigate('/lesson') : setLessonStep(nextStep);
          setDisabledOptions([]);
          setAllInputsFilled(false);
        }
      }
    }else if(currentStepData?.interactionModule?.type === "multipleChoice") {
      setIsCorrect(currentStepData?.interactionModule.items[disabledOptions[0]].correct);
      if(isCorrect !== null){
        resetInputRefs();
        setIsCorrect(null);
        const nextStep = lessonStep + 1;
        nextStep === stepsData.length ? Navigate('/lesson') : setLessonStep(nextStep);
        setDisabledOptions([]);
        setAllInputsFilled(false);
      }
    }else{
      const nextStep = lessonStep + 1;
      nextStep === stepsData.length ? Navigate('/lesson') : setLessonStep(nextStep);
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
  // option 클릭 시
  const clickOptionItem = (event) => {
    const selectedValue = event.target.textContent; 
    const index = event.target.dataset.index; 
    if(currentStepData?.interactionModule?.type === "codeFillTheGap") {
      const emptyInput = inputRefs.current.find((input) => input && !input.value);
      if (emptyInput) {
        emptyInput.value = selectedValue; 
        emptyInput.dataset.optionIndex = index; 
        emptyInput.dispatchEvent(new Event("input", { bubbles: true })); 
        setDisabledOptions((prev) => [...prev, parseInt(index)]);
      }
      checkAllInputsFilled();
    }
    if(currentStepData?.interactionModule?.type === "multipleChoice") {
      setDisabledOptions([index]);
      setAllInputsFilled(true);
    }    
  };
  // input value 제거
  const clearInputValue = (event) => {
    const input = event.target;
    const optionIndex = input.dataset.optionIndex; // 연결된 옵션 인덱스 가져오기

    if (optionIndex !== undefined) {
      // input 값 제거
      input.value = "";
      delete input.dataset.optionIndex;

      // 해당 옵션 활성화
      setDisabledOptions((prev) =>
        prev.filter((index) => index !== parseInt(optionIndex))
      );
    }
    checkAllInputsFilled();
  };
  // 모두 정답 입력된 상태 확인
  const checkAllInputsFilled = () => {
    const allFilled = inputRefs.current.every((input) => input && input.value);
    setAllInputsFilled(allFilled); // 상태 업데이트
  };
  // JSON 데이터를 기반으로 옵션 `<button>` 태그 생성 및 랜덤 섞기
  const generateOptionBtns = (options) => {
    const elements = [];

    options.forEach((option, index) => {
      elements.push(
        <button
          key={`option-${index}`}
          data-index={index}
          onClick={(event) => clickOptionItem(event)}
          className={`flex h-8 items-center rounded-lg border border-b-2 px-3 !font-aeonikMono font-mimopro font-normal text-sm hover:bg-product2-background-secondary ${
            disabledOptions.includes(index)
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "border-product2-border-secondary text-product2-content-primary"
          }`}
          disabled={disabledOptions.includes(index)} // 비활성화 상태
        >
          {option}
        </button>
      );
    });

    return elements;
  };
  
  // JSON 데이터를 기반으로 라인별 코드와 `<input>` 태그를 생성
  const generateCodeWithInputs = (interactionModule) => {
    const content = interactionModule.files[0].content
    const options = interactionModule.interactionOptions
    const lines = content.split("\n"); // 전체 내용을 라인 단위로 분리
    const elements = [];

    lines.forEach((line, lineIndex) => {
      let lineElements = [];
      let lastIndex = 0;

      const lineOptions = options.filter((option) => option.startLine === lineIndex);

      lineOptions.forEach((option, optionIndex) => {
        const { startPos, endIndex, length, value } = option;

        // `<code>` 태그 추가 (startPos 이전의 텍스트)
        if (startPos > lastIndex) {
          lineElements.push(
            <code key={`code-${lineIndex}-${optionIndex}`} className="text-white">
              {line.slice(lastIndex, startPos)}
            </code>
          );
        }

        // `<input>` 태그 추가
        lineElements.push(
          <input
            key={`input-${lineIndex}-${optionIndex}`}
            ref={(el) => {
              if (el) {
                // 중복 방지 및 null 값 제외
                if (!inputRefs.current.includes(el)) {
                  inputRefs.current.push(el);
                }
              } else {
                // 요소가 삭제되면 배열에서 제거
                inputRefs.current = inputRefs.current.filter((ref) => ref !== null);
              }
            }}
            className="ml-1 h-5 min-w-[21px] border border-gray-700 rounded-md bg-gray-800 text-center text-sm text-white caret-blue-400 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
            style={{ width: `calc(${length}ch + 12px)` }}
            readOnly // 읽기 전용
            onClick={(event) => clearInputValue(event)}
          />
        );

        lastIndex = endIndex;
      });

      // 마지막 `<code>` 태그 처리
      if (lastIndex < line.length) {
        lineElements.push(
          <code key={`code-last-${lineIndex}`} className="text-white">
            {line.slice(lastIndex)}
          </code>
        );
      }

      elements.push(
        <div key={`line-${lineIndex}`} className="flex items-center">
          {lineElements}
        </div>
      );
    });

    return elements;
  };
  const postModule = currentStepData.postInteractionModules.find(
    ({ visibleIf }) => visibleIf === (isCorrect ? "correct" : "wrong")
  );
  return (
    <div className="relative flex flex-col items-center justify-center max-w-96 h-screen mx-auto">
      <div
        className="
          flex flex-col gap-6
          gap-
          w-full h-screen
          px-4 py-6

        "
      >
        <div className={`flex items-center gap-5 h-6`}>
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
          {/* title */}
          {/* <h1 className={`text-2xl font-bold`}>{currentStepData.title}</h1> */}
          {currentStepData.type === "Interactive" && 
          <div>
            {/* preInteractionModules */}
            <div className="flex flex-1 items-center h-full m-4">
              <div className={`flex flex-col text-center gap-4 w-full text-cyan-950 font-semibold`}>
                {currentStepData.preInteractionModules.map((data, index)=> { return (
                <div key={index}>
                  {data.type === "image" && <img src={data.src} alt="Lesson Content" className="rounded-lg" />}
                  {data.type === "paragraph" && <ReactMarkdown>{data.content}</ReactMarkdown>}
                  {data.type === "webview" && 
                  <div className={`relative flex min-h-[200px] w-full resize flex-col overflow-hidden rounded-xl border border-product2-border-secondary`}>
                    <div className={`flex h-10 flex-shrink-0 items-center justify-between px-3 font-semibold text-xs bg-gray-100 text-gray-600`}>
                      <h3>Browser</h3>
                    </div>
                    <div className={`flex h-[300px] flex-grow overflow-y-auto`}>
                      <iframe className={`w-full flex-grow bg-product-background-primary-light`} srcDoc={data.content}></iframe>
                    </div>
                  </div>
                  }
                  
                </div>
                )})}
              </div>
            </div>
            {/* interactionModule */}
            {currentStepData.interactionModule !== null && 
            
            
            <div className={`flex w-full justify-center`}>
              {currentStepData.interactionModule.type === 'codeFillTheGap' &&
              <div className={`min-w-[300px] max-w-[664px] flex-1 bg-product-background-primary-light dark:bg-product-background-primary-dark`}>
                <div className={`relative flex flex-col`}>
                  <div className={`relative flex max-h-[440px] w-full flex-col overflow-hidden rounded-xl border border-indigo-800 bg-product2-background-dark`}>
                    {/* programming language nav */}
                    <div className={`flex h-10 flex-shrink-0 overflow-x-auto bg-indigo-900`}>
                      {currentStepData.interactionModule.files.map((file, index)=>{return (
                      <div key={index} className={`flex h-full items-center justify-center space-x-2 whitespace-nowrap px-4 text-xs font-semibold bg-gray-900 text-white`}>{file.name}</div>
                      )})}
                    </div>
                    {/* programming language */}
                    <pre className="h-56 overflow-y-auto bg-gray-900 px-4 py-3 text-sm text-white">
                      {generateCodeWithInputs(currentStepData.interactionModule)}
                    </pre>
                    
                  </div>
                  {/* programming Options */}
                  <div className={`mt-8 flex flex-wrap items-center justify-center gap-y-2 space-x-4`}>
                        {generateOptionBtns(currentStepData.options)}
                      {/* <div className={`relative`}>
                      </div> */}
                    </div>
                </div>
              </div>
              }
              {currentStepData.interactionModule.type === 'multipleChoice' && 
              <div className="max-w-[664px] flex-1">
                <div className="z-20 flex w-full flex-col items-center">
                  {currentStepData.interactionModule.items.map((item, index) => (
                  <div key={index} className="relative w-full max-w-[480px]">
                    <button 
                      data-index={index}
                      onClick={(event) => clickOptionItem(event)}
                      className="mb-3 flex min-h-10 w-full items-center justify-between space-x-2 rounded-lg border border-b-2 py-2 pl-3 pr-2 text-left hover:bg-gray-200 border-gray-400"
                    >
                      {item.text}
                    </button>
                  </div>
                  ))}
                </div>
              </div>
              }            
            </div>
            }
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
                {isCorrect ? "완벽합니다! 잘했어요!" : "뭔가 잘못됐어"}
              </h2>
              <div className={`
                ${isCorrect ? "text-cyan-500" : "text-red-500"}
                text-sm
              `}>
                <ReactMarkdown>
                  {postModule?.type === "paragraph" && postModule?.content}
                </ReactMarkdown>
              </div>
            </div>
            {/* <div>
              <LampPendant size={24} className={`
                ${isCorrect ? "text-cyan-500" : "text-red-500"}
              `} />
            </div> */}
          </div> 
          : ``}
          
          <Btn 
            text={isCorrect === null ? "확인" : "계속하기"} 
            color={isCorrect === null || isCorrect ? "cyan" : "red"} 
            onClick={handleClick} 
            disabled={(currentStepData.interactionModule !== null ? !allInputsFilled  : false)}
          />
          {/* <Btn 
            text={isCorrect === null ? "확인" : "계속하기"} 
            color={isCorrect === null || isCorrect ? "cyan" : "red"} 
            onClick={handleClick} 
            disabled={!currentStepData.free_next && !currentStepData.user_select_data}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Lesson;
