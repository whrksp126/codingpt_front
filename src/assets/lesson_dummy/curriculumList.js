// program < curriculum < section < unit < stages < lesson < problem
// 지금은 학습 데이터가 충분하지 않아 stage 별 하나의 lesson만 사용한다.
// 데이터 확보 후 stage에 다양한 lesson을 추가해야함.
import lesson_html_1_1 from '../../../lesson_dummy/HTML/1. Discovering HTML and Tags/1.json';
import lesson_html_1_2 from '../../../lesson_dummy/HTML/1. Discovering HTML and Tags/2.json';

import lesson_html_2_1 from '../../../lesson_dummy/HTML/2. Structuring Text with Tags/1.json';

import lesson_html_3_1 from '../../../lesson_dummy/HTML/3. Building Buttons/1.json';

import lesson_html_4_1 from '../../../lesson_dummy/HTML/4. HTML Basics 1/1.json';

import lesson_html_5_1 from '../../../lesson_dummy/HTML/5. Creating Links/1.json';

import lesson_html_6_1 from '../../../lesson_dummy/HTML/6. Adding Images/1.json';

import lesson_html_7_1 from '../../../lesson_dummy/HTML/7. HTML Basics 2/1.json';

const stage_html_1 = {
  "id": 1,
  "title": "Discovering HTML and Tags",
  "lessons": [

    {
      "id": 1,
      "title": "Discovering HTML and Tags",
      "content": lesson_html_1_1,

    },
  ]
}
const stage_html_2 = {
  "id": 2,
  "title": "Discovering HTML and Tags",
  "lessons": [
    {
      "id": 1,
      "title": "Discovering HTML and Tags",
      "content": lesson_html_1_2,
    },
  ]
}
const unit_html_1 = {
  "id": 1,
  "title": "Discovering HTML and Tags",
  "stages": [
    stage_html_1,
    stage_html_2,
  ]
}
const stage_html_3 = {
  "id": 3,
  "title": "Structuring Text with Tags",
  "lessons": [
    {
      "id": 1,  
      "title": "Structuring Text with Tags",
      "content": lesson_html_2_1,
    },
  ]
}
const unit_html_2 = { 
  "id": 2,
  "title": "Structuring Text with Tags",
  "stages": [
    stage_html_3,
  ]
} 
const stage_html_4 = {
  "id": 4,
  "title": "Building Buttons",
  "lessons": [
    {
      "id": 1,    
      "title": "Building Buttons",
      "content": lesson_html_3_1,
    },
  ]
} 
const unit_html_3 = { 
  "id": 3,
  "title": "Building Buttons",
  "stages": [
    stage_html_4,
  ]
}  
const stage_html_5 = {
  "id": 5,
  "title": "HTML Basics 1",
  "lessons": [
    {
      "id": 1,      
      "title": "HTML Basics 1",
      "content": lesson_html_4_1,
    },
  ]
}  
const unit_html_4 = {  
  "id": 4,
  "title": "HTML Basics 1",
  "stages": [
    stage_html_5,
  ]
}   
const stage_html_6 = {
  "id": 6,
  "title": "Creating Links",
  "lessons": [
    {
      "id": 1,        
      "title": "Creating Links",
      "content": lesson_html_5_1,
    },
  ]
}   
const unit_html_5 = {  
  "id": 5,
  "title": "Creating Links",
  "stages": [
    stage_html_6,
  ]
}    
const stage_html_7 = {
  "id": 7,
  "title": "Adding Images",
  "lessons": [
    {
      "id": 1,        
      "title": "Adding Images",
      "content": lesson_html_6_1,
    },
  ]
}   
const unit_html_6 = {  
  "id": 6,
  "title": "Adding Images",
  "stages": [
    stage_html_7,
  ]
}
const stage_html_8 = {
  "id": 8,
  "title": "HTML Basics 2",
  "lessons": [
    {
      "id": 1,  
      "title": "HTML Basics 2",
      "content": lesson_html_7_1,
    },
  ]
}
const unit_html_7 = {
  "id": 7,
  "title": "HTML Basics 2",
  "stages": [
    stage_html_8,
  ]
}
const section_html_1 = {
  "id": 1,
  "title": "HTML Basics",
  "units": [
    unit_html_1,
    unit_html_2,
    unit_html_3,
    unit_html_4,
    unit_html_5,
    unit_html_6,
    unit_html_7,
  ]
}














import lesson_javascript_1_1 from '../../../lesson_dummy/JavaScript/1. Creating Variables/1.json';
import lesson_javascript_1_2 from '../../../lesson_dummy/JavaScript/1. Creating Variables/2.json';
import lesson_javascript_1_3 from '../../../lesson_dummy/JavaScript/1. Creating Variables/3.json';
import lesson_javascript_1_4 from '../../../lesson_dummy/JavaScript/1. Creating Variables/4.json';

import lesson_javascript_2_1 from '../../../lesson_dummy/JavaScript/2. Using Variables/1.json';
import lesson_javascript_2_2 from '../../../lesson_dummy/JavaScript/2. Using Variables/2.json';
import lesson_javascript_2_3 from '../../../lesson_dummy/JavaScript/2. Using Variables/3.json';

import lesson_javascript_3_1 from '../../../lesson_dummy/JavaScript/3. Using True and False/1.json';
import lesson_javascript_3_2 from '../../../lesson_dummy/JavaScript/3. Using True and False/2.json';

import lesson_javascript_4_1 from '../../../lesson_dummy/JavaScript/4. Checking Number Equality/1.json';
import lesson_javascript_4_2 from '../../../lesson_dummy/JavaScript/4. Checking Number Equality/2.json';

import lesson_javascript_5_1 from '../../../lesson_dummy/JavaScript/5. JavaScript Basics/1.json';
import lesson_javascript_5_2 from '../../../lesson_dummy/JavaScript/5. JavaScript Basics/2.json';

const stage_javascript_1 = {
  "id": 1,
  "title": "Creating Variables",
  "lessons": [
    {
      "id": 1,
      "title": "Creating Variables",
      "content": lesson_javascript_1_1,
    },
  ]
}
const stage_javascript_2 = {
  "id": 2,
  "title": "Creating Variables",
  "lessons": [
    {
      "id": 1,
      "title": "Creating Variables",
      "content": lesson_javascript_1_2,
    },
  ]
}
const stage_javascript_3 = {
  "id": 3,
  "title": "Creating Variables",
  "lessons": [
    {
      "id": 1,
      "title": "Creating Variables",
      "content": lesson_javascript_1_3,
    },
  ]
}
const stage_javascript_4 = {
  "id": 4,
  "title": "Creating Variables",
  "lessons": [
    {
      "id": 1,
      "title": "Creating Variables",
      "content": lesson_javascript_1_4,

    },
  ]
}
const unit_javascript_1 = {
  "id": 1,
  "title": "Creating Variables",
  "stages": [
    stage_javascript_1,
    stage_javascript_2,
    stage_javascript_3,
    stage_javascript_4,
  ]
}
const stage_javascript_5 = {
  "id": 5,
  "title": "Using Variables",
  "lessons": [
    {
      "id": 1,
      "title": "Using Variables",
      "content": lesson_javascript_2_1,
    },
  ]
}
const stage_javascript_6 = {
  "id": 6,
  "title": "Using Variables",
  "lessons": [
    {
      "id": 1,  
      "title": "Using Variables",
      "content": lesson_javascript_2_2,
    },
  ]
} 
const stage_javascript_7 = {
  "id": 7,
  "title": "Using Variables",
  "lessons": [
    {
      "id": 1,  
      "title": "Using Variables",
      "content": lesson_javascript_2_3,
    },
  ]
} 
const unit_javascript_2 = { 
  "id": 2,
  "title": "Using Variables",
  "stages": [
    stage_javascript_5,
    stage_javascript_6,
    stage_javascript_7,
  ]
}
const stage_javascript_8 = {
  "id": 8,
  "title": "Using True and False",
  "lessons": [

    {
      "id": 1,  
      "title": "Using True and False",
      "content": lesson_javascript_3_1,
    },

  ]
} 
const stage_javascript_9 = {
  "id": 9,
  "title": "Using True and False",
  "lessons": [
    {
      "id": 1,  
      "title": "Using True and False",
      "content": lesson_javascript_3_2,
    },

  ]
}  
const unit_javascript_3 = {
  "id": 3,
  "title": "Using True and False",
  "stages": [
    stage_javascript_8,
    stage_javascript_9,
  ]
} 
const stage_javascript_10 = {
  "id": 10,
  "title": "Checking Number Equality",
  "lessons": [  
    {
      "id": 1,  
      "title": "Checking Number Equality",
      "content": lesson_javascript_4_1,
    },
  ]
}  
const stage_javascript_11 = {
  "id": 11,
  "title": "Checking Number Equality",
  "lessons": [
    {
      "id": 1,    
      "title": "Checking Number Equality",
      "content": lesson_javascript_4_2,
    },
  ]
}  
const unit_javascript_4 = { 
  "id": 4,
  "title": "Checking Number Equality",
  "stages": [
    stage_javascript_10,
    stage_javascript_11,
  ]
}   
const stage_javascript_12 = {
  "id": 12,
  "title": "JavaScript Basics",
  "lessons": [
    {
      "id": 1,    
      "title": "JavaScript Basics",
      "content": lesson_javascript_5_1,
    },
  ]
}  
const stage_javascript_13 = { 
  "id": 13,
  "title": "JavaScript Basics",
  "lessons": [
    {
      "id": 1,  
      "title": "JavaScript Basics", 
      "content": lesson_javascript_5_2,
    },
  ]
}  
const unit_javascript_5 = { 
  "id": 5,
  "title": "JavaScript Basics", 
  "stages": [
    stage_javascript_12,
    stage_javascript_13,
  ]
}   
const section_javascript_1 = {
  "id": 1,
  "title": "JavaScript Basics",
  "units": [
    unit_javascript_1,
    unit_javascript_2,
    unit_javascript_3,
    unit_javascript_4,
    unit_javascript_5,
  ]
}
















import lesson_python_1_1 from '../../../lesson_dummy/Python/1. Creating Variables/1.json';

import lesson_python_2_1 from '../../../lesson_dummy/Python/2. Using Variables/1.json';
import lesson_python_2_2 from '../../../lesson_dummy/Python/2. Using Variables/2.json';
import lesson_python_2_3 from '../../../lesson_dummy/Python/2. Using Variables/3.json';

import lesson_python_3_1 from '../../../lesson_dummy/Python/3. True and False/1.json';
import lesson_python_3_2 from '../../../lesson_dummy/Python/3. True and False/2.json';

import lesson_python_4_1 from '../../../lesson_dummy/Python/4. Checking Number Equality/1.json';
import lesson_python_4_2 from '../../../lesson_dummy/Python/4. Checking Number Equality/2.json';

import lesson_python_5_1 from '../../../lesson_dummy/Python/5. Formatting Strings/1.json';

import lesson_python_6_1 from '../../../lesson_dummy/Python/6. Python Basics/1.json';

const stage_python_1 = {
  "id": 1,
  "title": "Creating Variables",
  "lessons": [
    {
      "id": 1,
      "title": "Creating Variables",
      "content": lesson_python_1_1,
    },
  ]
} 
const unit_python_1 = {
  "id": 1,
  "title": "Using Variables",
  "stages": [
    stage_python_1,
  ]
}
const stage_python_2 = {
  "id": 2,
  "title": "Using Variables",
  "lessons": [
    {
      "id": 1,  
      "title": "Using Variables",
      "content": lesson_python_2_1,
    },
  ]
}  
const stage_python_3 = {
  "id": 3,
  "title": "Using Variables",
  "lessons": [
    {
      "id": 1,  
      "title": "Using Variables",
      "content": lesson_python_2_2,
    },
  ]
}   
const stage_python_4 = {
  "id": 4,
  "title": "Using Variables",
  "lessons": [
    {
      "id": 1,    
      "title": "Using Variables",
      "content": lesson_python_2_3,
    },
  ]
}    
const unit_python_2 = {
  "id": 2,
  "title": "Using Variables",
  "stages": [
    stage_python_2,
    stage_python_3,
    stage_python_4,
  ]
}
const stage_python_5 = {
  "id": 5,
  "title": "True and False",  
  "lessons": [
    {
      "id": 1,  
      "title": "True and False",
      "content": lesson_python_3_1,
    },
  ]
} 
const stage_python_6 = {
  "id": 6,
  "title": "True and False",
  "lessons": [
    {
      "id": 1,    
      "title": "True and False",
      "content": lesson_python_3_2,
    },
  ]
} 
const unit_python_3 = {
  "id": 3,
  "title": "True and False",
  "stages": [
    stage_python_5,
    stage_python_6,
  ]
} 
const stage_python_7 = {
  "id": 7,
  "title": "Checking Number Equality",
  "lessons": [
    {
      "id": 1,    
      "title": "Checking Number Equality",
      "content": lesson_python_4_1,
    },
  ]
}  
const stage_python_8 = {
  "id": 8,
  "title": "Checking Number Equality",
  "lessons": [
    {
      "id": 1,      
      "title": "Checking Number Equality",
      "content": lesson_python_4_2,
    },
  ]
}  
const unit_python_4 = { 
  "id": 4,
  "title": "Checking Number Equality",
  "stages": [
    stage_python_7,
    stage_python_8,
  ]
} 
const stage_python_9 = {
  "id": 9,
  "title": "Formatting Strings",
  "lessons": [
    {
      "id": 1,    
      "title": "Formatting Strings",
      "content": lesson_python_5_1,
    },
  ]
} 
const unit_python_5 = {
  "id": 5,
  "title": "Formatting Strings",
  "stages": [
    stage_python_9,
  ]
}  
const stage_python_10 = { 
  "id": 11,
  "title": "Python Basics",
  "lessons": [
    {
      "id": 1,    
      "title": "Python Basics",
      "content": lesson_python_6_1,
    },
  ]
}  
const unit_python_6 = {
  "id": 6,
  "title": "Python Basics",
  "stages": [
    stage_python_10,
  ]
}  
const section_python_1 = {
  "id": 1,
  "title": "Python Basics",
  "units": [
    unit_python_1,
    unit_python_2,
    unit_python_3,
    unit_python_4,
    unit_python_5,
    unit_python_6,
  ]
}


export const curriculumList = [
  {
    "id": 1,
    "title": "HTML",
    "description": "HTML은 웹 페이지의 구조를 정의하는 마크업 언어입니다.",
    "image": "/src/assets/images/curriculumList/html.png",
    "sections": [
      section_html_1,
    ],
  },
  {
    "id": 2,
    "title": "JavaScript",
    "description": "JavaScript는 웹 페이지의 동작을 제어하는 프로그래밍 언어입니다.",
    "image": "/src/assets/images/curriculumList/js.png",
    "sections": [
      section_javascript_1,
    ],
  },
  {
    "id": 3,
    "title": "Python",
    "description": "Python은 쉽고 강력한 범용 프로그래밍 언어입니다.",
    "image": "/src/assets/images/curriculumList/python.png",
    "sections": [
      section_python_1,
    ],

  },

]

