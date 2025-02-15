// src/components/curriculum/Header.jsx
import { CaretLeft } from "@phosphor-icons/react";

const Header = () => {
  return (
    <div className="
      w-full
    ">
      <div className="
        fixed top-0
        w-full
        text-white
      ">
        <div className="h-8 w-full"></div>
        <div className="
          relative
          flex justify-center items-center
          h-14 w-full
          px-4
        ">
          <h1 className="w-[186px]">
            <img src="/src/assets/images/codingPT.png" alt="CodingPT Logo" />
          </h1>
        </div>
      </div>
      
      <div className="h-header"></div>  
    </div>

  );
};

export default Header;
