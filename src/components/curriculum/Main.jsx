// src/components/curriculum/main
import { useNavigate } from 'react-router-dom';
import { Star } from '@phosphor-icons/react';

const Main = ({section}) => {
  
  console.log(section)
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
                    <button className="
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
                    ">
                      <Star size={42} color="#fff" weight="fill" className="
                      absolute top-2 z-10
                      " />
                    </button>
                    <div>
                      {stage.title}
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