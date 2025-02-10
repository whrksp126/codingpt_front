// src/pages/CurriculumList.js
import Header from '../components/curriculumList/Header';
import Main from '../components/curriculumList/Main';
import { curriculumList } from '../assets/lesson_dummy/curriculumList';





const CurriculumList = () => {

  return (

    <div 
      className="
        flex flex-col items-center justify-center
        mx-auto
      "
    >
      <Header />
      <Main curriculumList={curriculumList} />

    </div>
    
  );
};

export default CurriculumList;
