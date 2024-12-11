
export const LessonDummy = [
  {
    step: 0,
    lessonId: "unique-id",
    title: "올바른 코드를 선택하세요",
    inputType: "single-select", // "single-select", "multi-select", "text-input"
    content: {
      description: "아래 HTML, CSS, JS 코드를 참고하여 문제를 해결하세요.",
      contextCode: [
        {
          type: "html",
          label: "HTML",
          code: "<p id=\"demo\">시연입니다.</p>"
        },
        {
          type: "css",
          label: "CSS",
          code: "p { color: blue; font-size: 14px; }"
        },
        {
          type: "js",
          label: "JavaScript",
          code: "document.getElementById(\"demo\").innerHTML = \"Hello World!\";"
        }
      ],
      displayEnvironment: ["html", "css", "js"],
      
      options: [
        {
          id: "option-1",
          text: "getElementById"
        },
        {
          id: "option-2",
          text: "getElementByClass"
        },
        {
          id: "option-3",
          text: "getElementByName"
        },
        {
          id: "option-4",
          text: "getElement"
        }
      ],
      answer: ["option-1"] // 정답을 ID 배열로 표현
    }
  },
  {
    step: 0,
    type: 1,
    title: "올바른 코드를 선택하세요",
    text: "어떤 HTML 요소 안에 JavaScript를 넣나요?",
    component: null,
    free_next: false,
    user_select_data: null,
    options: [
      {
        text: "<script>",
      },
      {
        text: "<scripting>",
      },
      {
        text: "<javascript>",
      },
      {
        text: "<js>",
      },
    ],
    answer: "<script>",
    isCorrect: null,
  },
  {
    step: 1,
    type: 2,
    title: "올바른 코드를 선택하세요",
    text: `아래 HTML 요소의 내용을 변경하는 올바른 JavaScript 구문은 무엇입니까?`,
    sub_text : `<p id="demo">시연입니다.</p>`,
    component: null,
    free_next: false,
    user_select_data: null,
    options: [
      {
        text: `document.getElementById("demo").innerHTML = "Hello World!";`,
      },
      {
        text: `#demo.innerHTML = "Hello World!";`,
      },
      {
        text: `document.getElementByName("p").innerHTML = "Hello World!";`,
      },
      {
        text: `document.getElement("p").innerHTML = "Hello World!";`,
      },
    ],
    answer: "<script>",
    isCorrect: null,
  },
  {
    lessonId: "unique-id",
    title: "올바른 코드를 선택하세요",
    content: {
      description: "아래 HTML, CSS, JS 코드를 참고하여 문제를 해결하세요.",
      contextCode: [
        {
          type: "html",
          label: "HTML",
          code: "<p id=\"demo\">시연입니다.</p>"
        },
        {
          type: "css",
          label: "CSS",
          code: "p { color: blue; font-size: 14px; }"
        },
        {
          type: "js",
          label: "JavaScript",
          code: "document.getElementById(\"demo\").innerHTML = \"Hello World!\";"
        }
      ],
      displayEnvironment: ["html", "css", "js"],
      inputType: "single-select", // "single-select", "multi-select", "text-input"
      options: [
        {
          id: "option-1",
          text: "getElementById"
        },
        {
          id: "option-2",
          text: "getElementByClass"
        },
        {
          id: "option-3",
          text: "getElementByName"
        },
        {
          id: "option-4",
          text: "getElement"
        }
      ],
      answer: ["option-1"] // 정답을 ID 배열로 표현
    }
  }
];
