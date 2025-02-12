// src/components/curriculum/main
import { useNavigate } from 'react-router-dom';
import { Star } from '@phosphor-icons/react';

const Main = ({section}) => {
  
  console.log(section)
  const clickStageBtn = (stage) => {
    console.log(stage)
  }
  return (
    <div 
      className="
        w-full h-[calc(100vh-var(--margin-header))]
        overflow-y-auto
      "
    >
      <div className="">
        {section.units.map((unit) => {
          console.log(unit)
          return (
          <div key={unit.id}>
            <div className="flex justify-center items-center w-full h-[82px] text-[#37464F] text-xl font-bold">
              <div className="flex-1 h-[2px] bg-[#37464F]"></div>
              <h1 className="p-4">{unit.title}</h1>
              <div className="flex-1 h-[2px] bg-[#37464F]"></div>
            </div>
            <div className="flex flex-col">
              {unit.stages.map((stage)=>{
                console.log(stage)
                return (
                <div key={stage.id} className="relative">

                  <div className="
                    flex justify-center
                    mt-4 
                  ">
                    <button 
                      onClick={()=>{
                        clickStageBtn(stage)
                      }}
                      className="
                        flex justify-center items-center
                        w-[70px] h-[65px] 
                        rounded-[50%]
                        
                        after:content-['']
                        after:absolute
                        after:bg-[#93D333]
                        after:rounded-[50%]
                        
                        after:shadow-[0_8px_0_rgba(0,0,0,0.2),0_8px_0_#93D333]
                        after:h-[57px]
                        after:w-[70px]
                        after:top-0
                        relative

                        active:translate-y-2
                        active:after:shadow-none
                      "
                    >
                      <Star size={42} color="#fff" weight="fill" className="
                      absolute top-2 z-10
                      " />
                    </button>
                  </div>
                  <div className="
                    absolute top-full left-1/2 z-[199]
                    brightness-100
                    origin-[center_12px]
                  ">
                    <div className="
                      absolute left-1/2 top-full z-10
                      w-[295px]
                      mt-3
                      -translate-x-1/2
                    ">
                      <div className="
                        p-4
                        border-0
                        text-center leading-[1.4] text-white text-[19px] font-bold
                        bg-[#58cc02]
                      ">
                        <div className="text-align: left;">
                          <div>
                            <h1>
                              불규칙 복수 명사 만들기
                            </h1>
                          </div>
                          <p>레슨 3/6</p>
                          <button className="
                            mt-4
                            w-full
                            outline: none;
                            relative
                            before:absolute before:top-0 before:left-0 before:z-[-1]
                            before:bg-white 
                            before:rounded-2xl
                            before:shadow-[0_4px_0_rgba(255,255,255,0.7)]
                            before:content-['']
                            before:transition-shadow
                          ">시작 +10 XP</button>
                        </div>
                      </div>
                      <div>화살표</div>
                    </div>
                  </div>
                </div>
                )
              })}
            </div>
          </div>
          )
        })}
      </div>
    </div>
  )
}
export default Main;