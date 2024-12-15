
export const LessonDummy = [
  {
    "type": "Interactive",
    "id": 76804,
    "index": 0,
    "title": "HTML 학습을 시작해요",
    "preInteractionModules": [
      {
        "type": "image",
        "src": "https://images.getmimo.com/images/3715016a-67b7-42d1-9961-ab2e37adba3d",
        "visibleIf": "always"
      },
      {
        "type": "paragraph",
        "content": "환영합니다! HTML, CSS, JavaScript, React와 같은 웹 기술들을 배워볼 준비가 되셨나요?",
        "visibleIf": "always"
      },
      {
        "type": "paragraph",
        "content": "곧 실생활에서 사용할 수 있는 프로젝트를 만들게 될 거예요. 먼저 **HTML**부터 시작해봅시다.",
        "visibleIf": "always"
      }
    ],
    "interactionModule": null,
    "postInteractionModules": [],
    "isCorrect": true,
  },
  {
    "type": "Interactive",
    "id": 75802,
    "index": 1,
    "preInteractionModules": [
      {
        "type": "paragraph",
        "content": "하이퍼텍스트 마크업 언어(**HTML**)는 인터넷의 웹 페이지를 구조화하는 컴퓨터 언어입니다.",
        "visibleIf": "always"
      },
      {
        "type": "paragraph",
        "content": "HTML 위에 버튼, 이미지 등 다양한 요소를 추가해 멋진 웹 페이지를 만들 수 있습니다.",
        "visibleIf": "always"
      },
      {
        "type": "webview",
        "content": "<html>\n <head>\n  <style>\n   body {\n    font-family: sans-serif;\n    color: #2C3E50;\n    background-color: #9aa4d2;\n    margin-top: 5%;\n    min-height: 300px;\n   }\n   \n   button[disabled] {\n    opacity: 0.5;\n    cursor: default;\n   }\n   \n   h2,\n   h1,\n   #result {\n    text-align: center;\n    margin: 5px;\n   }\n   \n   #letterButtons {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    width: 100%;\n    padding: 0;\n    justify-content: center;\n   }\n   \n   button {\n    width: 40px;\n    height: 40px;\n    background-color: #34495E;\n    color: #FFF;\n    font-size: 14px;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    margin: 7px;\n    text-align: center;\n   }\n   \n   #result {\n    width: 80%;\n    height: 20px;\n    padding: 10px;\n    font-size: 1.3em;\n    margin: 0px auto;\n    border-radius: 5px;\n    color: white;\n    font-weight: bold;\n   }\n   \n   img {\n    width: 80%;\n    max-width:150px;\n    height: auto;\n    border-radius: 5px;\n    margin: 10px auto;\n    text-align: center;\n    display: none;\n    justify-content: center;\n    border: white 2px solid;\n   }\n  </style>\n </head>\n <body>\n  <h1 id=\"result\">Guess the letter</h1>\n  <h2>_ O G</h2>\n  <img>\n  <div id=\"letterButtons\">\n   <button>Q</button>\n   <button>R</button>\n   <button>D</button>\n  </div>\n  <script>\n   let letterButtons = document.querySelectorAll(\n    '#letterButtons button');\n   let result = document.getElementById('result');\n   let image = document.getElementsByTagName(\"img\")[0];\n   let correctLetter = 'D';\n   let word = document.querySelector('h2');\n   letterButtons.forEach(button => {\n    button.addEventListener('click', function() {\n     let letter = this.textContent;\n     if (letter !== correctLetter) {\n      button.disabled = true;\n     }\n     if (letter === correctLetter) {\n      result.innerHTML = 'Correct!';\n      result.style.color = \"#046865\";\n      image.style.display = \"flex\";\n      image.src = 'https://mimo.app/i/dog_yawn.png';\n      word.textContent = 'D O G';\n      letterButtons.forEach(button => {\n       button.disabled = true;\n      });\n     } else {\n      result.innerHTML = 'Try again';\n      result.style.color = \"#D1345B\";\n     }\n    });\n   });\n  </script>\n </body>\n</html>",
        "visibleIf": "always"
      }
    ],
    "interactionModule": null,
    "postInteractionModules": [],
    "isCorrect": true,
  },
  {
    "type": "Interactive",
    "id": 75817,
    "index": 2,
    "preInteractionModules": [
      {
        "type": "paragraph",
        "content": "HTML 코드 `<button>Like</button>`를 추가하면 \"Like\"라는 라벨을 가진 버튼을 만들 수 있습니다.",
        "visibleIf": "always"
      }
    ],
    "interactionModule": {
      "type": "codeFillTheGap",
      "files": [
        {
          "isInteractive": true,
          "name": "index.html",
          "content": "<button>Like</button>",
          "codeLanguage": "html"
        }
      ],
      "interactionOptions": [
        {
          "startIndex": 0,
          "endIndex": 21,
          "startLine": 0,
          "startPos": 0,
          "length": 21,
          "value": "<button>Like</button>",
          "correct": true
        }
      ],
      "wrongOptions": [],
      "output": null
    },
    "postInteractionModules": [
      {
        "type": "paragraph",
        "content": "`<button>Like</button>`을 선택하세요.",
        "visibleIf": "wrong"
      }
    ]
  },
  {
    "type": "Interactive",
    "id": 75819,
    "index": 3,
    "preInteractionModules": [
      {
        "type": "paragraph",
        "content": "HTML에서 버튼 태그는 `<button>`이라는 시작 태그와 `</button>`이라는 종료 태그를 사용합니다.",
        "visibleIf": "always"
      }
    ],
    "interactionModule": {
      "type": "codeFillTheGap",
      "files": [
        {
          "isInteractive": true,
          "name": "index.html",
          "content": "<button>Like</button>",
          "codeLanguage": "html"
        }
      ],
      "interactionOptions": [
        {
          "startIndex": 0,
          "endIndex": 8,
          "startLine": 0,
          "startPos": 0,
          "length": 8,
          "value": "<button>",
          "correct": true
        },
        {
          "startIndex": 12,
          "endIndex": 21,
          "startLine": 0,
          "startPos": 12,
          "length": 9,
          "value": "</button>",
          "correct": true
        }
      ],
      "wrongOptions": [],
      "output": null
    },
    "postInteractionModules": [
      {
        "type": "paragraph",
        "content": "`<button>`과 `</button>`을 순서대로 선택하세요.",
        "visibleIf": "wrong"
      }
    ]
  },
  {
    "type": "Interactive",
    "id": 75821,
    "index": 4,
    "preInteractionModules": [
      {
        "type": "paragraph",
        "content": "버튼의 시작 태그와 종료 태그 사이에 있는 텍스트는 버튼의 라벨이 됩니다.",
        "visibleIf": "always"
      }
    ],
    "interactionModule": {
      "type": "codeFillTheGap",
      "files": [
        {
          "isInteractive": true,
          "name": "index.html",
          "content": "<button>Like</button>",
          "codeLanguage": "html"
        }
      ],
      "interactionOptions": [
        {
          "startIndex": 8,
          "endIndex": 12,
          "startLine": 0,
          "startPos": 8,
          "length": 4,
          "value": "Like",
          "correct": true
        }
      ],
      "wrongOptions": [],
      "output": null
    },
    "postInteractionModules": [
      {
        "type": "paragraph",
        "content": "`Like`를 선택하세요.",
        "visibleIf": "wrong"
      }
    ]
  },
  {
    "type": "Interactive",
    "id": 75816,
    "index": 5,
    "preInteractionModules": [
      {
        "type": "paragraph",
        "content": "지금까지 배운 내용을 테스트해봅시다! 이 태그는 무엇인가요? `</button>`",
        "visibleIf": "always"
      }
    ],
    "interactionModule": {
      "type": "multipleChoice",
      "files": [],
      "items": [
        {
          "correct": true,
          "value": 0,
          "text": "종료 태그"
        },
        {
          "correct": false,
          "value": 1,
          "text": "시작 태그"
        }
      ],
      "isCode": false,
      "output": null
    },
    "postInteractionModules": [
      {
        "type": "paragraph",
        "content": "종료 태그입니다.",
        "visibleIf": "wrong"
      }
    ]
  },
  {
    "type": "Interactive",
    "id": 76812,
    "index": 6,
    "preInteractionModules": [
      {
        "type": "paragraph",
        "content": "다음 중 **잘못 작성된** 태그는 무엇인가요?",
        "visibleIf": "always"
      }
    ],
    "interactionModule": {
      "type": "multipleChoice",
      "files": [],
      "items": [
        {
          "correct": false,
          "value": 0,
          "text": "`<button>`"
        },
        {
          "correct": false,
          "value": 1,
          "text": "`</button>`"
        },
        {
          "correct": true,
          "value": 2,
          "text": "`<button\\>`"
        }
      ],
      "isCode": false,
      "output": null
    },
    "postInteractionModules": [
      {
        "type": "paragraph",
        "content": "`<button\\>`을 선택하세요.",
        "visibleIf": "wrong"
      }
    ]
  },
  {
    "type": "Interactive",
    "id": 130087,
    "index": 7,
    "preInteractionModules": [
      {
        "type": "paragraph",
        "content": "이전 예제를 기억하시나요? 이제 **Q**, **R**, **D** 버튼을 만드는 과정을 배워봅시다.",
        "visibleIf": "always"
      },
      {
        "type": "webview",
        "content": "<html>...</html>",
        "visibleIf": "always"
      }
    ],
    "interactionModule": null,
    "postInteractionModules": []
  },
  {
    "type": "Interactive",
    "id": 75824,
    "index": 8,
    "preInteractionModules": [
      {
        "type": "paragraph",
        "content": "라벨이 \"Q\"인 버튼을 만들어보세요.",
        "visibleIf": "always"
      }
    ],
    "interactionModule": {
      "type": "codeFillTheGap",
      "files": [
        {
          "isInteractive": true,
          "name": "index.html",
          "content": "<button>Q</button>",
          "codeLanguage": "html"
        }
      ],
      "interactionOptions": [
        {
          "startIndex": 0,
          "endIndex": 8,
          "startLine": 0,
          "startPos": 0,
          "length": 8,
          "value": "<button>",
          "correct": true
        },
        {
          "startIndex": 8,
          "endIndex": 9,
          "startLine": 0,
          "startPos": 8,
          "length": 1,
          "value": "Q",
          "correct": true
        },
        {
          "startIndex": 9,
          "endIndex": 18,
          "startLine": 0,
          "startPos": 9,
          "length": 9,
          "value": "</button>",
          "correct": true
        }
      ],
      "wrongOptions": [],
      "output": null
    },
    "postInteractionModules": [
      {
        "type": "paragraph",
        "content": "`<button>`, `Q`, 그리고 `</button>` 순서대로 선택하세요.",
        "visibleIf": "wrong"
      }
    ]
  },
  {
    "type": "Interactive",
    "id": 75825,
    "index": 10,
    "preInteractionModules": [
      {
        "type": "paragraph",
        "content": "라벨이 \"D\"인 버튼을 만들어 보세요. 시작 태그와 종료 태그를 반드시 사용해야 합니다.",
        "visibleIf": "always"
      }
    ],
    "interactionModule": {
      "type": "codeFillTheGap",
      "files": [
        {
          "isInteractive": true,
          "name": "index.html",
          "content": "<button>Q</button>\n<button>R</button>\n<button>D</button>",
          "codeLanguage": "html"
        }
      ],
      "interactionOptions": [
        {
          "startIndex": 38,
          "endIndex": 46,
          "startLine": 2,
          "startPos": 0,
          "length": 8,
          "value": "<button>",
          "correct": true
        },
        {
          "startIndex": 46,
          "endIndex": 47,
          "startLine": 2,
          "startPos": 8,
          "length": 1,
          "value": "D",
          "correct": true
        },
        {
          "startIndex": 47,
          "endIndex": 56,
          "startLine": 2,
          "startPos": 9,
          "length": 9,
          "value": "</button>",
          "correct": true
        }
      ],
      "wrongOptions": [
        "<button>"
      ],
      "output": null
    },
    "postInteractionModules": [
      {
        "visibleIf": "correct",
        "type": "webview",
        "content": "<html>\n <head>...</head>\n <body>...</body>\n</html>"
      },
      {
        "type": "paragraph",
        "content": "`<button>`, `D`, 그리고 `</button>`을 순서대로 선택하세요.",
        "visibleIf": "wrong"
      }
    ]
  },
  {
    "type": "Interactive",
    "id": 75823,
    "index": 11,
    "preInteractionModules": [
      {
        "type": "paragraph",
        "content": "잘 하셨습니다! 이제 버튼의 구조를 만드는 방법을 배웠습니다.",
        "visibleIf": "always"
      },
      {
        "type": "paragraph",
        "content": "다음 레슨에서는 모든 웹 페이지에 존재하는 **HTML 요소**에 대해 배워보겠습니다.",
        "visibleIf": "always"
      }
    ],
    "interactionModule": null,
    "postInteractionModules": []
  }
];

