
export const LessonDummy = [
  {
    step: 0,
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
    step: 1,
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
  
];
