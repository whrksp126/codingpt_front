// src/pages/Welcome.js
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Btn from './../components/component/Btn.js';
import SelectBox from '../pages/SelectBox.js';
import LiBox from '../pages/LiBox.js';
import LottieAnimation from '../components/LottieAnimation.js';
import { ArrowLeft } from "@phosphor-icons/react";

// Step data definition for text and options
const stepsData = [
  {
    step: "1",
    text: "안녕하세요! 코코에요!",
    options: [],
  },
  {
    step: "2",
    text: "CodingPT를 어떻게 접하셨나요?",
    options: [
      { type: 1, text: "TV", src: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/b2a0faf7b835cf2ab9a75afe033fdad9.svg" },
      { type: 1, text: "Facebook/Instagram", src: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/9eb3a5707704c76b653a5e85fbf9ca0e.svg" },
      { type: 1, text: "네이버", src: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/4269d9ce7c990b318cbed7955ccb809c.svg" },
      { type: 1, text: "YouTube", src: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/5ae4d4bc2af930b5bc002b5d0b7cbad7.svg" },
      { type: 1, text: "뉴스/기사/블로그", src: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/0d0c3c81ccd1fd2ea84371e6bf4546b3.svg" },
      { type: 1, text: "TikTok", src: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/f2969a78ee365da5e7676dc6afd8c1b4.svg" },
      { type: 1, text: "가족/친구", src: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/947546a876aaea3a9811abf4cca1b618.svg" },
      { type: 1, text: "기타", src: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/d4419d84cb57b1295591e05cd60e45fb.svg" },
    ],
  },
  {
    step: "3",
    text: "코딩을 배우는 이유가 무엇인가요?",
    options: [
      { type: 1, text: "경력 개발", src: "https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/61a06f02b3b988d1c388d484bc0e52e6.svg" },
      { type: 1, text: "사람들과 소통", src: "https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/484f1c9610935dd40094a9f7cf06e009.svg" },
      { type: 1, text: "취미 활동", src: "https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/ab81d610a8a79f174a4db0a6085e7e2c.svg" },
      { type: 1, text: "생산적인 시간 활용", src: "https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/f382d7a1e1a958dc07fca0deae2d16b7.svg" },
      { type: 1, text: "학업", src: "https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/d7315c6c7bbeba67df5ebda771d33da1.svg" },
      { type: 1, text: "여행 준비", src: "https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/5bbfb55fd21e21012a228bcef29bb557.svg" },
      { type: 1, text: "기타", src: "https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/0e2332e8d4074ed5db4ca9152ffd0d25.svg" },
    ],
  },
  {
    step: "4",
    text: "코딩을 얼마나 알고 계시나요?",
    options: [
      { type: 1, text: "코딩을 처음 배워요", src: "https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/5f3f4451d9b4ceb393aa44aa3b44f8ff.svg" },
      { type: 1, text: "기본적인 개념을 조금 알고 있어요", src: "https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/06f993f9019fb13ce4741ba9fe2cfb41.svg" },
      { type: 1, text: "간단한 프로그램을 작성할 수 있어요", src: "https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/42a5b255caeca300ca1a80bb69f5bb16.svg" },
      { type: 1, text: "다양한 프로젝트를 할 수 있어요", src: "https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/c428ae5ee9c14e872d59ae26543c6fda.svg" },
      { type: 1, text: "복잡한 문제를 해결하고 프로젝트를 완성할 수 있어요", src: "https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/cd5dbf897151b9edc42919324382e4b7.svg" },
    ],
  },
  {
    step: "5",
    text: "아래와 같은 목표를 달성할 수 있어요!",
    options: [
      { type: 2, title: "자신 있게 코드를 작성할 수 있어요", text: "간단한 프로젝트를 완성할 수 있는 연습 문제 3,000개 이상", src: "https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/958e9a5aac8a0aeb099e08c28e327de7.svg" },
      { type: 2, title: "문제 해결 능력 키우기", text: "실생활에 유용한 알고리즘과 문제 풀이 방법 500개 이상", src: "https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/bc1008ae41c90c9b1a6f63bb9e142f7f.svg" },
      { type: 2, title: "꾸준한 학습 습관 기르기", text: "스마트 알림과 재미있는 챌린지 기능", src: "https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/3757137c3beb1fbf0bfe21fdf9254023.svg" },
    ],
  },
  {
    step: "6",
    text: "일일 학습 목표가 무엇인가요?",
    options: [
      { type: 2, title: "하루 5분", text: "가볍게" },
      { type: 2, title: "하루 10분", text: "보통" },
      { type: 2, title: "하루 15분", text: "열심히" },
      { type: 2, title: "하루 20분", text: "진지하게" },
    ],
  },
  {
    step: "7",
    text: "이제 가장 알맞은 시작점을 찾아보세요!",
    options: [
      { type: 3, title: "기초부터 시작하기", text: "코딩 과정의 가장 쉬운 레슨부터 시작합니다.", src: "https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/9730040521a168519871561cbea6509e.svg" },
      { type: 3, title: "내 레벨 찾기", text: "학습 시작 지점을 코코가 추천해드려요.", src: "https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/03d40e9ad439925dfe47e8e77072318f.svg" },
    ],
  },
];

const Welcome = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const contentRef = useRef(null);

  const searchParams = new URLSearchParams(location.search);
  const welcomeStep = searchParams.get('welcomeStep');

  const [text, setText] = useState("안녕하세요! 코코에요!");
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null); // 선택된 값을 저장하는 상태
  const [btnActive, setBtnActive] = useState(true); 

  useEffect(() => {
    if (welcomeStep === null) {
      setText("안녕하세요! 코코에요!");
    } else if (welcomeStep === '1') {
      setText("그럼 지금 바로 시작해 볼까요?");
    } else if (welcomeStep === '2') {
      setText("CodingPT를 어떻게 접하셨나요?");
    } else if (welcomeStep === '3') {
      setText("코딩을 배우는 이유가 무엇인가요?");
    } else if (welcomeStep === '4') {
      setText("코딩을 얼마나 알고 계시나요?");
    } else if (welcomeStep === '5') {
      setText("아래와 같은 목표를 달성할 수 있어요!");
    }else if (welcomeStep === '6') {
      setText("일일 학습 목표가 무엇인가요?");
    }else if (welcomeStep === '7') {
      setText("이제 가장 알맞은 시작점을 찾아보세요!");
    }
  }, [welcomeStep]);

  const handleClick = () => {
    if (welcomeStep === null) {
      navigate('/welcome?welcomeStep=1');
      setBtnActive(true)
    } else if (welcomeStep === '1') {
      setBtnActive(false);
      navigate('/welcome?welcomeStep=2');
    } else if (welcomeStep === '2') {
      setBtnActive(false);
      navigate('/welcome?welcomeStep=3');
    } else if (welcomeStep === '3') {
      setBtnActive(false);
      navigate('/welcome?welcomeStep=4');
    } else if (welcomeStep === '4') {
      navigate('/welcome?welcomeStep=5');
    } else if (welcomeStep === '5') {
      setBtnActive(false);
      navigate('/welcome?welcomeStep=6');
    } else if (welcomeStep === '6') {
      setBtnActive(false);
      navigate('/welcome?welcomeStep=7');
    } else if (welcomeStep === '7') {
      setBtnActive(false);
      navigate('/welcome?welcomeStep=8');
    }
  };
  const handleBackClick = () => {
    navigate(-1); // 이전 페이지로 이동
  };
  const handleSelect = (option) => {
    setBtnActive(true);
    setSelectedOption(option); // 선택한 옵션을 상태에 저장
  };

  const handleScroll = () => {
    // 스크롤이 발생할 때만 isScrolled를 true로 설정
    if (contentRef.current.scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    const ref = contentRef.current;
    ref.addEventListener("scroll", handleScroll);
    return () => {
      ref.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="
      relative
      flex flex-col items-center justify-center 
      max-w-96 h-screen
      mx-auto
    ">
      <div className="
        absolute
        w-full h-full
        pointer-events-none
      ">
        <div className={`
          absolute top-1/2 left-1/2
          ${![null, "1"].includes(welcomeStep) ? `hidden` : ``}
          w-max
          p-2
          border border-gray-200 rounded-lg
          text-cyan-950 font-semibold
          transform -translate-x-1/2 -translate-y-40
        `}>
          {text}
        </div>
        <div className={`
          absolute ${![null, "1"].includes(welcomeStep) ? `top-12 left-0` : `top-1/2 left-1/2`}
          ${![null, "1"].includes(welcomeStep) ? `max-w-36` : `max-w-64`} w-full h-auto
          transform ${![null, "1"].includes(welcomeStep) ? `-translate-x-0 -translate-y-0` : `-translate-x-1/2 -translate-y-1/2`}
          transition-all duration-500 ease-in-out
        `} >
          <LottieAnimation width="100%" height="100%" animationKey={'welcome_main'}/>
        </div>
      </div>



      <div className={`
        ${![null, "1"].includes(welcomeStep) ? `` :`hidden`}
        w-full h-48
      `}>
        <div className={`
          flex items-center
          h-12
          px-4
        `}>
          <ArrowLeft size={24} color="#083344" onClick={handleBackClick} />
          <div className="
            flex
            w-full h-4
            ml-5
            rounded-xl
            bg-cyan-100
          "></div>
        </div>
        <div className="
          flex h-36
        ">
          <div className="
            w-40 h-full
          ">
          </div>
          <div className="
            flex flex-1 items-center
            h-full
            pr-4
          ">
            
            <div className={`
              ${![null, "1"].includes(welcomeStep) ? `` : `hidden`}
              w-full
              p-2
              border border-gray-200 rounded-lg
              text-cyan-950 font-semibold
            `}>
              {text}
            </div>
          </div>
        </div>
      </div>




      <div 
        className={`
         
          flex-1
          w-full
          px-4
          overflow-auto
          ${isScrolled ? 'border-t border-gray-200' : ''}

        `}
        
        ref={contentRef}
      >




        <ul 
          className={`
            ${welcomeStep !== "2" ? `hidden` : ``}
            flex flex-col gap-3
            pb-5
          `}
        >
          <SelectBox type={1} text="TV" src="https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/b2a0faf7b835cf2ab9a75afe033fdad9.svg" onClick={() => handleSelect("TV")} isSelected={selectedOption === "TV"} />
          <SelectBox type={1} text="Facebook/Instagram" src="https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/9eb3a5707704c76b653a5e85fbf9ca0e.svg" onClick={() => handleSelect("Facebook/Instagram")} isSelected={selectedOption === "Facebook/Instagram"} />
          <SelectBox type={1} text="네이버" src="https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/4269d9ce7c990b318cbed7955ccb809c.svg" onClick={() => handleSelect("네이버")} isSelected={selectedOption === "네이버"} />
          <SelectBox type={1} text="YouTube" src="https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/5ae4d4bc2af930b5bc002b5d0b7cbad7.svg" onClick={() => handleSelect("YouTube")} isSelected={selectedOption === "YouTube"} />
          <SelectBox type={1} text="뉴스/기사/블로그" src="https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/0d0c3c81ccd1fd2ea84371e6bf4546b3.svg" onClick={() => handleSelect("뉴스/기사/블로그")} isSelected={selectedOption === "뉴스/기사/블로그"} />
          <SelectBox type={1} text="TikTok" src="https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/f2969a78ee365da5e7676dc6afd8c1b4.svg" onClick={() => handleSelect("TikTok")} isSelected={selectedOption === "TikTok"} />
          <SelectBox type={1} text="가족/친구" src="https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/947546a876aaea3a9811abf4cca1b618.svg" onClick={() => handleSelect("가족/친구")} isSelected={selectedOption === "가족/친구"} />
          <SelectBox type={1} text="기타" src="https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/d4419d84cb57b1295591e05cd60e45fb.svg" onClick={() => handleSelect("기타")} isSelected={selectedOption === "기타"} />
        </ul>





        <ul 
          className={`
            ${welcomeStep !== "3" ? `hidden` : ``}
            flex flex-col gap-3
            pb-5
          `}
        >
          <SelectBox type={1} text="경력 개발" src="https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/61a06f02b3b988d1c388d484bc0e52e6.svg" onClick={() => handleSelect("경력 개발")} isSelected={selectedOption === "경력 개발"} />
          <SelectBox type={1} text="사람들과 소통" src="https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/484f1c9610935dd40094a9f7cf06e009.svg" onClick={() => handleSelect("사람들과 소통")} isSelected={selectedOption === "사람들과 소통"} />
          <SelectBox type={1} text="취미 활동" src="https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/ab81d610a8a79f174a4db0a6085e7e2c.svg" onClick={() => handleSelect("취미 활동")} isSelected={selectedOption === "취미 활동"} />
          <SelectBox type={1} text="생산적인 시간 활용" src="https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/f382d7a1e1a958dc07fca0deae2d16b7.svg" onClick={() => handleSelect("생산적인 시간 활용")} isSelected={selectedOption === "생산적인 시간 활용"} />
          <SelectBox type={1} text="학업" src="https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/d7315c6c7bbeba67df5ebda771d33da1.svg" onClick={() => handleSelect("학업")} isSelected={selectedOption === "학업"} />
          <SelectBox type={1} text="여행 준비" src="https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/5bbfb55fd21e21012a228bcef29bb557.svg" onClick={() => handleSelect("여행 준비")} isSelected={selectedOption === "여행 준비"} />
          <SelectBox type={1} text="기타" src="https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/0e2332e8d4074ed5db4ca9152ffd0d25.svg" onClick={() => handleSelect("기타")} isSelected={selectedOption === "기타"} />
        </ul>




        <ul 
          className={`
            ${welcomeStep !== "4" ? `hidden` : ``}
            flex flex-col gap-3
            pb-5
          `}
        >
          <SelectBox type={1} text="코딩을 처음 배워요" src="https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/5f3f4451d9b4ceb393aa44aa3b44f8ff.svg" onClick={() => handleSelect("코딩을 처음 배워요")} isSelected={selectedOption === "코딩을 처음 배워요"} />
          <SelectBox type={1} text="기본적인 개념을 조금 알고 있어요" src="https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/06f993f9019fb13ce4741ba9fe2cfb41.svg" onClick={() => handleSelect("기본적인 개념을 조금 알고 있어요")} isSelected={selectedOption === "기본적인 개념을 조금 알고 있어요"} />
          <SelectBox type={1} text="간단한 프로그램을 작성할 수 있어요" src="https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/42a5b255caeca300ca1a80bb69f5bb16.svg" onClick={() => handleSelect("간단한 프로그램을 작성할 수 있어요")} isSelected={selectedOption === "간단한 프로그램을 작성할 수 있어요"} />
          <SelectBox type={1} text="다양한 프로젝트를 할 수 있어요" src="https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/c428ae5ee9c14e872d59ae26543c6fda.svg" onClick={() => handleSelect("다양한 프로젝트를 할 수 있어요")} isSelected={selectedOption === "다양한 프로젝트를 할 수 있어요"} />
          <SelectBox type={1} text="복잡한 문제를 해결하고 프로젝트를 완성할 수 있어요" src="https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/cd5dbf897151b9edc42919324382e4b7.svg" onClick={() => handleSelect("복잡한 문제를 해결하고 프로젝트를 완성할 수 있어요")} isSelected={selectedOption === "복잡한 문제를 해결하고 프로젝트를 완성할 수 있어요"} />
        </ul>




        <ul 
          className={`
            ${welcomeStep !== "5" ? `hidden` : ``}
          `}
        >
          <LiBox 
            title="자신 있게 코드를 작성할 수 있어요" 
            text="간단한 프로젝트를 완성할 수 있는 연습 문제 3,000개 이상"  
            src="https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/958e9a5aac8a0aeb099e08c28e327de7.svg" 
          />
          <LiBox 
            title="문제 해결 능력 키우기" 
            text="실생활에 유용한 알고리즘과 문제 풀이 방법 500개 이상"  
            src="https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/bc1008ae41c90c9b1a6f63bb9e142f7f.svg" 
          />
          <LiBox 
            title="꾸준한 학습 습관 기르기" 
            text="스마트 알림과 재미있는 챌린지 기능"  
            src="https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/3757137c3beb1fbf0bfe21fdf9254023.svg" 
            isLast={true}
          />
        </ul>




        <ul
         className={`
          ${welcomeStep !== "6" ? `hidden` : ``}
          flex flex-col gap-3
          pb-5
        `}
        >
          <SelectBox type={2} title="하루 5분" text="가볍게"  onClick={() => handleSelect("가볍게")} isSelected={selectedOption === "가볍게"} />
          <SelectBox type={2} title="하루 10분" text="보통"  onClick={() => handleSelect("보통")} isSelected={selectedOption === "보통"} />
          <SelectBox type={2} title="하루 15분" text="열심히"  onClick={() => handleSelect("열심히")} isSelected={selectedOption === "열심히"} />
          <SelectBox type={2} title="하루 20분" text="진지하게"  onClick={() => handleSelect("진지하게")} isSelected={selectedOption === "진지하게"} />
        </ul>



        
        <ul
         className={`
          ${welcomeStep !== "7" ? `hidden` : ``}
          flex flex-col gap-3
          pb-5
        `}
        >
          <SelectBox type={3} title="기초부터 시작하기" text="코딩 과정의 가장 쉬운 레슨부터 시작합니다." src="https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/9730040521a168519871561cbea6509e.svg"  onClick={() => handleSelect("기초부터 시작하기")} isSelected={selectedOption === "기초부터 시작하기"} />
          <SelectBox type={3} title="내 레벨 찾기" text="학습 시작 지점을 코코가 추천해드려요." src="https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/03d40e9ad439925dfe47e8e77072318f.svg"  onClick={() => handleSelect("내 레벨 찾기")} isSelected={selectedOption === "내 레벨 찾기"} />
        </ul>
      </div>



      <div className="
        w-full
        py-5 px-4
        border-t border-l-gray-200
      ">
        <Btn text="계속하기" color="cyan" onClick={handleClick} disabled={!btnActive} ></Btn>
      </div>
    </div>
  );
};

export default Welcome;
