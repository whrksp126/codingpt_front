
import React from 'react';

const LanguageCard = ({onClick=()=>{}, img, language, learner}) => {
  return (
    <div className="
      max-w-40 w-full h-40
    ">
      <div className="
          flex flex-col justify-center items-center
          p-3
          border-2 border-b-4 rounded-xl 
          active:mt-1 
          active:border-b-2
          active:bg-gray-50
          select-none
        "
        onClick={onClick}
      >
        <img className="
            w-16 h-16
          "
          src={img} alt={language} 
        />
        <p>{language}</p>
        <p>학습자 {learner}명</p>
      </div>
    </div>
  );
};
export default LanguageCard;