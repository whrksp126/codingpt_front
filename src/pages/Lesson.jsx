// src/pages/Lesson.js
import React, {useEffect, useMemo, useRef, useState} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { X, Star, LampPendant } from "@phosphor-icons/react";
import Btn from '../components/component/Btn';
// import LottieAnimation from '../components/LottieAnimation';
import { LessonDummy } from '../dummys/LessonDummy';
import * as monaco from 'monaco-editor';

import ReactMarkdown from 'react-markdown';

const languageMap = {
  js: 'javascript',
  javascript: 'javascript',
  JavaScript: 'javascript',
  ts: 'typescript',
  typescript: 'typescript',
  html: 'html',
  css: 'css',
  py: 'python',
  python: 'python',
  java: 'java',
  cpp: 'cpp',
  c: 'c',
};
const getLanguage = (input) => {
  return languageMap[input] || 'plaintext'; // 기본값은 'plaintext'
};
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

  const handleClick = () => {
    const interactionOptions = currentStepData?.interactionModule?.interactionOptions
    
    if(interactionOptions){
      const hasIncorrectAnswer = interactionOptions.some((option, index) => option.value !== inputRefs.current[index]?.value);
      const postInteractionModules = currentStepData?.postInteractionModules
      if(hasIncorrectAnswer){
        console.log('오답');
        const content = postInteractionModules.find((postInteractionModule)=>postInteractionModule.visibleIf === "wrong");
        console.log(content);
        
        setIsCorrect(false);
      }else{
        console.log('정답');
        const content = postInteractionModules.find((postInteractionModule)=>postInteractionModule.visibleIf === "correct");
        console.log(content);
        // 문제가 해결되었습니다. 잘했어요!
        setIsCorrect(true);
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
    const selectedValue = event.target.textContent; // 클릭한 옵션 값
    const index = event.target.dataset.index; // 옵션의 고유 인덱스

    // 첫 번째 값이 없는 input 찾기
    const emptyInput = inputRefs.current.find((input) => input && !input.value);

    if (emptyInput) {
      emptyInput.value = selectedValue; // 값 삽입
      emptyInput.dataset.optionIndex = index; // input에 옵션 인덱스를 저장
      emptyInput.dispatchEvent(new Event("input", { bubbles: true })); // React에서 input 이벤트 트리거

      // 클릭한 옵션 비활성화
      setDisabledOptions((prev) => [...prev, parseInt(index)]);
    }
    checkAllInputsFilled();
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
  const generateOptionBtns = (interactionOptions, wrongOptions) => {
    const elements = [];
    const options = [...interactionOptions.map((opt) => opt.value), ...wrongOptions];

    // 랜덤 섞기 (Fisher-Yates 알고리즘)
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }

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
  const generateCodeWithInputs = (content, options) => {
    const lines = content.split("\n"); // 전체 내용을 라인 단위로 분리
    const elements = [];
    lines.forEach((line, lineIndex) => {
      let lineElements = [];
      let lastIndex = 0;

      // 해당 라인에 포함된 옵션 필터링
      const lineOptions = options.filter((option) => option.startLine === lineIndex);
      lineOptions.forEach((option, optionIndex) => {
        const { startPos, endIndex, length } = option;

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
            ref={(el) => (inputRefs.current[lineIndex + optionIndex] = el)} // input ref 배열에 저장
            className="ml-1 h-5 min-w-[21px] border border-gray-700 rounded-md bg-gray-800 text-center text-sm text-white caret-blue-400 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
            style={{ width: `calc(${length}ch + 12px)` }}
            readOnly // input을 비활성화
            onClick={(event) => clearInputValue(event)} // 클릭 시 값 제거
          />
        );
        lastIndex = endIndex - lineOptions[0].startIndex; // 라인 내에서 현재 인덱스 업데이트
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
            <div className="flex flex-1 items-center h-full">
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
                      {generateCodeWithInputs(currentStepData.interactionModule.files[0].content, currentStepData.interactionModule.interactionOptions)}
                    </pre>
                  </div>
                  {/* programming Options */}
                  <div className={`mt-8 flex flex-wrap items-center justify-center gap-y-2 space-x-4`}>
                      <div className={`relative`}>
                        {generateOptionBtns(currentStepData.interactionModule.interactionOptions, currentStepData.interactionModule.wrongOptions)}
                      </div>
                    </div>
                </div>
              </div>
            </div>
            }
          </div>
          }



          {currentStepData.inputType === "single-select" && 
          <div>
            {/* description */}

            <div className="flex">
              <div className="flex flex-1 items-center h-full">
                <div className={`w-full p-2 border border-gray-200 rounded-lg text-cyan-950 font-semibold`}>
                  {currentStepData.content.description}
                </div>
              </div>
            </div>
            
            {/* {currentStepData.content.contextCode.map((context, index) => { return (
            <div
              key={index} // map 내부에서는 key가 필요
              ref={refList[index]} // 각 div에 고유한 ref 연결
              className="relative"
              style={{borderRadius: '12px',overflow: 'hidden',pointerEvents: 'none',}}
            >
              <div className="absolute bottom-0 right-4 z-10 text-xs font-semibold text-gray-500">
                {context.label}.{context.type}
              </div>
            </div>
            )})} */}

            {/* options */}
            <div className={`flex-1 w-full overflow-auto`}>
              <ul className="flex flex-col gap-3">
                {currentStepData.content.options.map((option, index) => (
                <li 
                  className="w-full break-words whitespace-normal" 
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
          }
          {currentStepData.inputType === "multi-select" && `
          `}
          {currentStepData.inputType === "text-input" && `
          `}
          {/* {currentStepData.type === 1 ?
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
          } */}
            
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
                {isCorrect ? "완벽합니다! 잘했어요!" : "정답:"}
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
