// ID : 1
const HTML_1 = {
  "lessons": [
    {
      "id": 1,
      "title": "문서 구조와 핵심 태그",
      "isCompleted": false,
      "sliders": [
        {
          "id": 0,
          "title": "🎯 레벨업 시작하기",
          "role": "🎬 오프닝",
          "modules": [
            {
              "id": 0,
              "type": "image",
              "src": "https://s3.ghmate.com/codingpt/lessons/intro_img.png",
              "size": "lg",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "paragraph",
              "content": "# html 구조와 태그에 대해 알아볼까?",
              "tts" : "https://s3.ghmate.com/codingpt/class/1/1/1/audio/001_html_구조와_태그에_대해_알아볼까.mp3",
              "visibility": { "type": "step", "value": 1 }
            }
          ]
        },
        {
          "id": 1,
          "title": "HTML 문서의 뼈대(doctype, html, head, body)",
          "role": "📖 개념",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "# 🧱 HTML 문서의 뼈대",
              "tts" : "https://s3.ghmate.com/codingpt/class/1/1/1/audio/002_HTML_문서의_뼈대.mp3",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "paragraph",
              "content": "## <!DOCTYPE html>\n문서가 **HTML5**임을 선언",
              "tts" : "https://s3.ghmate.com/codingpt/class/1/1/1/audio/003_독타입_html은_문서가아_HTML5_임을_선언_합니다.mp3",
              "visibility": { "type": "step", "value": 2 }
            },
            {
              "id": 2,
              "type": "paragraph",
              "content": "## <html>\n문서의 **루트 요소**",
              "tts" : "https://s3.ghmate.com/codingpt/class/1/1/1/audio/004_html_태그는_문서의_루트_요소.mp3",
              "visibility": { "type": "step", "value": 3 }
            },
            {
              "id": 3,
              "type": "paragraph",
              "content": "## <head>\n메타데이터(문서 정보, 인코딩, 외부 리소스)",
              "tts" : "https://s3.ghmate.com/codingpt/class/1/1/1/audio/005_head_태그는_메타데이터.mp3",
              "visibility": { "type": "step", "value": 4 }
            },
            {
              "id": 4,
              "type": "paragraph",
              "content": "## <body>\n화면에 표시되는 **콘텐츠**",
              "tts" : "https://s3.ghmate.com/codingpt/class/1/1/1/audio/006_body_태그는_화면에_표시되는_콘텐츠_입니다.mp3",
              "visibility": { "type": "step", "value": 5 }
            },
            {
              "id": 5,
              "type": "multipleChoice",
              "tts" : "https://s3.ghmate.com/codingpt/class/1/1/1/audio/007_화면에_직접_표시되는_내용을_담는_태그는_무엇일까요.mp3",
              "questions": [
                {
                  "title": "화면에 직접 표시되는 내용을 담는 태그는 무엇일까요?",
                  "interactionOptions": [
                    { "label": "<head>" },
                    { "label": "<meta>" },
                    { "label": "<link>" },
                    { "label": "<body>" }
                  ],
                  "answer": { "isCorrect": null, "answer": 3, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 6 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 정답! 화면에 보이는 콘텐츠는 `<body>` 안에 작성합니다.",
                    "tts" : "https://s3.ghmate.com/codingpt/class/1/1/1/audio/008_정답_화면에_보이는_콘텐츠는_body_태그_안에_작성합니다.mp3",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 정답은 `<body>`입니다. `<head>`는 문서 정보, `<meta>/<link>`는 설정·연결에 사용돼요.",
                    "tts" : "https://s3.ghmate.com/codingpt/class/1/1/1/audio/009_정답은_body_태그입니다_head_태그는_문서_정보_meta_태그와_link_태그는_.mp3",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 6,
              "type": "codeFillTheGap",
              "title": "빈칸에 들어갈 코드를 선택해 주세요.",
              "tts" : "https://s3.ghmate.com/codingpt/class/1/1/1/audio/010_빈칸에_들어갈_코드를_선택해_주세요.mp3",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "",
                  "url": "/code/9",
                  "height": 245,
                  "isInteractive": true,
                  "inputLength": 3,
                  "interactionOptions": [
                    { "id": "option-1", "value": "<html>", "disabled": false },
                    { "id": "option-2", "value": "</head>", "disabled": false },
                    { "id": "option-3", "value": "<style>", "disabled": false },
                    { "id": "option-4", "value": "</body>", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "<html>", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "</head>", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "</body>", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 7 },
              "result": {
                "totalStep": 1,
                "modules": [
                
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "## 🎉 **잘했어요!**\n구조가 올바르게 완성됐어요. \n\n👉 아래 **결과 브라우저**를 확인해보세요!",
                    "tts" : "https://s3.ghmate.com/codingpt/class/1/1/1/audio/011_잘했어요_구조가_올바르게_완성됐어요_아래_결과_브라우저를_확인해보세요.mp3",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "## ❌ **틀렸어요!**\n`<html>` 안에는 `<head>`와 `<body>`가 **나란히** 있어야 해요.  \n\n⚠️ 그리고 `<body>`는 반드시 `<head>` **바깥**에 있어야 합니다.",
                    "tts" : "https://s3.ghmate.com/codingpt/class/1/1/1/audio/012_틀렸어요_html_태그_안에는_head_태그와_body_태그가_나란히_있어야_하며_bo.mp3",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                
                ]
              }
            },
            {
              "id": 7,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}</style></head><body><h1>안녕하세요</h1><p>HTML 문서 구조를 배우는 중!</p></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 8 }
            }
          ]
        },
        {
          "id": 2,
          "title": "제목과 문단(h1~h6, p)",
          "role": "📖 개념",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 📝 텍스트의 골격: 제목과 문단\n- `<h1>` ~ `<h6>`: **중요도**에 따른 제목\n- `<p>`: 하나의 **문단**을 의미\n> 핵심 제목은 보통 `h1`을 한 페이지에 1개만 사용합니다.",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "페이지의 핵심 제목에 가장 적합한 태그는?",
                  "interactionOptions": [
                    { "label": "<h6>" },
                    { "label": "<h1>" },
                    { "label": "<p>" },
                    { "label": "<span>" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 정답! 핵심 제목은 `<h1>`을 사용하고, 하위 제목은 `<h2>~<h6>`로 계층화해요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 정답은 `<h1>`입니다. 핵심 제목은 보통 한 페이지에 1개만 두는 편이에요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<h{{BLANK-1}}>나의 블로그</h{{BLANK-1}}>\n<{{BLANK-2}}>첫 글입니다.</{{BLANK-2}}>",
                  "url": "/code/10",
                  "height": 85,
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "<h1>", "disabled": false },
                    { "id": "option-2", "value": "</h1>", "disabled": false },
                    { "id": "option-3", "value": "<p>", "disabled": false },
                    { "id": "option-4", "value": "</p>", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "<h1>", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "</p>", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 잘했어요! 제목은 `<h1>`, 문단은 `<p>`로 마크업합니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 시작·종료 태그가 **항상 짝**을 이뤄야 해요. 제목과 문단 모두 예외가 아닙니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}</style></head><body><h1>나의 블로그</h1><p>첫 글입니다.</p></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 3,
          "title": "링크와 이미지(a, img / href, src, alt)",
          "role": "📖 개념",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🔗🖼️ 링크와 이미지\n- `<a href=\"...\">`: 다른 문서/사이트로 이동하는 **링크**\n- `<img src=\"...\" alt=\"...\">`: 이미지를 표시, `alt`는 대체 텍스트(접근성 핵심)",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "접근성 관점에서 이미지에 꼭 필요한 속성은?",
                  "interactionOptions": [
                    { "label": "title" },
                    { "label": "alt" },
                    { "label": "width" },
                    { "label": "loading" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 맞아요! `alt`는 이미지를 설명해 스크린리더가 내용을 전달할 수 있게 해요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 정답은 `alt`입니다. 시각정보를 텍스트로 대체해 접근성을 보장합니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
						  "id": 2,
						  "type": "codeFillTheGap",
						  "files": [
						    {
						      "name": "index.html",
						      "language": "html",
						      "content": "<p>더 배우려면 <a {{BLANK-1}}=\"\">MDN</a>으로 이동!</p>\n<img {{BLANK-2}}=\"/images/logo.png\" {{BLANK-3}}=\"로고 이미지\" />",
						      "url": "/code/11",
                  "height": 130,
						      "isInteractive": true,
						      "inputLength": 3,
						      "interactionOptions": [
						        { "id": "option-1", "value": "alt", "disabled": false },
						        { "id": "option-2", "value": "src", "disabled": false },
						        { "id": "option-3", "value": "link", "disabled": false },
						        { "id": "option-4", "value": "href", "disabled": false }
						      ],
						      "answers": [
						        { "isCorrect": null, "answer": "href", "userAnswer": null, "optionElIndex": null },
						        { "isCorrect": null, "answer": "src", "userAnswer": null, "optionElIndex": null },
						        { "isCorrect": null, "answer": "alt", "userAnswer": null, "optionElIndex": null }
						      ]
						    }
						  ],
						  "visibility": { "type": "step", "value": 3 },
						  "result": {
						    "totalStep": 1,
						    "modules": [
						      {
						        "id": 0,
						        "type": "paragraph",
						        "content": "🎉 잘했어요! 링크는 `href`, 이미지는 `src`와 `alt` 속성이 꼭 필요해요.",
						        "visibility": { "type": "step", "value": 1 },
						        "condition": "correct"
						      },
						      {
						        "id": 1,
						        "type": "paragraph",
						        "content": "❌ 정답은 `href`, `src`, `alt`입니다. 각각 링크 주소, 이미지 경로, 대체 텍스트를 의미합니다.",
						        "visibility": { "type": "step", "value": 1 },
						        "condition": "wrong"
						      }
						    ]
						  }
						},
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}img{height:40px}</style></head><body><p>더 배우려면 <a href=\"https://developer.mozilla.org/ko/\">MDN 문서</a>로 이동!</p><img src=\"/images/logo.png\" alt=\"로고 이미지\" /></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 4,
          "title": "목록과 버튼(ul/ol/li, button)",
          "role": "📖 개념",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### ✅ 목록과 상호작용 요소\n- `<ul>/<ol>`: 비순서/순서 목록\n- `<li>`: 목록 항목\n- `<button>`: 클릭 가능한 버튼",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "번호가 자동으로 매겨지는 목록에 알맞은 태그 조합은?",
                  "interactionOptions": [
                    { "label": "<ul> + <li>" },
                    { "label": "<ol> + <li>" },
                    { "label": "<div> + <li>" },
                    { "label": "<p> + <li>" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 맞아요! `<ol>`은 순서(번호) 목록이고 `<ul>`은 불릿 목록이에요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 정답은 `<ol> + <li>`입니다. `<ul>`은 불릿(•) 목록이에요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<h2>할 일</h2>\n<{{BLANK-1}}>\n  <li>HTML 공부</li>\n  <li>CSS 연습</li>\n</{{BLANK-1}}>\n<{{BLANK-2}}>확인</{{BLANK-2}}>",
                  "url": "/code/12",
                  "height": 175,
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "<li>", "disabled": false },
                    { "id": "option-2", "value": "</li>", "disabled": false },
                    { "id": "option-3", "value": "<button>", "disabled": false },
                    { "id": "option-4", "value": "</button>", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "<li>", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "</button>", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 좋아요! 목록과 버튼이 올바르게 마크업되었습니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ `<li>`는 **반드시** `<ul>` 또는 `<ol>`로 감싸야 해요. 시작/종료 태그 매칭도 확인!",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}button{padding:8px 12px;border:1px solid #ccc;border-radius:8px}</style></head><body><h2>할 일</h2><ul><li>HTML 공부</li><li>CSS 연습</li></ul><button>확인</button></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 5,
          "title": "시맨틱 구조 태그(header/nav/main/section/article/footer)",
          "role": "📖 개념",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🧩 시맨틱 태그로 구조 잡기\n- `<header>`: 상단 영역(로고, 제목)\n- `<nav>`: 내비게이션\n- `<main>`: 페이지 **핵심 콘텐츠**\n- `<section>/<article>`: 논리적 구획/독립 콘텐츠\n- `<footer>`: 하단 정보",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "페이지의 **주요 콘텐츠** 영역을 나타내는 태그는?",
                  "interactionOptions": [
                    { "label": "<header>" },
                    { "label": "<main>" },
                    { "label": "<nav>" },
                    { "label": "<footer>" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 정답! 주요 콘텐츠는 `<main>` 안에 배치합니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 정답은 `<main>`입니다. `<header>/<nav>/<footer>`는 주변 구조를 담당해요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<{{BLANK-1}}>\n  <h1>MySite</h1>\n  <{{BLANK-2}}>\n    <a href=\"#\">Home</a>\n    <a href=\"#\">Docs</a>\n  </{{BLANK-2}}>\n</{{BLANK-1}}>\n<{{BLANK-3}}>\n  <section>\n    <article>\n      <h2>소개</h2>\n      <p>시맨틱 태그 연습</p>\n    </article>\n  </section>\n</{{BLANK-3}}>",
                  "url": "/code/13",
                  "height": 380,
                  "isInteractive": true,
                  "inputLength": 3,
                  "interactionOptions": [
                    { "id": "option-1", "value": "<header>", "disabled": false },
                    { "id": "option-2", "value": "<nav>", "disabled": false },
                    { "id": "option-3", "value": "<main>", "disabled": false },
                    { "id": "option-4", "value": "<footer>", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "<header>", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "<nav>", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "<main>", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 좋아요! 시맨틱 태그로 구조가 한눈에 들어옵니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 각 영역의 역할에 맞는 시맨틱 태그를 사용해야 접근성과 유지보수가 좋아집니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}header,main,footer{padding:12px;border:1px solid #ddd;border-radius:8px;margin-bottom:8px}nav a{margin-right:8px}</style></head><body><header><h1>MySite</h1><nav><a href=\"#\">Home</a><a href=\"#\">Docs</a></nav></header><main><section><article><h2>소개</h2><p>시맨틱 태그 연습</p></article></section></main><footer>© 2025</footer></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 6,
          "title": "표의 기초(table, tr, th, td)",
          "role": "📖 개념",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 📊 표의 기초\n- `<table>`: 표 전체\n- `<tr>`: 행(row)\n- `<th>`: 제목 셀(헤더)\n- `<td>`: 일반 데이터 셀",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "표의 **제목 셀**을 나타내는 태그는 무엇일까요?",
                  "interactionOptions": [
                    { "label": "<td>" },
                    { "label": "<tr>" },
                    { "label": "<th>" },
                    { "label": "<caption>" }
                  ],
                  "answer": { "isCorrect": null, "answer": 2, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 정답! `<th>`는 헤더 셀로, 기본적으로 굵게/가운데 정렬됩니다(브라우저 기본 스타일).",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 정답은 `<th>`입니다. `<td>`는 일반 데이터 셀, `<tr>`는 행을 의미합니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<{{BLANK-1}}>\n  <tr>\n    <{{BLANK-2}}>이름</{{BLANK-2}}>\n    <{{BLANK-2}}>나이</{{BLANK-2}}>\n  </tr>\n  <tr>\n    <{{BLANK-3}}>홍길동</{{BLANK-3}}>\n    <{{BLANK-3}}>17</{{BLANK-3}}>\n  </tr>\n</{{BLANK-1}}>",
                  "url": "/code/14",
                  "height": 270,
                  "isInteractive": true,
                  "inputLength": 3,
                  "interactionOptions": [
                    { "id": "option-1", "value": "<td>", "disabled": false },
                    { "id": "option-2", "value": "<tr>", "disabled": false },
                    { "id": "option-3", "value": "<th>", "disabled": false },
                    { "id": "option-4", "value": "<table>", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "<table>", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "<th>", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "<td>", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 잘했습니다! `<th>`는 제목, `<td>`는 일반 셀이에요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 제목 셀은 `<th>`, 데이터 셀은 `<td>`로 구분해야 표 구조가 명확해집니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}table{border-collapse:collapse}th,td{border:1px solid #ddd;padding:8px 12px}</style></head><body><table><tr><th>이름</th><th>나이</th></tr><tr><td>홍길동</td><td>17</td></tr></table></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        }
      ]
    }
  ]
}

// ID : 2
const HTML_2 = {
  "lessons": [
    {
      "id": 2,
      "title": "텍스트와 인라인 요소",
      "isCompleted": false,
      "sliders": [
	      {
          "id": 0,
          "title": "🎯 레벨업 시작하기",
          "modules": [
            {
              "id": 0,
              "type": "image",
              "src": "https://s3.ghmate.com/codingpt/lessons/intro_img.png",
              "size": "lg",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "paragraph",
              "content": "# 텍스트와 인라인요소에 대해 알아볼까?",
              "visibility": { "type": "step", "value": 2 }
            }
          ]
        },
        {
          "id": 1,
          "title": "의미 기반 강조: <strong> vs <em>",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### ✍️ 의미로 강조하기\n- `<strong>`: **강한 중요성**(의미 강조, 스크린리더 강세)\n- `<em>`: *강조(어조 변화)*, 중첩 시 강조 단계 상승\n시각 스타일뿐 아니라 **의미**가 중요합니다.",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "다음 중 **강한 중요성**을 나타낼 때 더 알맞은 태그는?",
                  "interactionOptions": [
                    { "label": "<b>" },
                    { "label": "<em>" },
                    { "label": "<strong>" },
                    { "label": "<i>" }
                  ],
                  "answer": { "isCorrect": null, "answer": 2, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 정답! `<strong>`은 중요성을, `<em>`은 어조의 강조를 나타냅니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 정답은 `<strong>`입니다. 의미적 중요성은 `<strong>`, 어조 변화는 `<em>`이 더 적합해요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<p>오늘 발표는 <{{BLANK-1}}>매우 중요</{{BLANK-1}}>합니다. 특히 일정은 <{{BLANK-2}}>꼭</{{BLANK-2}}> 지켜주세요.</p>",
                  "url": "/code/15",
                  "height": 85,
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "<em>", "disabled": false },
                    { "id": "option-2", "value": "<b>", "disabled": false },
                    { "id": "option-3", "value": "<i>", "disabled": false },
                    { "id": "option-4", "value": "<strong>", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "<strong>", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "<em>", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 잘했어요! 의미가 드러나는 마크업은 접근성에 유리합니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 중요성은 `<strong>`, 어조 강조는 `<em>`을 사용해 의미를 명확히 표현하세요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}</style></head><body><p>오늘 발표는 <strong>매우 중요</strong>합니다. 특히 일정은 <em>꼭</em> 지켜주세요.</p></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 2,
          "title": "줄바꿈과 문단: <br> vs <p>",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 📄 줄바꿈 처리\n- `<p>`: **하나의 문단**(의미 단위)\n- `<br>`: **줄바꿈**(시각적 개행, 의미 없음)\n주소/시·노래 가사처럼 의미 있는 문단이 아니면 `<br>`을 쓸 수 있어요.",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "아래 중 `<br>` 사용이 더 적절한 경우는?",
                  "interactionOptions": [
                    { "label": "긴 소개 글 단락 구분" },
                    { "label": "주소를 줄바꿈해 두 줄로 표기" },
                    { "label": "기사 본문 문단 분리" },
                    { "label": "섹션 간 구획 나누기" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 정답! 주소 같은 **한 덩어리 내 줄바꿈**에는 `<br>`이 적절합니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ `<p>`는 문단, `<br>`은 줄바꿈용입니다. 주소/가사 등에서 줄만 바꿀 때 `<br>`을 써요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "음식 주문",
                  "url": "/code/16",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "<p>", "disabled": false },
                    { "id": "option-2", "value": "<br>", "disabled": false },
                    { "id": "option-3", "value": "</p>", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "<br>", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 잘했어요! 문단 내부 줄바꿈은 `<br>`이 간단합니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 문단을 바꿀 땐 `<p>`, 한 문단에서 줄만 바꿀 땐 `<br>`을 쓰세요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}</style></head><body><p>서울특별시 강남구 테헤란로 123<br>코딩빌딩 5층</p></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 3,
          "title": "인라인 컨테이너: <span>의 쓰임",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🧩 <span>\n- 인라인 **컨테이너**(의미 없음)\n- 의미가 없다면 `<span>`으로 묶고, 의미가 있다면 적절한 **시맨틱 태그** 사용을 고려해요.",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "아래 중 `<span>` 사용이 **가장** 적절한 경우는?",
                  "interactionOptions": [
                    { "label": "문서의 주요 제목을 감싸기" },
                    { "label": "내비게이션 메뉴 영역 감싸기" },
                    { "label": "문장 중 특정 단어만 색상 변경" },
                    { "label": "기사 본문 주요 영역 묶기" }
                  ],
                  "answer": { "isCorrect": null, "answer": 2, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 정답! 의미 없이 스타일만 줄 땐 `<span>`이 좋아요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ `<span>`은 인라인 컨테이너예요. 의미가 있으면 `<h1>`, `<nav>`, `<main>` 같은 시맨틱 태그를 고려하세요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<p>오늘 <{{BLANK-1}} class=\"point\">중요</{{BLANK-1}}> 공지입니다.</p>",
                  "url": "/code/17",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "span", "disabled": false },
                    { "id": "option-2", "value": "em", "disabled": false },
                    { "id": "option-3", "value": "strong", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "span", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 좋아요! 스타일만 주고 싶다면 `<span>`으로 감싸는 게 깔끔해요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 의미 강조가 목적이면 `<strong>`/`<em>`을, 단순 스타일이면 `<span>`을 쓰세요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}.point{color:#2b7cff;font-weight:700}</style></head><body><p>오늘 <span class=\"point\">중요</span> 공지입니다.</p></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 4,
          "title": "하이라이트와 보조 텍스트: <mark> / <small>",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🔦 하이라이트 & 보조\n- `<mark>`: 검색 결과 등 **하이라이트** 표시\n- `<small>`: 저작권, 주석 등 **부가 정보**(덜 중요한 텍스트)",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "검색 키워드에 색 배경으로 하이라이트하려면?",
                  "interactionOptions": [
                    { "label": "<strong>" },
                    { "label": "<em>" },
                    { "label": "<mark>" },
                    { "label": "<small>" }
                  ],
                  "answer": { "isCorrect": null, "answer": 2, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 맞아요! `<mark>`는 시각적 하이라이트에 적합합니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 정답은 `<mark>`입니다. `<small>`은 덜 중요한 정보를 표시할 때 사용해요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<p>검색어: <{{BLANK-1}}>HTML</{{BLANK-1}}></p>\n<p><{{BLANK-2}}>© 2025 CodingPT</{{BLANK-2}}></p>",
                  "url": "/code/18",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "<small>", "disabled": false },
                    { "id": "option-2", "value": "<mark>", "disabled": false },
                    { "id": "option-3", "value": "<span>", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "<mark>", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "<small>", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 좋아요! `<mark>`와 `<small>`의 용도가 분명해졌어요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ `<mark>`는 강조 표시, `<small>`은 보조/각주 같은 부가 텍스트에 사용합니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}</style></head><body><p>검색어: <mark>HTML</mark></p><p><small>© 2025 CodingPT</small></p></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 5,
          "title": "코드와 키 입력: <code> / <kbd>",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### ⌨️ 코드/키 입력 표시\n- `<code>`: 코드 조각 표시\n- `<kbd>`: 키보드 입력(단축키 등) 표시\n문서에서 기술적 요소를 명확히 구분할 수 있어요.",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "사용자에게 `Ctrl + S` 단축키를 표시하려면 어느 태그가 적절할까요?",
                  "interactionOptions": [
                    { "label": "<code>" },
                    { "label": "<kbd>" },
                    { "label": "<samp>" },
                    { "label": "<var>" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 정답! 키 입력은 `<kbd>`로 감싸면 의미가 전달됩니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 정답은 `<kbd>`입니다. `<code>`는 코드 조각을 표시할 때 사용합니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<p>저장하려면 <{{BLANK-0}}>Ctrl</{{BLANK-0}}> + <{{BLANK-1}}>S</{{BLANK-1}}>를 누르세요.</p>\n<p>코드 예: <{{BLANK-2}}>console.log('Hello');</{{BLANK-2}}></p>",
                  "url": "/code/19",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "<code>", "disabled": false },
                    { "id": "option-2", "value": "<span>", "disabled": false },
                    { "id": "option-3", "value": "<kbd>", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "<kbd>", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "<code>", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 좋아요! `<kbd>`와 `<code>`의 차이를 잘 구분했어요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 키 입력은 `<kbd>`, 코드 조각은 `<code>`로 의미를 구분하세요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}kbd{border:1px solid #ccc;border-bottom-width:2px;border-radius:4px;padding:2px 4px}</style></head><body><p>저장하려면 <kbd>Ctrl</kbd> + <kbd>S</kbd>를 누르세요.</p><p>코드 예: <code>console.log('Hello');</code></p></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 6,
          "title": "특수문자와 엔티티: &lt; &gt; &amp;",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🔤 특수문자 엔티티\n- `<` → `&lt;`\n- `>` → `&gt;`\n- `&` → `&amp;`\n태그/연산 기호를 **텍스트로 표시**할 때 엔티티를 사용합니다.",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "`1 < 2 && 3 > 1`을 텍스트로 안전하게 출력하려면 `<`은 무엇으로 바꿔야 할까요?",
                  "interactionOptions": [
                    { "label": "&lt;" },
                    { "label": "&gt;" },
                    { "label": "&amp;" },
                    { "label": "&quot;" }
                  ],
                  "answer": { "isCorrect": null, "answer": 0, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 정답! `<`는 `&lt;`로 바꿔야 태그로 인식되지 않습니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ `<`는 `&lt;`, `>`는 `&gt;`, `&`는 `&amp;`로 바꿉니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<p>표현식: {{BLANK-1}}1 {{BLANK-2}} 2 {{BLANK-3}}{{BLANK-2}}{{BLANK-2}} 3 {{BLANK-4}} 1</p>",
                  "url": "/code/20",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "&lt;", "disabled": false },
                    { "id": "option-2", "value": "&gt;", "disabled": false },
                    { "id": "option-3", "value": "&amp;", "disabled": false },
                    { "id": "option-4", "value": "", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "&lt;", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 좋습니다! 이제 기호가 안전하게 텍스트로 출력됩니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ `<`→`&lt;`, `>`→`&gt;`, `&`→`&amp;`를 기억하세요. (빈칸은 텍스트 시작용)",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}</style></head><body><p>표현식: 1 &lt; 2 &amp;&amp; 3 &gt; 1</p></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        }
      ]
    }
  ]
}

// ID : 3
const HTML_3 = {
  "lessons": [
    {
      "id": 3,
      "title": "폼(Forms) 입문",
      "isCompleted": false,
      "sliders": [
	      {
          "id": 0,
          "title": "🎯 레벨업 시작하기",
          "modules": [
            {
              "id": 0,
              "type": "image",
              "src": "https://s3.ghmate.com/codingpt/lessons/intro_img.png",
              "size": "lg",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "paragraph",
              "content": "# 폼(Forms)에 대해 알아볼까?",
              "visibility": { "type": "step", "value": 2 }
            }
          ]
        },
        {
          "id": 1,
          "title": "폼 기본 구조: <form>, <label>, <input>",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🧭 폼의 뼈대\n- `<form>`: 입력을 **묶어** 서버로 전송하는 컨테이너\n- `<label for=\"...\">`: 레이블을 **특정 입력과 연결**(접근성↑)\n- `<input>`: 실제 사용자 **입력 필드**",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "레이블과 입력을 연결하려면 레이블에는 `for`, 입력에는 어떤 속성이 같은 값으로 있어야 할까요?",
                  "interactionOptions": [
                    { "label": "name" },
                    { "label": "id" },
                    { "label": "value" },
                    { "label": "class" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 정답! `<label for>` ↔ `<input id>`가 같아야 연결됩니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ `for`는 레이블, `id`는 입력. 두 값이 같아야 클릭 시 포커스가 이동해요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<form>\n  <label {{BLANK-1}}=\"email\">이메일</label>\n  <input {{BLANK-2}}=\"email\" type=\"email\" name=\"email\" />\n</form>",
                  "url": "/code/21",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "id", "disabled": false },
                    { "id": "option-2", "value": "for", "disabled": false },
                    { "id": "option-3", "value": "placeholder", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "for", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "id", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 잘했어요! 레이블-입력 연결이 완성됐습니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ `label for`와 `input id`는 값이 같아야 합니다. 접근성에 꼭 필요해요!",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}label{display:block;margin-bottom:6px}input{padding:8px;border:1px solid #ccc;border-radius:8px}</style></head><body><form><label for=\"email\">이메일</label><input id=\"email\" type=\"email\" name=\"email\" /></form></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 2,
          "title": "입력 타입 기본: text / email / password",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🔤 입력 타입\n- `type=\"text\"`: 일반 텍스트\n- `type=\"email\"`: 이메일 형식 기본 검사\n- `type=\"password\"`: 비밀번호(가려진 표시)",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "이메일 형식을 기본적으로 체크하는 입력 타입은?",
                  "interactionOptions": [
                    { "label": "text" },
                    { "label": "email" },
                    { "label": "password" },
                    { "label": "search" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 맞아요! `email` 타입은 기본 검증이 들어갑니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 정답은 `email`입니다. 형식 검사와 모바일 키보드 최적화가 됩니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<form>\n  <input type=\"{{BLANK-1}}\" name=\"username\" />\n  <input type=\"{{BLANK-2}}\" name=\"email\" />\n  <input type=\"{{BLANK-3}}\" name=\"password\" />\n</form>",
                  "url": "/code/22",
                  "isInteractive": true,
                  "inputLength": 3,
                  "interactionOptions": [
                    { "id": "option-1", "value": "text", "disabled": false },
                    { "id": "option-2", "value": "name", "disabled": false },
                    { "id": "option-3", "value": "password", "disabled": false },
                    { "id": "option-4", "value": "email", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "text", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "email", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "password", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 좋습니다! 기본 타입 3종 세팅 완료!",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ `text`/`email`/`password`의 용도를 다시 확인해 주세요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}input{display:block;margin:6px 0;padding:8px;border:1px solid #ccc;border-radius:8px}</style></head><body><form><input type=\"text\" name=\"username\" /><input type=\"email\" name=\"email\" /><input type=\"password\" name=\"password\" /></form></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 3,
          "title": "placeholder와 required",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### ✒️ 힌트와 필수 입력\n- `placeholder`: 입력 전 **도움말 텍스트**\n- `required`: 제출 전 **빈값 금지**(기본 검증)",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "입력 칸에 흐릿한 안내 문구를 보여주는 속성은?",
                  "interactionOptions": [
                    { "label": "label" },
                    { "label": "placeholder" },
                    { "label": "title" },
                    { "label": "hint" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 맞아요! `placeholder`는 입력 전 힌트를 제공합니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 정답은 `placeholder`입니다. 필수 입력은 `required`로 지정해요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<form>\n  <input type=\"email\" name=\"email\" {{BLANK-1}}=\"이메일\" {{BLANK-2}} />\n</form>",
                  "url": "/code/23",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "maxlength", "disabled": false },
                    { "id": "option-2", "value": "required", "disabled": false },
                    { "id": "option-3", "value": "placeholder", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "placeholder", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "required", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 잘했어요! 힌트와 필수 조건을 모두 적용했습니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ `placeholder`는 힌트, `required`는 필수 입력을 위한 속성입니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}input{padding:8px;border:1px solid #ccc;border-radius:8px}</style></head><body><form><input type=\"email\" name=\"email\" placeholder=\"이메일\" required /></form></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 4,
          "title": "한 개만 고르기/여러 개 선택: radio / checkbox",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### ✅ 선택 입력\n- `radio`: **하나만** 선택, 같은 `name` 공유\n- `checkbox`: **여러 개** 선택 가능(각자 독립적으로 체크)",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "두 옵션 중 **하나만** 선택하도록 만들 때 적합한 입력 타입은?",
                  "interactionOptions": [
                    { "label": "checkbox" },
                    { "label": "radio" },
                    { "label": "text" },
                    { "label": "select" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 정답! `radio`는 같은 `name`을 공유할 때 하나만 선택됩니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ `radio`는 단일 선택, `checkbox`는 복수 선택에 사용합니다. `name` 공유 여부가 핵심!",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<form>\n  <label for=\"lv-basic\">Basic</label>\n  <input type=\"{{BLANK-1}}\" id=\"lv-basic\" {{BLANK-2}}=\"level\" value=\"basic\" />\n  <label for=\"lv-pro\">Pro</label>\n  <input type=\"{{BLANK-1}}\" id=\"lv-pro\" {{BLANK-2}}=\"level\" value=\"pro\" />\n</form>",
                  "url": "/code/24",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "radio", "disabled": false },
                    { "id": "option-2", "value": "checkbox", "disabled": false },
                    { "id": "option-3", "value": "name", "disabled": false },
                    { "id": "option-4", "value": "value", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "radio", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "name", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 잘했어요! 같은 `name`을 공유해 단일 선택이 동작합니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ `radio` + 같은 `name` 조합이 단일 선택의 핵심입니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}label{margin-right:8px}</style></head><body><form><label for=\"lv-basic\">Basic</label><input type=\"radio\" id=\"lv-basic\" name=\"level\" value=\"basic\" /><label for=\"lv-pro\">Pro</label><input type=\"radio\" id=\"lv-pro\" name=\"level\" value=\"pro\" /></form></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 5,
          "title": "여러 줄 입력과 선택: textarea / select",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 📝 멀티라인 & 목록 선택\n- `<textarea>`: 여러 줄 텍스트 입력\n- `<select><option>`: 목록에서 선택(단일/다중은 `multiple`로 제어)",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "여러 줄의 텍스트를 입력받기에 적절한 태그는?",
                  "interactionOptions": [
                    { "label": "<input type=\"text\">" },
                    { "label": "<textarea>" },
                    { "label": "<select>" },
                    { "label": "<output>" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 정답! 여러 줄은 `<textarea>`가 적합합니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 정답은 `<textarea>`입니다. `<input type=\"text\">`는 한 줄 입력이에요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<form>\n  <{{BLANK-1}} name=\"city\">\n    <option>Seoul</option>\n    <option>Busan</option>\n  </{{BLANK-1}}>\n  <{{BLANK-2}} rows=\"3\" cols=\"30\">메모</{{BLANK-2}}>\n</form>",
                  "url": "/code/25",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "select", "disabled": false },
                    { "id": "option-2", "value": "option", "disabled": false },
                    { "id": "option-3", "value": "datalist", "disabled": false },
                    { "id": "option-4", "value": "textarea", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "select", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "textarea", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 좋습니다! 선택과 여러 줄 입력을 함께 구성했어요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ `<select>`와 `<textarea>`의 역할을 구분해 주세요. 둘 다 닫는 태그가 필요합니다!",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}select,textarea{display:block;margin:6px 0;padding:8px;border:1px solid #ccc;border-radius:8px}</style></head><body><form><select name=\"city\"><option>Seoul</option><option>Busan</option></select><textarea rows=\"3\" cols=\"30\">메모</textarea></form></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 6,
          "title": "폼 제출: action, method, submit 버튼",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 📮 제출의 기본\n- `action`: 데이터를 보낼 **주소(URL)**\n- `method`: 전송 방식(`GET`은 URL에 노출, `POST`는 본문으로 전송)\n- `<button type=\"submit\">`: 제출 트리거 버튼",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "데이터가 URL에 붙어 전송되는 방식은?",
                  "interactionOptions": [
                    { "label": "GET" },
                    { "label": "POST" },
                    { "label": "PUT" },
                    { "label": "PATCH" }
                  ],
                  "answer": { "isCorrect": null, "answer": 0, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 정답! 간단 조회/검색 폼에 자주 쓰입니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 정답은 `GET`입니다. 민감한 정보는 `POST`로 보내는 게 안전해요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<form action=\"/signup\" method=\"{{BLANK-1}}\">\n  <input type=\"text\" name=\"username\" placeholder=\"이름\" required />\n  <button type=\"{{BLANK-2}}\">가입</button>\n</form>",
                  "url": "/code/26",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "get", "disabled": false },
                    { "id": "option-2", "value": "post", "disabled": false },
                    { "id": "option-3", "value": "submit", "disabled": false },
                    { "id": "option-4", "value": "button", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "post", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "submit", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 잘했습니다! 전송 방식과 제출 버튼의 역할을 구분했어요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ `method`는 `get`/`post` 중 하나, 버튼 제출은 `type=\"submit\"`을 사용합니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}input,button{padding:8px;border:1px solid #ccc;border-radius:8px}button{margin-left:6px}</style></head><body><form action=\"/signup\" method=\"get\"><input type=\"text\" name=\"username\" placeholder=\"이름\" required /><button type=\"submit\">가입</button></form></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        }
      ]
    }
  ]
}

// ID : 4
const HTML_4 = {
  "lessons": [
    {
      "id": 3,
      "title": "폼(Forms) 입문",
      "isCompleted": false,
      "sliders": [
	      {
          "id": 0,
          "title": "🎯 레벨업 시작하기",
          "modules": [
            {
              "id": 0,
              "type": "image",
              "src": "https://s3.ghmate.com/codingpt/lessons/intro_img.png",
              "size": "lg",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "paragraph",
              "content": "# 폼(Forms)에 대해 알아볼까?",
              "visibility": { "type": "step", "value": 2 }
            }
          ]
        },
        {
          "id": 1,
          "title": "폼 기본 구조: <form>, <label>, <input>",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🧭 폼의 뼈대\n- `<form>`: 입력을 **묶어** 서버로 전송하는 컨테이너\n- `<label for=\"...\">`: 레이블을 **특정 입력과 연결**(접근성↑)\n- `<input>`: 실제 사용자 **입력 필드**",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "레이블과 입력을 연결하려면 레이블에는 `for`, 입력에는 어떤 속성이 같은 값으로 있어야 할까요?",
                  "interactionOptions": [
                    { "label": "name" },
                    { "label": "id" },
                    { "label": "value" },
                    { "label": "class" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 정답! `<label for>` ↔ `<input id>`가 같아야 연결됩니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ `for`는 레이블, `id`는 입력. 두 값이 같아야 클릭 시 포커스가 이동해요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<form>\n  <label {{BLANK-1}}=\"email\">이메일</label>\n  <input {{BLANK-2}}=\"email\" type=\"email\" name=\"email\" />\n</form>",
                  "url": "/code/21",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "id", "disabled": false },
                    { "id": "option-2", "value": "for", "disabled": false },
                    { "id": "option-3", "value": "placeholder", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "for", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "id", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 잘했어요! 레이블-입력 연결이 완성됐습니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ `label for`와 `input id`는 값이 같아야 합니다. 접근성에 꼭 필요해요!",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}label{display:block;margin-bottom:6px}input{padding:8px;border:1px solid #ccc;border-radius:8px}</style></head><body><form><label for=\"email\">이메일</label><input id=\"email\" type=\"email\" name=\"email\" /></form></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 2,
          "title": "입력 타입 기본: text / email / password",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🔤 입력 타입\n- `type=\"text\"`: 일반 텍스트\n- `type=\"email\"`: 이메일 형식 기본 검사\n- `type=\"password\"`: 비밀번호(가려진 표시)",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "이메일 형식을 기본적으로 체크하는 입력 타입은?",
                  "interactionOptions": [
                    { "label": "text" },
                    { "label": "email" },
                    { "label": "password" },
                    { "label": "search" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 맞아요! `email` 타입은 기본 검증이 들어갑니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 정답은 `email`입니다. 형식 검사와 모바일 키보드 최적화가 됩니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<form>\n  <input type=\"{{BLANK-1}}\" name=\"username\" />\n  <input type=\"{{BLANK-2}}\" name=\"email\" />\n  <input type=\"{{BLANK-3}}\" name=\"password\" />\n</form>",
                  "url": "/code/22",
                  "isInteractive": true,
                  "inputLength": 3,
                  "interactionOptions": [
                    { "id": "option-1", "value": "text", "disabled": false },
                    { "id": "option-2", "value": "name", "disabled": false },
                    { "id": "option-3", "value": "password", "disabled": false },
                    { "id": "option-4", "value": "email", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "text", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "email", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "password", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 좋습니다! 기본 타입 3종 세팅 완료!",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ `text`/`email`/`password`의 용도를 다시 확인해 주세요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}input{display:block;margin:6px 0;padding:8px;border:1px solid #ccc;border-radius:8px}</style></head><body><form><input type=\"text\" name=\"username\" /><input type=\"email\" name=\"email\" /><input type=\"password\" name=\"password\" /></form></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 3,
          "title": "placeholder와 required",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### ✒️ 힌트와 필수 입력\n- `placeholder`: 입력 전 **도움말 텍스트**\n- `required`: 제출 전 **빈값 금지**(기본 검증)",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "입력 칸에 흐릿한 안내 문구를 보여주는 속성은?",
                  "interactionOptions": [
                    { "label": "label" },
                    { "label": "placeholder" },
                    { "label": "title" },
                    { "label": "hint" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 맞아요! `placeholder`는 입력 전 힌트를 제공합니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 정답은 `placeholder`입니다. 필수 입력은 `required`로 지정해요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<form>\n  <input type=\"email\" name=\"email\" {{BLANK-1}}=\"이메일\" {{BLANK-2}} />\n</form>",
                  "url": "/code/23",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "maxlength", "disabled": false },
                    { "id": "option-2", "value": "required", "disabled": false },
                    { "id": "option-3", "value": "placeholder", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "placeholder", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "required", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 잘했어요! 힌트와 필수 조건을 모두 적용했습니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ `placeholder`는 힌트, `required`는 필수 입력을 위한 속성입니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}input{padding:8px;border:1px solid #ccc;border-radius:8px}</style></head><body><form><input type=\"email\" name=\"email\" placeholder=\"이메일\" required /></form></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 4,
          "title": "한 개만 고르기/여러 개 선택: radio / checkbox",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### ✅ 선택 입력\n- `radio`: **하나만** 선택, 같은 `name` 공유\n- `checkbox`: **여러 개** 선택 가능(각자 독립적으로 체크)",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "두 옵션 중 **하나만** 선택하도록 만들 때 적합한 입력 타입은?",
                  "interactionOptions": [
                    { "label": "checkbox" },
                    { "label": "radio" },
                    { "label": "text" },
                    { "label": "select" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 정답! `radio`는 같은 `name`을 공유할 때 하나만 선택됩니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ `radio`는 단일 선택, `checkbox`는 복수 선택에 사용합니다. `name` 공유 여부가 핵심!",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<form>\n  <label for=\"lv-basic\">Basic</label>\n  <input type=\"{{BLANK-1}}\" id=\"lv-basic\" {{BLANK-2}}=\"level\" value=\"basic\" />\n  <label for=\"lv-pro\">Pro</label>\n  <input type=\"{{BLANK-1}}\" id=\"lv-pro\" {{BLANK-2}}=\"level\" value=\"pro\" />\n</form>",
                  "url": "/code/24",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "radio", "disabled": false },
                    { "id": "option-2", "value": "checkbox", "disabled": false },
                    { "id": "option-3", "value": "name", "disabled": false },
                    { "id": "option-4", "value": "value", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "radio", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "name", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 잘했어요! 같은 `name`을 공유해 단일 선택이 동작합니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ `radio` + 같은 `name` 조합이 단일 선택의 핵심입니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}label{margin-right:8px}</style></head><body><form><label for=\"lv-basic\">Basic</label><input type=\"radio\" id=\"lv-basic\" name=\"level\" value=\"basic\" /><label for=\"lv-pro\">Pro</label><input type=\"radio\" id=\"lv-pro\" name=\"level\" value=\"pro\" /></form></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 5,
          "title": "여러 줄 입력과 선택: textarea / select",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 📝 멀티라인 & 목록 선택\n- `<textarea>`: 여러 줄 텍스트 입력\n- `<select><option>`: 목록에서 선택(단일/다중은 `multiple`로 제어)",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "여러 줄의 텍스트를 입력받기에 적절한 태그는?",
                  "interactionOptions": [
                    { "label": "<input type=\"text\">" },
                    { "label": "<textarea>" },
                    { "label": "<select>" },
                    { "label": "<output>" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 정답! 여러 줄은 `<textarea>`가 적합합니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 정답은 `<textarea>`입니다. `<input type=\"text\">`는 한 줄 입력이에요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<form>\n  <{{BLANK-1}} name=\"city\">\n    <option>Seoul</option>\n    <option>Busan</option>\n  </{{BLANK-1}}>\n  <{{BLANK-2}} rows=\"3\" cols=\"30\">메모</{{BLANK-2}}>\n</form>",
                  "url": "/code/25",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "select", "disabled": false },
                    { "id": "option-2", "value": "option", "disabled": false },
                    { "id": "option-3", "value": "datalist", "disabled": false },
                    { "id": "option-4", "value": "textarea", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "select", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "textarea", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 좋습니다! 선택과 여러 줄 입력을 함께 구성했어요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ `<select>`와 `<textarea>`의 역할을 구분해 주세요. 둘 다 닫는 태그가 필요합니다!",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}select,textarea{display:block;margin:6px 0;padding:8px;border:1px solid #ccc;border-radius:8px}</style></head><body><form><select name=\"city\"><option>Seoul</option><option>Busan</option></select><textarea rows=\"3\" cols=\"30\">메모</textarea></form></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 6,
          "title": "폼 제출: action, method, submit 버튼",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 📮 제출의 기본\n- `action`: 데이터를 보낼 **주소(URL)**\n- `method`: 전송 방식(`GET`은 URL에 노출, `POST`는 본문으로 전송)\n- `<button type=\"submit\">`: 제출 트리거 버튼",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "데이터가 URL에 붙어 전송되는 방식은?",
                  "interactionOptions": [
                    { "label": "GET" },
                    { "label": "POST" },
                    { "label": "PUT" },
                    { "label": "PATCH" }
                  ],
                  "answer": { "isCorrect": null, "answer": 0, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 정답! 간단 조회/검색 폼에 자주 쓰입니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 정답은 `GET`입니다. 민감한 정보는 `POST`로 보내는 게 안전해요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<form action=\"/signup\" method=\"{{BLANK-1}}\">\n  <input type=\"text\" name=\"username\" placeholder=\"이름\" required />\n  <button type=\"{{BLANK-2}}\">가입</button>\n</form>",
                  "url": "/code/26",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "get", "disabled": false },
                    { "id": "option-2", "value": "post", "disabled": false },
                    { "id": "option-3", "value": "submit", "disabled": false },
                    { "id": "option-4", "value": "button", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "post", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "submit", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 잘했습니다! 전송 방식과 제출 버튼의 역할을 구분했어요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ `method`는 `get`/`post` 중 하나, 버튼 제출은 `type=\"submit\"`을 사용합니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}input,button{padding:8px;border:1px solid #ccc;border-radius:8px}button{margin-left:6px}</style></head><body><form action=\"/signup\" method=\"get\"><input type=\"text\" name=\"username\" placeholder=\"이름\" required /><button type=\"submit\">가입</button></form></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        }
      ]
    }
  ]
}

// ID : 5
const HTML_5 = {
  "lessons": [
    {
      "id": 5,
      "title": "이미지와 미디어",
      "isCompleted": false,
      "sliders": [
	      {
          "id": 0,
          "title": "🎯 레벨업 시작하기",
          "modules": [
            {
              "id": 0,
              "type": "image",
              "src": "https://s3.ghmate.com/codingpt/lessons/intro_img.png",
              "size": "lg",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "paragraph",
              "content": "# 이미지와 미디어에 대해 알아볼까?",
              "visibility": { "type": "step", "value": 2 }
            }
          ]
        },
        {
          "id": 1,
          "title": "img의 필수: src와 alt",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🖼️ 이미지 기본\n- `<img src=\"...\" alt=\"...\">`\n- `src`: 이미지 **경로**\n- `alt`: 이미지 **대체 텍스트**(이미지 로드 실패/스크린리더용)\n> 장식용 이미지는 빈 `alt=\"\"`로 표기하면 스크린리더가 건너뜁니다.",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "접근성을 위해 콘텐츠 이미지에 **반드시** 제공해야 하는 속성은?",
                  "interactionOptions": [
                    { "label": "title" },
                    { "label": "width" },
                    { "label": "alt" },
                    { "label": "loading" }
                  ],
                  "answer": { "isCorrect": null, "answer": 2, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 정답! `alt`는 이미지 의미를 텍스트로 전달합니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 정답은 `alt`입니다. 시각 정보를 텍스트로 보완해 줍니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<p>우리 팀 로고</p>\n<img {{BLANK-1}}=\"/images/team-logo.png\" {{BLANK-2}}=\"팀 로고\"/>",
                  "url": "/code/33",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "href", "disabled": false },
                    { "id": "option-2", "value": "src", "disabled": false },
                    { "id": "option-3", "value": "alt", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "src", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "alt", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 잘했어요! `src`와 `alt`가 올바르게 채워졌습니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 링크는 `href`, 이미지는 `src`입니다. 의미 설명은 `alt`로 제공하세요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}img{height:48px}</style></head><body><p>우리 팀 로고</p><img src=\"/images/team-logo.png\" alt=\"팀 로고\"/></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 2,
          "title": "크기 지정: width/height 속성",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 📐 크기 지정\n- HTML 속성 `width`/`height`로 **본래 크기**(픽셀) 지정\n- CSS로도 스타일 가능(예: `img{width:100%}`)\n> HTML 속성으로 가로·세로를 지정하면 레이아웃이 안정적입니다.",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "HTML에서 이미지 가로·세로를 속성으로 직접 지정하려면?",
                  "interactionOptions": [
                    { "label": "width / height" },
                    { "label": "size / ratio" },
                    { "label": "w / h" },
                    { "label": "cols / rows" }
                  ],
                  "answer": { "isCorrect": null, "answer": 0, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 맞아요! `width`와 `height` 속성을 사용합니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 정답은 `width`/`height`입니다. 다른 표기는 표준 속성이 아니에요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<img src=\"/images/profile.jpg\" {{BLANK-1}}=\"200\" {{BLANK-2}}=\"150\" alt=\"프로필\"/>",
                  "url": "/code/34",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "size", "disabled": false },
                    { "id": "option-2", "value": "height", "disabled": false },
                    { "id": "option-3", "value": "width", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "width", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "height", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 좋아요! 가로·세로가 속성으로 정확히 지정되었습니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 올바른 속성 이름은 `width`/`height`입니다. 철자와 위치를 확인하세요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}img{object-fit:cover}</style></head><body><img src=\"/images/profile.jpg\" width=\"200\" height=\"150\" alt=\"프로필\"/></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 3,
          "title": "figure/figcaption으로 캡션 제공",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🧩 이미지+설명 묶기\n- `<figure>`: 미디어와 설명을 **하나의 단위**로 묶음\n- `<figcaption>`: 이미지/도표에 대한 **설명(캡션)**",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "이미지 설명(캡션)에 사용하는 태그는?",
                  "interactionOptions": [
                    { "label": "<caption>" },
                    { "label": "<figcaption>" },
                    { "label": "<summary>" },
                    { "label": "<legend>" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 정답! `<figcaption>`이 이미지/도표 캡션 표준입니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ `<figcaption>`을 사용해 캡션을 제공합니다. `<caption>`은 표(`<table>`)의 제목이에요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<figure>\n  <img src=\"/images/mountain.jpg\" alt=\"산 풍경\"/>\n  <{{BLANK-1}}>여름의 한라산 전경</{{BLANK-1}}>\n</figure>",
                  "url": "/code/35",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "<caption>", "disabled": false },
                    { "id": "option-2", "value": "<figcaption>", "disabled": false },
                    { "id": "option-3", "value": "<summary>", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "<figcaption>", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 잘했어요! 이미지와 캡션이 의미 있게 묶였습니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 캡션은 `<figcaption>`으로 제공해야 시맨틱 구조가 맞습니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}figure{margin:0}figcaption{color:#555;font-size:14px;margin-top:6px}</style></head><body><figure><img src=\"/images/mountain.jpg\" alt=\"산 풍경\"/><figcaption>여름의 한라산 전경</figcaption></figure></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 4,
          "title": "picture/source로 반응형 이미지",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🧠 상황별 이미지 교체\n- `<picture><source ...><img ...></picture>`\n- `media`/`type`/`srcset`으로 뷰포트·포맷에 맞는 이미지를 제공\n- 마지막 `<img>`는 **폴백**(기본 이미지)",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "뷰포트 크기에 따라 다른 이미지를 제공하려면 어떤 요소 조합이 적절할까요?",
                  "interactionOptions": [
                    { "label": "<picture> + <source> + <img>" },
                    { "label": "<figure> + <figcaption>" },
                    { "label": "<div> + background-image" },
                    { "label": "<img> + <caption>" }
                  ],
                  "answer": { "isCorrect": null, "answer": 0, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 정답! `<picture>` 구문을 사용하면 조건별 이미지를 제공할 수 있어요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 반응형 이미지는 `<picture>`와 `<source>` 조합을 사용합니다. `<img>` 하나만으로는 어렵습니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<picture>\n  <source {{BLANK-1}}=\"(min-width: 600px)\" {{BLANK-2}}=\"/images/banner-large.jpg\">\n  <img src=\"/images/banner.jpg\" alt=\"프로모션 배너\"/>\n</picture>",
                  "url": "/code/36",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "media", "disabled": false },
                    { "id": "option-2", "value": "srcset", "disabled": false },
                    { "id": "option-3", "value": "sizes", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "media", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "srcset", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 좋아요! 뷰포트 조건과 이미지 후보를 제대로 지정했습니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ `source`에는 조건(`media`)과 이미지 후보(`srcset`)를 지정합니다. 폴백 `<img>`도 꼭 포함하세요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;margin:0}img{width:100%;display:block}</style></head><body><picture><source media=\"(min-width: 600px)\" srcset=\"/images/banner-large.jpg\"><img src=\"/images/banner.jpg\" alt=\"프로모션 배너\"/></picture></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 5,
          "title": "이미지 포맷 고르기: JPG/PNG/SVG/WebP",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🧪 포맷 선택 가이드\n- **JPG**: 사진/그라데이션에 적합(손실압축)\n- **PNG**: 투명/아이콘(무손실, 또렷함)\n- **SVG**: 로고/아이콘 **벡터**(확대에도 선명)\n- **WebP/AVIF**: 최신 고압축(브라우저 지원 확인)",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "확대/축소해도 **선명함**이 유지되어 로고에 가장 알맞은 포맷은?",
                  "interactionOptions": [
                    { "label": "JPG" },
                    { "label": "PNG" },
                    { "label": "SVG" },
                    { "label": "GIF" }
                  ],
                  "answer": { "isCorrect": null, "answer": 2, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 정답! 로고·아이콘에는 벡터 기반인 `SVG`가 최적입니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 로고/아이콘은 크기 변화에 강한 `SVG`가 적합합니다. 사진은 보통 `JPG`가 좋아요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<img src=\"/images/logo.{{BLANK-1}}\" alt=\"회사 로고\"/>",
                  "url": "/code/37",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "jpg", "disabled": false },
                    { "id": "option-2", "value": "svg", "disabled": false },
                    { "id": "option-3", "value": "gif", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "svg", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 좋아요! 로고는 `SVG`로 선명하게 표시됩니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 로고/아이콘에는 `SVG`를 우선 고려하세요. 비트맵은 확대 시 깨질 수 있어요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title></head><body><img src=\"/images/logo.svg\" alt=\"회사 로고\"/></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 6,
          "title": "이미지에 링크 걸기(a > img)",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🔗 이미지 클릭 이동\n- 이미지를 링크로 만들려면 `<a>`로 **감싼다**: `<a href=\"...\"><img ...></a>`\n- 링크 텍스트가 없다면 `alt`가 설명을 대신합니다(접근성 고려).",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "이미지를 클릭하면 상세 페이지로 이동하게 하려면 올바른 마크업은?",
                  "interactionOptions": [
                    { "label": "<a><img ...></a>" },
                    { "label": "<img><a ...></a>" },
                    { "label": "<button alt=\"link\">" },
                    { "label": "<link><img ...></link>" }
                  ],
                  "answer": { "isCorrect": null, "answer": 0, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 정답! 링크는 `<a>` 요소이고, 이미지를 그 안에 넣습니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ `<a>`가 링크 요소입니다. `<img>` 바깥에서 감싸야 클릭 영역이 전체 이미지가 됩니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<a href=\"/products/1\">\n  <{{BLANK-1}} src=\"/images/p1.jpg\" alt=\"상품 1 미리보기\"/>\n</a>",
                  "url": "/code/38",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "media", "disabled": false },
                    { "id": "option-2", "value": "image", "disabled": false },
                    { "id": "option-3", "value": "img", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "img", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 좋아요! 이미지 전체가 링크로 동작합니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 이미지 링크는 `<a>`로 감싸고 내부에 `<img>`를 배치해야 합니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}img{height:100px;border-radius:10px}</style></head><body><a href=\"/products/1\"><img src=\"/images/p1.jpg\" alt=\"상품 1 미리보기\"/></a></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        }
      ]
    }
  ]
}

// ID : 6
const HTML_6 = {
  "lessons": [
    {
      "id": 6,
      "title": "시맨틱 레이아웃(헤더/내비/메인/푸터)",
      "isCompleted": false,
      "sliders": [
	      {
          "id": 0,
          "title": "🎯 레벨업 시작하기",
          "modules": [
            {
              "id": 0,
              "type": "image",
              "src": "https://s3.ghmate.com/codingpt/lessons/intro_img.png",
              "size": "lg",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "paragraph",
              "content": "# 시맨틱 레이아웃에 대해 알아볼까?",
              "visibility": { "type": "step", "value": 2 }
            }
          ]
        },
        {
          "id": 1,
          "title": "개요",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "시맨틱 레이아웃은 문서의 의미를 명확히 드러냅니다. <header>는 머리글, <nav>는 내비게이션, <main>은 페이지 핵심 콘텐츠, <section>/<article>은 구획/독립 글, <aside>는 보조, <footer>는 바닥글을 나타내어 검색·보조기기·협업에 유리합니다.",
              "visibility": { "type": "step", "value": 1 }
            }
          ]
        }
      ]
    }
  ]
}

// ID : 7
const HTML_7 = {
  "lessons": [
    {
      "id": 7,
      "title": "목록과 표(Table) 기초",
      "isCompleted": false,
      "sliders": [
	      {
          "id": 0,
          "title": "🎯 레벨업 시작하기",
          "modules": [
            {
              "id": 0,
              "type": "image",
              "src": "https://s3.ghmate.com/codingpt/lessons/intro_img.png",
              "size": "lg",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "paragraph",
              "content": "# 목록과 표에 대해 간단히 알아볼까?",
              "visibility": { "type": "step", "value": 2 }
            }
          ]
        },
        {
          "id": 1,
          "title": "개요",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "<ul>/<ol>/<li>로 목록을, <dl>/<dt>/<dd>로 용어/설명을 표현합니다. 표는 <table> 안에 <thead>/<tbody>를 나누고, 행/헤더/셀(<tr>/<th>/<td>)을 올바르게 배치해 의미 있는 데이터 구조를 만듭니다.",
              "visibility": { "type": "step", "value": 1 }
            }
          ]
        }
      ]
    }
  ]
}

// ID : 8
const HTML_8 = {
  "lessons": [
    {
      "id": 8,
      "title": "폼 심화—유효성 검증과 접근성",
      "isCompleted": false,
      "sliders": [
	      {
          "id": 0,
          "title": "🎯 레벨업 시작하기",
          "modules": [
            {
              "id": 0,
              "type": "image",
              "src": "https://s3.ghmate.com/codingpt/lessons/intro_img.png",
              "size": "lg",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "paragraph",
              "content": "# 폼(Forms)에 대해 더 자세히 알아볼까?",
              "visibility": { "type": "step", "value": 2 }
            }
          ]
        },
        {
          "id": 1,
          "title": "개요",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "폼 심화에서는 브라우저 기본 유효성(required, min/max, pattern)을 활용하고, <label>과의 정확한 연결, <fieldset>/<legend>로 그룹을 명확히 하며 aria-describedby 등으로 힌트를 제공합니다. placeholder는 라벨 대체가 아님에 유의합니다.",
              "visibility": { "type": "step", "value": 1 }
            }
          ]
        }
      ]
    }
  ]
}

// ID : 9
const HTML_9 = {
  "lessons": [
    {
      "id": 9,
      "title": "멀티미디어 심화—오디오/비디오/캡션",
      "isCompleted": false,
      "sliders": [
	      {
          "id": 0,
          "title": "🎯 레벨업 시작하기",
          "modules": [
            {
              "id": 0,
              "type": "image",
              "src": "https://s3.ghmate.com/codingpt/lessons/intro_img.png",
              "size": "lg",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "paragraph",
              "content": "# 멀티미디어에 대해 더 알아볼까?",
              "visibility": { "type": "step", "value": 2 }
            }
          ]
        },
        {
          "id": 1,
          "title": "개요",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "<video>/<audio>는 controls로 조작을 제공하고, 자동재생은 사용자 경험을 위해 muted 조건을 권장합니다. <track kind=\"captions\">로 자막/캡션을 제공해 접근성을 높이고, poster로 로딩 전 썸네일을 지정할 수 있습니다.",
              "visibility": { "type": "step", "value": 1 }
            }
          ]
        }
      ]
    }
  ]
}

// ID : 10
const HTML_10 = {
  "lessons": [
    {
      "id": 10,
      "title": "문서 메타데이터와 SEO 기초",
      "isCompleted": false,
      "sliders": [
	      {
          "id": 0,
          "title": "🎯 레벨업 시작하기",
          "modules": [
            {
              "id": 0,
              "type": "image",
              "src": "https://s3.ghmate.com/codingpt/lessons/intro_img.png",
              "size": "lg",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "paragraph",
              "content": "# 문서 메타데이터와 SEO에 대해 간단히 알아볼까?",
              "visibility": { "type": "step", "value": 2 }
            }
          ]
        },
        {
          "id": 1,
          "title": "개요",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "<meta charset>와 <meta name=\"viewport\">로 기본을 갖추고, <title>과 meta description으로 검색 스니펫 품질을 높입니다. 파비콘(link rel=\"icon\"), Open Graph/Twitter Card 메타를 설정해 공유 미리보기까지 깔끔히 구성합니다.",
              "visibility": { "type": "step", "value": 1 }
            }
          ]
        }
      ]
    }
  ]
}

// ID : 11
const CSS_1 = {
  "lessons": [
    {
      "id": 11,
      "title": "CSS 적용 방법과 기본 문법",
      "isCompleted": false,
      "sliders": [
	      {
          "id": 0,
          "title": "🎯 레벨업 시작하기",
          "modules": [
            {
              "id": 0,
              "type": "image",
              "src": "https://s3.ghmate.com/codingpt/lessons/intro_img.png",
              "size": "lg",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "paragraph",
              "content": "# CSS 적용 방법과 기본 문법에 대해 알아볼까?",
              "visibility": { "type": "step", "value": 2 }
            }
          ]
        },
        {
          "id": 1,
          "title": "CSS 적용 방법 3가지 (inline / internal / external)",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🎯 CSS 적용 방법\n- **Inline**: 요소에 직접 `style` 속성 사용\n- **Internal**: `<head>` 안에 `<style>` 블록 작성\n- **External**: `<link rel=\"stylesheet\" href=\"...\">`로 외부 CSS 연결\n> 규모가 커질수록 **외부 스타일시트** 사용을 권장합니다.",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "외부 스타일시트를 올바르게 연결한 마크업은?",
                  "interactionOptions": [
                    { "label": "<link rel=\"stylesheet\" href=\"styles.css\">" },
                    { "label": "<style src=\"styles.css\"></style>" },
                    { "label": "<script src=\"styles.css\"></script>" },
                    { "label": "<a href=\"styles.css\"></a>" }
                  ],
                  "answer": { "isCorrect": null, "answer": 0, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 정답! 외부 파일을 연결할 땐 `<link rel=\"stylesheet\" href=\"...\">`를 사용합니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ `<style>`은 내부 스타일용이며, 외부 파일 연결은 `<link rel=\"stylesheet\" ...>`가 정답이에요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\n<html lang=\"ko\">\n<head>\n  <{{BLANK-1}}>\n    p{ color: blue; }\n  </{{BLANK-1}}>\n</head>\n<body>\n  <p>내부 스타일이 적용됩니다.</p>\n</body>\n</html>",
                  "url": "/code/39",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "<script>", "disabled": false },
                    { "id": "option-2", "value": "<style>", "disabled": false },
                    { "id": "option-3", "value": "<link>", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "<style>", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 잘했어요! `<style>` 블록이 올바르게 사용됐습니다. 미리보기로 색상을 확인해 보세요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 내부 스타일은 `<style>` 태그 안에 작성해야 해요. `script`/`link`는 다른 용도입니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>p{color:blue}body{font-family:system-ui;padding:16px}</style></head><body><p>내부 스타일이 적용됩니다.</p></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 2,
          "title": "선택자 기초: 태그 / 클래스 / 아이디",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🧩 선택자 기본\n- **태그 선택자**: `p { ... }`\n- **클래스 선택자**: `.btn { ... }` (여러 요소에 재사용)\n- **아이디 선택자**: `#title { ... }` (페이지 내 **고유**) ",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "id가 `main-title`인 요소에 스타일을 적용하는 올바른 선택자는?",
                  "interactionOptions": [
                    { "label": "h1" },
                    { "label": ".main-title" },
                    { "label": "#main-title" },
                    { "label": "*[main-title]" }
                  ],
                  "answer": { "isCorrect": null, "answer": 2, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 정답! 아이디는 `#id` 형태로 선택합니다. 클래스는 `.class`예요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 아이디 선택자는 `#id`입니다. 클래스와 혼동하지 마세요(`.class`).",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\n<html lang=\"ko\">\n<head>\n  <style>\n    {{BLANK-1}} { color:#111 }\n    {{BLANK-2}} { padding:8px 12px }\n  </style>\n</head>\n<body>\n  <h1 id=\"title\">제목</h1>\n  <button class=\"btn\">확인</button>\n</body>\n</html>",
                  "url": "/code/40",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "-", "disabled": false },
                    { "id": "option-2", "value": ".", "disabled": false },
                    { "id": "option-3", "value": "#", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "#", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": ".", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 좋아요! 아이디/클래스 선택자를 올바르게 사용했어요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ `#title`은 아이디, `.btn`은 클래스 선택자입니다. 각각의 표기를 확인하세요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>#title{color:#111}.btn{padding:8px 12px;border:1px solid #ccc;border-radius:8px}</style></head><body><h1 id=\"title\">제목</h1><button class=\"btn\">확인</button></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 3,
          "title": "CSS 선언과 문법: selector { property: value; }",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### ✍️ CSS 문법\n- 작성 형태: `선택자 { 속성: 값; }`\n- 한 블록에 여러 선언 가능: `;`로 구분\n- 주석: `/* ... */` (브라우저에 표시되지 않음)",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "올바른 CSS 선언을 고르세요.",
                  "interactionOptions": [
                    { "label": "p { color = red }" },
                    { "label": "p: { color: red }" },
                    { "label": "p { color: red; }" },
                    { "label": "p (color: red;)" }
                  ],
                  "answer": { "isCorrect": null, "answer": 2, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 정답! `선택자 { 속성: 값; }` 형태를 지켜야 합니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 콜론(`:`)과 세미콜론(`;`) 위치를 확인하세요: `p { color: red; }`가 맞습니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\n<html lang=\"ko\"><head>\n  <style>\n    p{ {{BLANK-1}}: #222; {{BLANK-2}}: #f3f4f6; }\n  </style>\n</head>\n<body>\n  <p>선언 연습</p>\n</body></html>",
                  "url": "/code/41",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "color", "disabled": false },
                    { "id": "option-2", "value": "background-color", "disabled": false },
                    { "id": "option-3", "value": "font-color", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "color", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 좋아요! 텍스트 색상과 배경색 속성을 올바르게 선택했어요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ `font-color`는 존재하지 않습니다. `color`와 `background-color`를 사용하세요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}p{color:#222;background-color:#f3f4f6;padding:10px;border-radius:8px}</style></head><body><p>선언 연습</p></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 4,
          "title": "우선순위 기초: inline > #id > .class > tag",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### ⚖️ 적용 우선순위\n1) **Inline style** 2) `#id` 3) `.class` 4) 태그 선택자\n- 동점이면 **나중에 나온 선언**이 이깁니다(소스 순서).\n- 유지보수를 위해 인라인 스타일은 가급적 피하고, 클래스 중심으로 작성해요.",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "다음 중 **가장 우선순위가 높은** 것은?",
                  "interactionOptions": [
                    { "label": "인라인 스타일(style=\"...\")" },
                    { "label": "#title 선택자" },
                    { "label": ".title 선택자" },
                    { "label": "h1 선택자" }
                  ],
                  "answer": { "isCorrect": null, "answer": 0, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 정답! 인라인 스타일이 가장 강력합니다. (다만 유지보수는 어려워요)",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 우선순위는 Inline > #id > .class > tag 순서입니다. 동점이면 **나중 선언**이 적용돼요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\n<html lang=\"ko\"><head>\n  <style>\n    p{ color: green }\n    #msg{ color: blue }\n  </style>\n</head>\n<body>\n  <p id=\"msg\" style=\"{{BLANK-1}}: red;\">우선순위 테스트</p>\n</body></html>",
                  "url": "/code/42",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "background", "disabled": false },
                    { "id": "option-2", "value": "color", "disabled": false },
                    { "id": "option-3", "value": "font-weight", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "color", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 좋아요! 인라인 `color: red;`가 가장 높은 우선순위로 적용됩니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 인라인 스타일은 가장 강력합니다. `style=\"color: red;\"`가 최종적으로 적용돼요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>p{color:green}#msg{color:blue}body{font-family:system-ui;padding:16px}</style></head><body><p id=\"msg\" style=\"color:red\">우선순위 테스트</p></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 5,
          "title": "색상 표기 기초: hex / rgb / hsl",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🎨 색상 표기\n- **HEX**: `#2563eb`\n- **RGB(A)**: `rgb(37, 99, 235)` / `rgba(37, 99, 235, 0.5)`\n- **HSL(A)**: `hsl(220 83% 57%)` / `hsla(220 83% 57% / 0.5)`\n> 투명도(알파)를 포함하려면 `rgba(...)` 또는 `hsla(...)` 표기를 사용합니다.",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "투명도(알파 값)를 **포함**하는 색상 표기는 무엇일까요?",
                  "interactionOptions": [
                    { "label": "rgb(...)" },
                    { "label": "rgba(...)" },
                    { "label": "#RRGGBB" },
                    { "label": "hsl(...)" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 정답! `rgba(...)`처럼 a(알파) 채널이 있는 표기를 사용합니다. `hsla(...)`도 가능해요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 투명도를 포함하려면 `rgba(...)` 또는 `hsla(...)`를 사용하세요. `rgb(...)`, `#RRGGBB`는 불투명입니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\n<html lang=\"ko\"><head>\n  <style>\n    .box{ background: {{BLANK-1}}; width:180px; height:60px; border-radius:10px }\n  </style>\n</head>\n<body>\n  <div class=\"box\"></div>\n</body></html>",
                  "url": "/code/43",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "#2563eb", "disabled": false },
                    { "id": "option-2", "value": "rgb(37,99,235)", "disabled": false },
                    { "id": "option-3", "value": "hsl(220 83% 57%)", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "#2563eb", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 좋아요! HEX 표기로 배경색을 지정했습니다. 다른 표기법도 같은 색을 표현할 수 있어요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 이번 문제는 **HEX** 표기를 요구했어요. `#2563eb`가 정답입니다. (RGB/HSL도 올바른 표기이지만 요구 조건과 달라요)",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>.box{background:#2563eb;width:180px;height:60px;border-radius:10px}body{font-family:system-ui;padding:16px}</style></head><body><div class=\"box\"></div></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 6,
          "title": "단위 기초: px / % / rem",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 📏 단위 이해\n- **px**: 절대 단위(고정 크기)\n- **%**: 부모 요소에 대한 **상대 비율**\n- **rem**: 루트(html) 폰트 크기 기준 **상대 단위** (접근성/반응형에 유리)",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "루트(`html`) 폰트 크기를 기준으로 하는 단위는?",
                  "interactionOptions": [
                    { "label": "px" },
                    { "label": "%" },
                    { "label": "rem" },
                    { "label": "vh" }
                  ],
                  "answer": { "isCorrect": null, "answer": 2, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 정답! `rem`은 루트 폰트 크기(기본 16px)를 기준으로 계산됩니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ `rem`이 루트 기준 단위예요. `%`는 부모 기준 비율, `px`는 절대 단위입니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\n<html lang=\"ko\"><head>\n  <style>\n    .container{ width: {{BLANK-1}}; border:1px solid #ddd; padding:12px }\n    .title{ font-size: {{BLANK-2}}; }\n  </style>\n</head>\n<body>\n  <div class=\"container\">\n    <p class=\"title\">단위 연습</p>\n  </div>\n</body></html>",
                  "url": "/code/44",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "200px", "disabled": false },
                    { "id": "option-2", "value": "2rem", "disabled": false },
                    { "id": "option-3", "value": "80%", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "80%", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "2rem", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 좋아요! 너비는 부모 기준 비율로, 글자는 루트 기준으로 설정했어요(가독성↑, 반응형에 유리).",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 컨테이너 폭은 비율(%)이 유연하고, 텍스트는 `rem`이 접근성에 유리합니다. 상황에 맞는 단위를 선택해 보세요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>html{font-size:16px}body{font-family:system-ui;padding:16px}.container{width:80%;border:1px solid #ddd;padding:12px;border-radius:10px}.title{font-size:2rem}</style></head><body><div class=\"container\"><p class=\"title\">단위 연습</p></div></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        }
      ]
    }
  ]
}

// ID : 12
const CSS_2 = {
  "lessons": [
    {
      "id": 12,
      "title": "박스 모델과 레이아웃 기본",
      "isCompleted": false,
      "sliders": [
	      {
          "id": 0,
          "title": "🎯 레벨업 시작하기",
          "modules": [
            {
              "id": 0,
              "type": "image",
              "src": "https://s3.ghmate.com/codingpt/lessons/intro_img.png",
              "size": "lg",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "paragraph",
              "content": "# 박스 모델과 레이아웃 기본에 대해 간단히 알아볼까?",
              "visibility": { "type": "step", "value": 2 }
            }
          ]
        },
        {
          "id": 1,
          "title": "박스 모델 이해: content / padding / border / margin",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 📦 박스 모델\n- **content**: 실제 내용 영역\n- **padding**: 내용과 테두리 사이의 **안쪽 여백**\n- **border**: 테두리\n- **margin**: 이 박스와 다른 요소 사이의 **바깥 여백**\n> 레이아웃을 다룰 때는 `padding`(안)과 `margin`(밖)을 구분하는 습관이 중요합니다.",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "요소의 **테두리 바깥쪽** 공간을 늘리는 속성은?",
                  "interactionOptions": [
                    { "label": "padding" },
                    { "label": "margin" },
                    { "label": "border" },
                    { "label": "outline" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 정답! **margin**은 바깥 여백, **padding**은 안쪽 여백입니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 바깥 여백은 `margin`, 안쪽 여백은 `padding`이에요. 헷갈리지 않게 기억해요! ",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><style>.card{ {{BLANK-1}}:16px; {{BLANK-2}}:20px; border:2px solid #cbd5e1; background:#f8fafc; width:260px; border-radius:10px; }</style></head><body><div class=\"card\">박스 모델 연습</div></body></html>",
                  "url": "/code/45",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "border", "disabled": false },
                    { "id": "option-2", "value": "margin", "disabled": false },
                    { "id": "option-3", "value": "padding", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "padding", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "margin", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 잘했어요! 카드 내부(패딩)와 외부(마진)가 구분됐어요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 안쪽은 `padding`, 바깥은 `margin`이에요. 다시 채워보세요!", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                { "type": "html", "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}.card{padding:16px;margin:20px;border:2px solid #cbd5e1;background:#f8fafc;width:260px;border-radius:10px}</style></head><body><div class=\"card\">박스 모델 연습</div></body></html>" }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 2,
          "title": "display 기본: block / inline / inline-block",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🧱 display 핵심\n- **block**: 줄 바꿈, 가로 전체 차지, `width/height` 적용\n- **inline**: 줄 바꿈 없음, 내용 크기만큼, `width/height` 적용 어려움\n- **inline-block**: 한 줄 배치 + `width/height` 적용 가능 (둘의 장점 결합)",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "가로로 나란히 배치하면서 **크기(width/height)**도 주고 싶다면?",
                  "interactionOptions": [
                    { "label": "inline" },
                    { "label": "block" },
                    { "label": "inline-block" },
                    { "label": "none" }
                  ],
                  "answer": { "isCorrect": null, "answer": 2, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `inline-block`은 한 줄 유지 + 크기 지정이 가능해요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `inline-block`을 사용하면 한 줄 배치와 크기 지정이 모두 가능합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><style>.tag{ display: {{BLANK-1}}; width:100px; height:40px; background:#e0f2fe; border-radius:8px; text-align:center; line-height:40px; margin-right:8px }</style></head><body><span class=\"tag\">버튼</span><span class=\"tag\">배지</span></body></html>",
                  "url": "/code/46",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "position", "disabled": false },
                    { "id": "option-2", "value": "justify-contents", "disabled": false },
                    { "id": "option-3", "value": "inline-block", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "inline-block", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 태그들이 한 줄에 배치되면서 크기도 적용됩니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `inline`은 크기 지정이 어렵고, `block`은 줄이 바뀝니다. `inline-block`을 사용하세요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                { "type": "html", "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>.tag{display:inline-block;width:100px;height:40px;background:#e0f2fe;border-radius:8px;text-align:center;line-height:40px;margin-right:8px}body{font-family:system-ui;padding:16px}</style></head><body><span class=\"tag\">버튼</span><span class=\"tag\">배지</span></body></html>" }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 3,
          "title": "여백 단축 표기: margin/padding shorthand",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### ✂️ 여백 단축 규칙\n- 1값: 모든 방향 동일 (`margin: 12px`)\n- 2값: **상·하 / 좌·우** (`margin: 10px 20px`)\n- 3값: **상 / 좌·우 / 하**\n- 4값: **상 → 우 → 하 → 좌**(시계방향, TRBL)",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "`margin: 10px 20px`의 의미로 알맞은 것은?",
                  "interactionOptions": [
                    { "label": "상·하 10px, 좌·우 20px" },
                    { "label": "상·하 20px, 좌·우 10px" },
                    { "label": "상10 우20 하10 좌20 (TRBL)" },
                    { "label": "네 방향 모두 10px" }
                  ],
                  "answer": { "isCorrect": null, "answer": 0, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! 두 값 표기는 **상·하 / 좌·우** 순서예요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 두 값일 때는 상·하가 첫 번째, 좌·우가 두 번째입니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><style>.box{ border:1px solid #ddd; padding:12px; margin: {{BLANK-1}} {{BLANK-2}}; width:220px; }</style></head><body><div class=\"box\">여백 단축 연습</div></body></html>",
                  "url": "/code/47",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "20cm", "disabled": false },
                    { "id": "option-2", "value": "20px", "disabled": false },
                    { "id": "option-3", "value": "20%", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "20px", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 상·하는 10px, 좌·우는 20px로 적용됐습니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `margin: 10px 20px;` 형태로 상·하/좌·우 순서를 기억하세요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                { "type": "html", "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}.box{border:1px solid #ddd;padding:12px;margin:10px 20px;width:220px;border-radius:8px}</style></head><body><div class=\"box\">여백 단축 연습</div></body></html>" }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 4,
          "title": "box-sizing: content-box vs border-box",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 📐 box-sizing\n- **content-box**(기본): `width`가 **콘텐츠**만 의미 (padding/border는 별도)\n- **border-box**: `width` 안에 **padding+border 포함** → 레이아웃 계산 쉬움\n> 실무에서는 `* { box-sizing: border-box; }`를 자주 사용합니다.",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "`width` 값에 padding과 border까지 **포함**시키는 설정은?",
                  "interactionOptions": [
                    { "label": "content-box" },
                    { "label": "border-box" },
                    { "label": "initial" },
                    { "label": "inherit" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `border-box`면 지정한 폭 안에 padding/border가 포함돼요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `border-box`가 폭 계산을 간단하게 만들어 줍니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><style>.card{ {{BLANK-1}}: {{BLANK-2}}; width:200px; padding:20px; border:8px solid #94a3b8; background:#f1f5f9 }</style></head><body><div class=\"card\">폭이 200px로 유지!</div></body></html>",
                  "url": "/code/48",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "content-box", "disabled": false },
                    { "id": "option-2", "value": "box-width", "disabled": false },
                    { "id": "option-3", "value": "border-box", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "border-box", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 패딩/보더를 포함해도 폭이 일정합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `box-sizing: border-box;`를 사용하면 폭 계산이 단순해집니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                { "type": "html", "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}.card{box-sizing:border-box;width:200px;padding:20px;border:8px solid #94a3b8;background:#f1f5f9;border-radius:8px}</style></head><body><div class=\"card\">폭이 200px로 유지!</div></body></html>" }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 5,
          "title": "타이포그래피 기초: font-family / font-size / line-height",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### ✒️ 텍스트 기본\n- `font-family`: 폰트 **우선순위 스택** 작성(예: `system-ui, -apple-system, ...`)\n- `font-size`: 글자 크기(접근성을 위해 `rem` 권장)\n- `line-height`: 줄 간격(가독성 향상, 단위 없이 1.5~1.8 권장)",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "문단 가독성을 높이기 위해 **줄 간격**을 조절하는 속성은?",
                  "interactionOptions": [
                    { "label": "font-weight" },
                    { "label": "letter-spacing" },
                    { "label": "line-height" },
                    { "label": "word-spacing" }
                  ],
                  "answer": { "isCorrect": null, "answer": 2, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `line-height`로 줄 간격을 조절합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 줄 간격은 `line-height`입니다. 가독성 향상에 큰 영향을 줘요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><style>.article{ font-family: system-ui, -apple-system, sans-serif; font-size:1rem; {{BLANK-1}}: {{BLANK-2}}; }</style></head><body><p class=\"article\">길이가 있는 문단의 줄 간격을 조절하면 읽기 편해집니다. 적절한 line-height는 접근성에도 유리합니다.</p></body></html>",
                  "url": "/code/49",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "font-height", "disabled": false },
                    { "id": "option-2", "value": "line-weight", "disabled": false },
                    { "id": "option-3", "value": "line-height", "disabled": false },
                    { "id": "option-4", "value": "font-weight", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "line-height", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! line-height 1.6으로 가독성이 좋아졌어요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 줄 간격은 `line-height`로 지정하고, 값은 보통 1.5~1.8 범위를 권장합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                { "type": "html", "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}.article{font-family:system-ui,-apple-system,sans-serif;font-size:1rem;line-height:1.6;max-width:36rem}</style></head><body><p class=\"article\">길이가 있는 문단의 줄 간격을 조절하면 읽기 편해집니다. 적절한 line-height는 접근성에도 유리합니다.</p></body></html>" }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 6,
          "title": "배경과 테두리: background / background-size / border-radius",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🖼️ 배경·테두리 기본\n- `background-color` / `background-image`\n- `background-size: cover`로 컨테이너를 꽉 채우기(비율 유지)\n- `border`/`border-radius`로 테두리와 모서리 둥글게",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "배경 이미지를 요소 크기에 맞게 **채우되 비율을 유지**하려면?",
                  "interactionOptions": [
                    { "label": "background-position: center" },
                    { "label": "background-size: cover" },
                    { "label": "object-fit: contain" },
                    { "label": "background-repeat: no-repeat" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `background-size: cover`가 가장 적절합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `cover`는 요소를 가득 채우되 비율을 유지합니다. 필요하면 `background-position`으로 초점 조절!", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><style>.hero{ {{BLANK-1}}: url('/images/hero.jpg'); {{BLANK-2}}: cover; background-position:center; height:140px; border-radius:12px }</style></head><body><div class=\"hero\"></div></body></html>",
                  "url": "/code/50",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "background-image", "disabled": false },
                    { "id": "option-2", "value": "background-repeat", "disabled": false },
                    { "id": "option-3", "value": "background-size", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "background-image", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "background-size", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 배경 이미지를 꽉 차게 세팅했습니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `background-image`와 `background-size` 속성을 올바르게 지정해야 합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                { "type": "html", "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}.hero{background-image:url('/images/hero.jpg');background-size:cover;background-position:center;height:140px;border-radius:12px;border:1px solid #e5e7eb}</style></head><body><div class=\"hero\"></div></body></html>" }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        }
      ]
    }
  ]
}

// ID : 13
const CSS_3 = {
  "lessons": [
    {
      "id": 13,
      "title": "Flexbox 입문",
      "isCompleted": false,
      "sliders": [
	      {
          "id": 0,
          "title": "🎯 레벨업 시작하기",
          "modules": [
            {
              "id": 0,
              "type": "image",
              "src": "https://s3.ghmate.com/codingpt/lessons/intro_img.png",
              "size": "lg",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "paragraph",
              "content": "# Flexbox에 대해 간단히 알아볼까?",
              "visibility": { "type": "step", "value": 2 }
            }
          ]
        },
        {
          "id": 1,
          "title": "Flexbox 시작: display:flex와 축 이해",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🧭 Flexbox의 기본\n- 컨테이너에 `display: flex`를 주면 **플렉스 컨테이너**가 됩니다.\n- **주축(main axis)**: 아이템이 배치되는 기본 축(기본은 가로 `row`)\n- **교차축(cross axis)**: 주축에 수직인 축(기본은 세로)\n- 주축 방향은 `flex-direction`으로 바꿀 수 있어요(`row`/`column`).",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "Flexbox를 **활성화**하는 올바른 선언은?",
                  "interactionOptions": [
                    { "label": "display: block" },
                    { "label": "display: grid" },
                    { "label": "display: flex" },
                    { "label": "position: relative" }
                  ],
                  "answer": { "isCorrect": null, "answer": 2, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! 컨테이너에 `display: flex`를 주면 플렉스 레이아웃이 시작돼요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `display: flex`가 컨테이너를 플렉스 컨테이너로 만듭니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><style>.list{ display: {{BLANK-1}}; gap:8px } .item{ background:#e0f2fe; padding:10px 14px; border-radius:8px }</style></head><body><div class=\"list\"><div class=\"item\">A</div><div class=\"item\">B</div><div class=\"item\">C</div></div></body></html>",
                  "url": "/code/51",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "flex", "disabled": false },
                    { "id": "option-2", "value": "block", "disabled": false },
                    { "id": "option-3", "value": "inline", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "flex", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 이제 플렉스 컨테이너가 되었어요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 컨테이너의 `display` 값을 `flex`로 지정해야 아이템들이 플렉스 규칙으로 배치됩니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                { "type": "html", "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}.list{display:flex;gap:8px}.item{background:#e0f2fe;padding:10px 14px;border-radius:8px}</style></head><body><div class=\"list\"><div class=\"item\">A</div><div class=\"item\">B</div><div class=\"item\">C</div></div></body></html>" }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 2,
          "title": "방향 바꾸기: flex-direction (row/column)",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### ↕️ 주축 바꾸기\n- `flex-direction: row`(기본): 가로 방향 배치\n- `flex-direction: column`: 세로 방향 배치(주축이 세로로 변경)\n- 방향이 바뀌면 **주축/교차축**도 함께 바뀝니다.",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "아이템을 **세로로 쌓이게** 만들고 싶을 때 알맞은 값은?",
                  "interactionOptions": [
                    { "label": "row" },
                    { "label": "column" },
                    { "label": "wrap" },
                    { "label": "inline" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `flex-direction: column`이면 세로로 배치돼요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 세로 배치는 `flex-direction: column`을 사용해야 합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><style>.list{ display:flex; flex-direction: {{BLANK-1}}; gap:6px } .item{ background:#d1fae5; padding:8px 12px; border-radius:8px }</style></head><body><div class=\"list\"><div class=\"item\">1</div><div class=\"item\">2</div><div class=\"item\">3</div></div></body></html>",
                  "url": "/code/52",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "row", "disabled": false },
                    { "id": "option-2", "value": "column", "disabled": false },
                    { "id": "option-3", "value": "straight", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "column", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 세로 방향으로 쌓이도록 설정했습니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 값은 `row` 또는 `column`을 사용합니다. 리스트는 세로 방향으로 `column`이 정답이에요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                { "type": "html", "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}.list{display:flex;flex-direction:column;gap:6px}.item{background:#d1fae5;padding:8px 12px;border-radius:8px}</style></head><body><div class=\"list\"><div class=\"item\">1</div><div class=\"item\">2</div><div class=\"item\">3</div></div></body></html>" }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 3,
          "title": "주축 정렬: justify-content",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### ↔️ 주축 방향 정렬\n- `justify-content`: **주축(main axis)** 정렬/간격\n- 자주 쓰는 값: `flex-start`, `center`, `flex-end`, `space-between`, `space-around`\n- `row`일 땐 가로 정렬, `column`일 땐 세로 정렬에 해당합니다.",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "`row` 방향에서 양 끝에 붙이고 **사이를 고르게** 벌리려면?",
                  "interactionOptions": [
                    { "label": "center" },
                    { "label": "space-between" },
                    { "label": "space-around" },
                    { "label": "flex-start" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `space-between`은 양 끝 고정 + 사이 균등 간격입니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `space-between`이 정답입니다. `center`는 가운데로 모읍니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><style>.nav{ display:flex; justify-content: {{BLANK-1}}; background:#f1f5f9; padding:10px; border-radius:10px } .nav a{ background:#fff; padding:8px 12px; border-radius:8px; text-decoration:none; color:#111 }</style></head><body><nav class=\"nav\"><a href=\"#\">Home</a><a href=\"#\">Docs</a><a href=\"#\">About</a></nav></body></html>",
                  "url": "/code/53",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "flex", "disabled": false },
                    { "id": "option-2", "value": "justify-content", "disabled": false },
                    { "id": "option-3", "value": "align-items", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "justify-content", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 아이템 사이 간격이 균등해졌습니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `justify-content`는 주축 정렬입니다. 이번엔 `space-between`이 목적에 맞아요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                { "type": "html", "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px} .nav{display:flex;justify-content:space-between;background:#f1f5f9;padding:10px;border-radius:10px} .nav a{background:#fff;padding:8px 12px;border-radius:8px;text-decoration:none;color:#111}</style></head><body><nav class=\"nav\"><a href=\"#\">Home</a><a href=\"#\">Docs</a><a href=\"#\">About</a></nav></body></html>" }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 4,
          "title": "교차축 정렬: align-items",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### ↕️ 교차축 방향 정렬\n- `align-items`: **교차축(cross axis)** 정렬\n- 자주 쓰는 값: `stretch`(기본), `flex-start`, `center`, `flex-end`\n- `row` 기준 교차축은 **세로**, `column` 기준 교차축은 **가로**입니다.",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "`row` 방향에서 아이템을 **세로 가운데** 정렬하려면?",
                  "interactionOptions": [
                    { "label": "align-items: center" },
                    { "label": "justify-content: center" },
                    { "label": "text-align: center" },
                    { "label": "place-items: center" }
                  ],
                  "answer": { "isCorrect": null, "answer": 0, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! 교차축 정렬은 `align-items`가 담당합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 주축 정렬은 `justify-content`, 교차축 정렬은 `align-items`를 사용합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><style>.bar{ display:flex; align-items: {{BLANK-1}}; height:120px; background:#fafaf9; padding:10px; gap:8px } .item{ background:#fee2e2; padding:8px 12px; border-radius:8px }</style></head><body><div class=\"bar\"><div class=\"item\">상단</div><div class=\"item\">가운데</div><div class=\"item\">하단</div></div></body></html>",
                  "url": "/code/54",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "front", "disabled": false },
                    { "id": "option-2", "value": "middle", "disabled": false },
                    { "id": "option-3", "value": "center", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "center", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 세로(교차축) 가운데 정렬이 적용되었습니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `row`에서 세로 가운데는 `align-items: center`가 맞아요. `justify-content`는 가로 정렬입니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                { "type": "html", "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}.bar{display:flex;align-items:center;height:120px;background:#fafaf9;padding:10px;gap:8px;border-radius:10px}.item{background:#fee2e2;padding:8px 12px;border-radius:8px}</style></head><body><div class=\"bar\"><div class=\"item\">상단</div><div class=\"item\">가운데</div><div class=\"item\">하단</div></div></body></html>" }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 5,
          "title": "아이템 간 간격: gap",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🧱 간격 주기\n- `gap`: 플렉스 **아이템 사이 간격**을 한 번에 지정\n- 마진을 하나하나 주는 대신 컨테이너에 `gap`을 주면 간편해요\n- `row-gap`, `column-gap`으로 축별 지정도 가능해요.",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "마진 대신 컨테이너에서 **아이템 사이 간격**을 통일해 주는 속성은?",
                  "interactionOptions": [
                    { "label": "gap" },
                    { "label": "space-between" },
                    { "label": "padding" },
                    { "label": "border-spacing" }
                  ],
                  "answer": { "isCorrect": null, "answer": 0, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `gap`은 단순하고 예측 가능해요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `space-between`은 정렬 방식이고, 실제 간격 값 지정은 `gap`으로 합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><style>.wrap{ display:flex; {{BLANK-1}}: {{BLANK-2}}; } .box{ background:#fef9c3; padding:10px 12px; border-radius:8px }</style></head><body><div class=\"wrap\"><div class=\"box\">A</div><div class=\"box\">B</div><div class=\"box\">C</div></div></body></html>",
                  "url": "/code/55",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "gap", "disabled": false },
                    { "id": "option-2", "value": "row-gap", "disabled": false },
                    { "id": "option-3", "value": "justify-content", "disabled": false },
                    { "id": "option-4", "value": "space-between", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "gap", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 간격을 컨테이너 한 줄로 깔끔하게 지정했어요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `gap: 12px;`처럼 속성과 값을 함께 지정해 주세요. `space-between`은 정렬 방식이에요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                { "type": "html", "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}.wrap{display:flex;gap:12px}.box{background:#fef9c3;padding:10px 12px;border-radius:8px}</style></head><body><div class=\"wrap\"><div class=\"box\">A</div><div class=\"box\">B</div><div class=\"box\">C</div></div></body></html>" }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 6,
          "title": "아이템 크기 비율: flex-grow / flex",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 📈 남는 공간 나누기\n- `flex-grow`: 남는 공간을 **얼마나 차지**할지 비율로 지정(0은 확장 안 함)\n- `flex` 단축: `flex: grow shrink basis` (`flex: 1`은 `1 1 0%`와 동일)\n- 같은 `flex-grow` 값이면 공간을 **같이** 나눠 가집니다.",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "여유 공간을 **비율대로 확장**하도록 만드는 속성은?",
                  "interactionOptions": [
                    { "label": "flex-grow" },
                    { "label": "order" },
                    { "label": "z-index" },
                    { "label": "width" }
                  ],
                  "answer": { "isCorrect": null, "answer": 0, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `flex-grow` 값이 클수록 더 많은 남은 공간을 차지합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 공간 확장은 `flex-grow`로 제어합니다. `order`는 순서, `z-index`는 쌓임 맥락이에요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><style>.row{ display:flex; gap:8px } .item{ background:#e9d5ff; padding:10px; border-radius:8px } .grow{ {{BLANK-1}}: 1; }</style></head><body><div class=\"row\"><div class=\"item grow\">A</div><div class=\"item\">B</div><div class=\"item\">C</div></div></body></html>",
                  "url": "/code/56",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "flex-grow", "disabled": false },
                    { "id": "option-2", "value": "flex-shrink", "disabled": false },
                    { "id": "option-3", "value": "order", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "flex-grow", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 첫 번째 아이템이 남는 가로 공간을 확장해 차지합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `flex-grow: 1;`을 지정하면 아이템이 남는 공간을 나눠 가집니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                { "type": "html", "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}.row{display:flex;gap:8px}.item{background:#e9d5ff;padding:10px;border-radius:8px}.grow{flex-grow:1}</style></head><body><div class=\"row\"><div class=\"item grow\">A</div><div class=\"item\">B</div><div class=\"item\">C</div></div></body></html>" }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        }
      ]
    }
  ]
}

// ID : 14
const CSS_4 = {
  "lessons": [
    {
      "id": 14,
      "title": "Position(위치 지정) 입문",
      "isCompleted": false,
      "sliders": [
	      {
          "id": 0,
          "title": "🎯 레벨업 시작하기",
          "modules": [
            {
              "id": 0,
              "type": "image",
              "src": "https://s3.ghmate.com/codingpt/lessons/intro_img.png",
              "size": "lg",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "paragraph",
              "content": "# Position(위치 지정)에 대해 간단히 알아볼까?",
              "visibility": { "type": "step", "value": 2 }
            }
          ]
        },
        {
          "id": 1,
          "title": "position 개요와 offset(top/left...)",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🧭 위치 지정 기본\n- `position` 값: `static`(기본), `relative`, `absolute`, `fixed`, `sticky`\n- `top/right/bottom/left` **오프셋**은 `static`이 **아닌** 경우에 동작\n- `relative`: 문서 흐름을 유지하면서 **원래 위치 기준**으로 살짝 이동",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "문서 흐름은 유지하면서 원래 자리 기준으로 **조금 이동**시키는 값은?",
                  "interactionOptions": [
                    { "label": "static" },
                    { "label": "relative" },
                    { "label": "absolute" },
                    { "label": "fixed" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `relative`는 원래 위치를 기준으로 살짝 이동합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `relative`가 원래 위치 기준 이동입니다. `static`은 오프셋이 적용되지 않아요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><style>.box{ position: {{BLANK-1}}; top:10px; left:8px; background:#e0f2fe; padding:10px 14px; border-radius:8px; }</style></head><body><div class=\"box\">relative 이동</div></body></html>",
                  "url": "/code/57",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "inherit", "disabled": false },
                    { "id": "option-2", "value": "static", "disabled": false },
                    { "id": "option-3", "value": "relative", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "relative", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 원래 자리에서 살짝 이동합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `position: relative`일 때만 `top/left`가 적용됩니다. `static`에는 적용되지 않아요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                { "type": "html", "content": "<!DOCTYPE html><html lang='ko'><head><meta charset='UTF-8'><title>미리보기</title><style>body{font-family:system-ui;padding:16px}.box{position:relative;top:10px;left:8px;background:#e0f2fe;padding:10px 14px;border-radius:8px;display:inline-block}</style></head><body><div class='box'>relative 이동</div></body></html>" }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 2,
          "title": "relative vs absolute: 기준이 되는 조상",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🎯 absolute의 기준\n- `absolute`는 **가장 가까운** `position`이 `static`이 **아닌** 조상을 기준으로 정렬\n- 그런 조상이 없으면 **뷰포트가 아닌** 문서 루트(html) 기준이 아닌 **페이지(초기 포함 블록)** 기준으로 배치됨(대부분 body와 유사)",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "`position: absolute` 요소의 **기준**은 무엇인가요?",
                  "interactionOptions": [
                    { "label": "항상 브라우저 화면(viewport)" },
                    { "label": "가장 가까운 `position != static` 조상" },
                    { "label": "항상 `<body>`" },
                    { "label": "항상 문서 최상단(0,0)" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! 조상 중 `relative`/`absolute`/`fixed`/`sticky` 등 **positioned** 요소를 찾습니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `absolute`는 가장 가까운 **positioned 조상**을 기준으로 합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html><html lang='ko'><head><style>.wrap{ position: {{BLANK-1}}; width:220px; height:120px; background:#f1f5f9; border-radius:10px } .tip{ position: {{BLANK-2}}; right:8px; top:8px; background:#fde68a; padding:6px 8px; border-radius:8px; }</style></head><body><div class='wrap'><span class='tip'>툴팁</span></div></body></html>",
                  "url": "/code/58",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "static", "disabled": false },
                    { "id": "option-2", "value": "relative", "disabled": false },
                    { "id": "option-3", "value": "absolute", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "relative", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "absolute", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 툴팁이 래퍼의 오른쪽 위 모서리에 고정됩니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 부모를 `position: relative`로 만들어 기준을 잡고, 자식에 `absolute`를 지정하세요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                { "type": "html", "content": "<!DOCTYPE html><html lang='ko'><head><meta charset='UTF-8'><title>미리보기</title><style>body{font-family:system-ui;padding:16px}.wrap{position:relative;width:220px;height:120px;background:#f1f5f9;border-radius:10px}.tip{position:absolute;right:8px;top:8px;background:#fde68a;padding:6px 8px;border-radius:8px}</style></head><body><div class='wrap'><span class='tip'>툴팁</span></div></body></html>" }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 3,
          "title": "fixed: 화면 기준 고정 버튼 만들기",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 📌 fixed 포지셔닝\n- 화면(뷰포트)을 **기준**으로 위치 고정\n- 스크롤되어도 같은 자리 유지(예: 플로팅 액션 버튼, 상단 고정바)\n- 흔한 조합: `position: fixed; bottom: 16px; right: 16px;`",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "스크롤해도 화면 오른쪽 아래에 **계속 보이는 버튼**을 만들 때 알맞은 값은?",
                  "interactionOptions": [
                    { "label": "relative" },
                    { "label": "absolute" },
                    { "label": "fixed" },
                    { "label": "sticky" }
                  ],
                  "answer": { "isCorrect": null, "answer": 2, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `fixed`는 뷰포트 기준으로 고정돼요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `fixed`가 화면 기준 고정입니다. `absolute`는 조상 기준이에요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html><html lang='ko'><head><style>.fab{ {{BLANK-1}}: {{BLANK-2}}; bottom:16px; right:16px; background:#22c55e; color:#fff; border-radius:9999px; width:56px; height:56px; display:flex; align-items:center; justify-content:center; box-shadow:0 6px 16px rgba(0,0,0,.15) }</style></head><body><p style='height:700px'>스크롤 테스트 영역</p><button class='fab'>+</button></body></html>",
                  "url": "/code/59",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "flex", "disabled": false },
                    { "id": "option-2", "value": "fixed", "disabled": false },
                    { "id": "option-3", "value": "absolute", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "fixed", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 화면 우하단에 고정 버튼이 완성됐습니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `position: fixed;` 조합이 필요합니다. `absolute`는 조상 기준이라 스크롤에 따라 움직일 수 있어요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                { "type": "html", "content": "<!DOCTYPE html><html lang='ko'><head><meta charset='UTF-8'><title>미리보기</title><style>body{font-family:system-ui;margin:0;height:1200px}.fab{position:fixed;bottom:16px;right:16px;background:#22c55e;color:#fff;border-radius:9999px;width:56px;height:56px;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 16px rgba(0,0,0,.15)}</style></head><body><div style='height:1000px;padding:16px'>스크롤 영역</div><button class='fab'>+</button></body></html>" }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 4,
          "title": "sticky: 스크롤 임계점에서 고정하기",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🧷 sticky 포지셔닝\n- 스크롤 **특정 지점**(예: `top: 0`)을 지나면 그 위치에 **고정**\n- 부모 영역을 벗어나면 더 이상 고정되지 않음\n- 사용 예: 섹션 헤더, 목차 바 등",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "`position: sticky`가 효과를 내기 위해 **필수로 지정**해야 하는 속성은?",
                  "interactionOptions": [
                    { "label": "z-index" },
                    { "label": "top 또는 bottom 등 임계 오프셋" },
                    { "label": "opacity" },
                    { "label": "overflow" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `top: 0` 같은 임계 오프셋이 있어야 고정 위치를 알 수 있어요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `sticky`는 `top`/`bottom` 같은 임계 오프셋이 필요합니다. 없으면 동작하지 않아요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html><html lang='ko'><head><style>.hd{ position: {{BLANK-1}}; top: {{BLANK-2}}; background:#fef9c3; padding:10px 12px; } .space{ height:1200px }</style></head><body><div class='hd'>섹션 헤더</div><div class='space'></div></body></html>",
                  "url": "/code/60",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "fixed", "disabled": false },
                    { "id": "option-2", "value": "sticky", "disabled": false },
                    { "id": "option-3", "value": "0", "disabled": false },
                    { "id": "option-4", "value": "16px", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "sticky", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "0", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 스크롤 상단에 닿으면 헤더가 고정됩니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `position: sticky; top: 0;`가 기본 패턴입니다. 필요하면 `z-index`로 위로 올리세요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                { "type": "html", "content": "<!DOCTYPE html><html lang='ko'><head><meta charset='UTF-8'><title>미리보기</title><style>body{font-family:system-ui;margin:0}.hd{position:sticky;top:0;background:#fef9c3;padding:10px 12px;border-bottom:1px solid #e5e7eb}.space{height:1200px}</style></head><body><div class='hd'>섹션 헤더</div><div class='space'></div></body></html>" }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 5,
          "title": "z-index: 쌓임 순서 제어",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🗂️ z-index 기본\n- **큰 값일수록 위로** 쌓임(같은 쌓임 맥락 내에서)\n- 보통 `position`이 `static`이 **아닌** 요소에 의미 있게 적용\n- 오버레이(딤) 위에 모달을 띄울 때 유용",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "`z-index`가 의도대로 동작하려면 보통 어떤 조건이 필요한가요?",
                  "interactionOptions": [
                    { "label": "요소가 position: static" },
                    { "label": "요소가 positioned(예: relative/absolute/...) 상태" },
                    { "label": "요소에 width가 있어야 함" },
                    { "label": "요소가 inline이어야 함" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! 보통 `positioned` 요소에서 쌓임 제어를 합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 대개 `relative/absolute/fixed/sticky` 등 **positioned** 요소에서 `z-index`가 유효합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html><html lang='ko'><head><style>.dim{ position: fixed; inset:0; background: rgba(0,0,0,.4); z-index: {{BLANK-1}}; } .modal{ position: fixed; inset:auto 0 0 auto; right:16px; bottom:16px; background:#fff; padding:12px 14px; border-radius:10px; z-index: {{BLANK-2}}; }</style></head><body><div class='dim'></div><div class='modal'>모달</div></body></html>",
                  "url": "/code/61",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "999", "disabled": false },
                    { "id": "option-2", "value": "100", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "100", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "999", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 딤(z-index:100) 아래, 모달(z-index:999)이 위에 보입니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 딤보다 모달의 `z-index`가 커야 위에 표시됩니다. 값의 크기를 비교해 보세요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                { "type": "html", "content": "<!DOCTYPE html><html lang='ko'><head><meta charset='UTF-8'><title>미리보기</title><style>body{font-family:system-ui;margin:0;height:100vh}.dim{position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:100}.modal{position:fixed;right:16px;bottom:16px;background:#fff;padding:12px 14px;border-radius:10px;z-index:999}</style></head><body><div class='dim'></div><div class='modal'>모달</div></body></html>" }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 6,
          "title": "정중앙 배치: absolute + transform 트릭",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🎯 가운데 정렬 레시피\n- 부모를 `position: relative`\n- 자식을 `position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)`\n- 어떤 크기든 **진짜 정중앙**에 배치 가능",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "박스를 컨테이너 **딱 정중앙**에 놓는 조합으로 가장 적절한 것은?",
                  "interactionOptions": [
                    { "label": "top: 0; left: 0;" },
                    { "label": "top: 50%; left: 50%; transform: translate(-50%, -50%)" },
                    { "label": "margin: 0 auto;" },
                    { "label": "justify-content: center;" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! 크기에 상관없이 요소를 정확히 가운데 둘 수 있어요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `margin: 0 auto`는 블록의 **가로** 가운데 정렬만, Flex 정렬은 컨테이너 전체 세팅이 필요해요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html><html lang='ko'><head><style>.wrap{ position: relative; height:160px; background:#f1f5f9; border-radius:10px } .center{ position:absolute; top: {{BLANK-1}}; left: {{BLANK-2}}; transform: translate(-50%, -50%); background:#60a5fa; color:#fff; padding:10px 12px; border-radius:8px }</style></head><body><div class='wrap'><div class='center'>정중앙</div></div></body></html>",
                  "url": "/code/62",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "top", "disabled": false },
                    { "id": "option-2", "value": "bottom", "disabled": false },
                    { "id": "option-3", "value": "left", "disabled": false },
                    { "id": "option-4", "value": "right", "disabled": false, "valueAlias": "50%" }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "top", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "left", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 어떤 크기여도 요소가 정확히 가운데 배치됩니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 정중앙 배치는 `top/left: 50%`와 `translate(-50%, -50%)` 조합이 핵심입니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                { "type": "html", "content": "<!DOCTYPE html><html lang='ko'><head><meta charset='UTF-8'><title>미리보기</title><style>body{font-family:system-ui;padding:16px}.wrap{position:relative;height:160px;background:#f1f5f9;border-radius:10px}.center{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:#60a5fa;color:#fff;padding:10px 12px;border-radius:8px}</style></head><body><div class='wrap'><div class='center'>정중앙</div></div></body></html>" }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        }
      ]
    }
  ]
}

// ID : 15
const CSS_5 = {
  "lessons": [
    {
      "id": 15,
      "title": "Grid 레이아웃 입문",
      "isCompleted": false,
      "sliders": [
	      {
          "id": 0,
          "title": "🎯 레벨업 시작하기",
          "modules": [
            {
              "id": 0,
              "type": "image",
              "src": "https://s3.ghmate.com/codingpt/lessons/intro_img.png",
              "size": "lg",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "paragraph",
              "content": "# Grid 레이아웃에 대해 간단히 알아볼까?",
              "visibility": { "type": "step", "value": 2 }
            }
          ]
        },
        {
          "id": 1,
          "title": "Grid 시작: display:grid와 열 정의",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🧱 Grid 기본\n- 컨테이너에 `display: grid` → **그리드 컨테이너**\n- 열/행 정의: `grid-template-columns`, `grid-template-rows`\n- 예) `grid-template-columns: 100px 1fr 100px`",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "Grid 레이아웃을 **활성화**하는 속성/값 조합은?",
                  "interactionOptions": [
                    { "label": "display: block" },
                    { "label": "display: grid" },
                    { "label": "position: grid" },
                    { "label": "grid-template: on" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! 컨테이너에 `display: grid`를 선언해야 해요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `display: grid`가 그리드를 시작합니다. 다른 옵션은 유효하지 않아요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><style>.grid{ display: {{BLANK-1}}; grid-template-columns: 100px 1fr 100px; gap:8px } .cell{ background:#e0f2fe; padding:10px; border-radius:8px }</style></head><body><div class=\\\"grid\\\"><div class=\\\"cell\\\">A</div><div class=\\\"cell\\\">B</div><div class=\\\"cell\\\">C</div></div></body></html>",
                  "url": "/code/63",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "block", "disabled": false },
                    { "id": "option-2", "value": "grid", "disabled": false },
                    { "id": "option-3", "value": "flex", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "grid", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! Grid 컨테이너가 생성되었습니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `display: grid;`로 설정해야 열/행 정의가 동작해요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}.grid{display:grid;grid-template-columns:100px 1fr 100px;gap:8px}.cell{background:#e0f2fe;padding:10px;border-radius:8px}</style></head><body><div class=\"grid\"><div class=\"cell\">A</div><div class=\"cell\">B</div><div class=\"cell\">C</div></div></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 2,
          "title": "트랙 크기와 fr 단위",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 📏 fr 단위\n- `fr`은 **남는 공간**을 비율로 나눌 때 사용하는 단위\n- 예) `1fr 2fr 1fr` → 1:2:1 비율로 남는 공간 분배\n- 고정(px)과 혼합 가능: `200px 1fr 1fr`",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "남는 공간을 **비율대로** 나누는 단위는?",
                  "interactionOptions": [
                    { "label": "px" },
                    { "label": "%" },
                    { "label": "fr" },
                    { "label": "em" }
                  ],
                  "answer": { "isCorrect": null, "answer": 2, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `fr`은 Grid에서 남는 공간 분배용 단위예요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `fr` 단위를 사용하면 비율로 공간을 나눌 수 있어요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html><html lang=\\\"ko\\\"><head><style>.grid{ display:grid; grid-template-columns: {{BLANK-1}} {{BLANK-2}} {{BLANK-3}}; gap:10px } .cell{ background:#d1fae5; padding:10px; border-radius:8px }</style></head><body><div class=\\\"grid\\\"><div class=\\\"cell\\\">1</div><div class=\\\"cell\\\">2</div><div class=\\\"cell\\\">3</div></div></body></html>",
                  "url": "/code/64",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "1fr 2fr 1fr", "disabled": false },
                    { "id": "option-2", "value": "1rf 2rf 1rf", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "1fr 2fr 1fr", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 1:2:1 비율로 남는 공간이 분배됩니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `grid-template-columns: 1fr 2fr 1fr;` 형태를 기억하세요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}.grid{display:grid;grid-template-columns:1fr 2fr 1fr;gap:10px}.cell{background:#d1fae5;padding:10px;border-radius:8px}</style></head><body><div class=\"grid\"><div class=\"cell\">1</div><div class=\"cell\">2</div><div class=\"cell\">3</div></div></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 3,
          "title": "아이템 배치: grid-column / grid-row",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🎯 셀 병합/배치\n- 특정 아이템을 가로/세로로 **여러 칸** 차지: `grid-column`, `grid-row`\n- 예) `grid-column: 1 / span 2`(1번 선부터 **두 칸** 확장)",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "아이템이 가로로 **두 칸** 차지하도록 설정하는 데 쓰는 속성은?",
                  "interactionOptions": [
                    { "label": "grid-row" },
                    { "label": "grid-column" },
                    { "label": "justify-items" },
                    { "label": "columns" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! 가로 폭(열 수)을 제어하려면 `grid-column`을 사용해요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `grid-column`이 가로 칸 수, `grid-row`는 세로 칸 수를 제어합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html><html lang=\\\"ko\\\"><head><style>.grid{ display:grid; grid-template-columns: 1fr 1fr 1fr; gap:8px } .cell{ background:#fee2e2; padding:10px; border-radius:8px } .feature{ {{BLANK-1}}: 1 / {{BLANK-2}}; }</style></head><body><div class=\\\"grid\\\"><div class=\\\"cell feature\\\">가로 2칸</div><div class=\\\"cell\\\">B</div><div class=\\\"cell\\\">C</div><div class=\\\"cell\\\">D</div></div></body></html>",
                  "url": "/code/65",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "grid-column", "disabled": false },
                    { "id": "option-2", "value": "grid-row", "disabled": false },
                    { "id": "option-3", "value": "span 2", "disabled": false },
                    { "id": "option-4", "value": "span", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "grid-column", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "span 2", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 아이템이 가로로 두 칸을 차지합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `grid-column: 1 / span 2;`처럼 시작선과 span 값을 함께 지정하세요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}.grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px}.cell{background:#fee2e2;padding:10px;border-radius:8px}.feature{grid-column:1 / span 2}</style></head><body><div class=\"grid\"><div class=\"cell feature\">가로 2칸</div><div class=\"cell\">B</div><div class=\"cell\">C</div><div class=\"cell\">D</div></div></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 4,
          "title": "간격 주기: gap / row-gap / column-gap",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🔌 간격 컨트롤\n- Grid에서도 `gap`으로 **셀 사이 간격**을 통일 지정\n- 축별로 `row-gap`, `column-gap` 가능\n- 마진 없이 간단히 간격만 조절할 때 유용",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "셀들 사이 간격을 **컨테이너 한 줄**로 지정하려면?",
                  "interactionOptions": [
                    { "label": "margin" },
                    { "label": "gap" },
                    { "label": "padding" },
                    { "label": "space-between" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `gap`은 Grid/Flex 모두에서 간격을 다룹니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `gap` 속성으로 간격을 간단히 지정할 수 있어요. `space-between`은 정렬 방식이에요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html><html lang=\\\"ko\\\"><head><style>.grid{ display:grid; grid-template-columns: repeat(3, 1fr); {{BLANK-1}}: {{BLANK-2}}; }</style></head><body><div class=\\\"grid\\\"><div style=\\\"background:#fef3c7;height:50px;border-radius:8px\\\"></div><div style=\\\"background:#fef3c7;height:50px;border-radius:8px\\\"></div><div style=\\\"background:#fef3c7;height:50px;border-radius:8px\\\"></div></div></body></html>",
                  "url": "/code/66",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "space-between", "disabled": false },
                    { "id": "option-2", "value": "row-gap", "disabled": false },
                    { "id": "option-3", "value": "12px", "disabled": false },
                    { "id": "option-4", "value": "gap", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "gap", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "12px", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! `gap: 12px;`로 셀 간격이 통일됐어요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 간격 값은 픽셀/퍼센트 등으로 지정합니다. 이번엔 `12px`이 정답이에요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}</style></head><body><div class=\"grid\"><div style=\"background:#fef3c7;height:50px;border-radius:8px\"></div><div style=\"background:#fef3c7;height:50px;border-radius:8px\"></div><div style=\"background:#fef3c7;height:50px;border-radius:8px\"></div></div></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 5,
          "title": "repeat()와 minmax(): 반응형 열 구성",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🔁 반응형 패턴\n- 반복: `repeat(n, 1fr)` 또는 `repeat(auto-fit, minmax(...))`\n- `minmax(최소, 최대)`: 칸이 너무 작아지지 않도록 하면서 늘릴 땐 넓게\n- `auto-fit`/`auto-fill`: 가능한 만큼 칸을 자동으로 채움",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "가로 폭에 따라 **4등분** 동일 폭 열을 만들려면?",
                  "interactionOptions": [
                    { "label": "grid-template-columns: 1fr 1fr 1fr 1fr" },
                    { "label": "grid-template-columns: repeat(4, 1fr)" },
                    { "label": "grid-template-columns: 25% 25% 25% 25%" },
                    { "label": "grid-template-columns: auto auto auto auto" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `repeat(4, 1fr)`이 가장 간결하고 의미가 분명해요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 여러 방법이 가능하지만, 반복에는 `repeat(4, 1fr)`이 표준적이에요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html><html lang=\\\"ko\\\"><head><style>.grid{ display:grid; grid-template-columns: repeat({{BLANK-1}}, minmax(120px, {{BLANK-2}})); gap:8px }</style></head><body><div class=\\\"grid\\\"><div style=\\\"background:#e9d5ff;height:60px;border-radius:8px\\\"></div><div style=\\\"background:#e9d5ff;height:60px;border-radius:8px\\\"></div><div style=\\\"background:#e9d5ff;height:60px;border-radius:8px\\\"></div><div style=\\\"background:#e9d5ff;height:60px;border-radius:8px\\\"></div></div></body></html>",
                  "url": "/code/67",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "auto-fit", "disabled": false },
                    { "id": "option-2", "value": "auto-fill", "disabled": false },
                    { "id": "option-3", "value": "1fr", "disabled": false },
                    { "id": "option-4", "value": "2fr", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "auto-fit", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "1fr", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 컨테이너 너비에 맞춰 칸 수가 자동으로 변합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `repeat(auto-fit, minmax(120px, 1fr))` 패턴을 기억해 두세요(카드 그리드에 유용).", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:8px}</style></head><body><div class=\"grid\"><div style=\"background:#e9d5ff;height:60px;border-radius:8px\"></div><div style=\"background:#e9d5ff;height:60px;border-radius:8px\"></div><div style=\"background:#e9d5ff;height:60px;border-radius:8px\"></div><div style=\"background:#e9d5ff;height:60px;border-radius:8px\"></div></div></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 6,
          "title": "정렬: justify-items / align-items / place-items",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🎯 셀 내부 정렬\n- `justify-items`: **가로(인라인 축)** 정렬\n- `align-items`: **세로(블록 축)** 정렬\n- 한 번에: `place-items: 가로/세로` 또는 `place-items: center`(양축 중앙)",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "각 셀 안에서 **가로·세로 모두 중앙**으로 배치하려면?",
                  "interactionOptions": [
                    { "label": "justify-items: center" },
                    { "label": "align-items: center" },
                    { "label": "place-items: center" },
                    { "label": "text-align: center" }
                  ],
                  "answer": { "isCorrect": null, "answer": 2, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `place-items: center`는 양축 중앙 정렬의 단축형이에요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 각각 지정하려면 `justify-items`와 `align-items`를 쓰고, 둘 다 중앙은 `place-items: center`가 간단해요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html><html lang=\\\"ko\\\"><head><style>.grid{ display:grid; grid-template-columns: repeat(2, 1fr); {{BLANK-1}}: {{BLANK-2}}; height:140px; gap:8px } .cell{ background:#c7d2fe; border-radius:8px; padding:8px }</style></head><body><div class=\\\"grid\\\"><div class=\\\"cell\\\">A</div><div class=\\\"cell\\\">B</div><div class=\\\"cell\\\">C</div><div class=\\\"cell\\\">D</div></div></body></html>",
                  "url": "/code/68",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "place-items", "disabled": false },
                    { "id": "option-2", "value": "align-items", "disabled": false },
                    { "id": "option-3", "value": "center", "disabled": false },
                    { "id": "option-4", "value": "middle", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "place-items", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "center", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 모든 셀이 가로·세로 중앙 정렬됐습니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `place-items: center;`가 양축 중앙 정렬의 가장 간단한 방법이에요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title><style>body{font-family:system-ui;padding:16px}.grid{display:grid;grid-template-columns:repeat(2,1fr);place-items:center;height:140px;gap:8px}.cell{background:#c7d2fe;border-radius:8px;padding:8px}</style></head><body><div class=\"grid\"><div class=\"cell\">A</div><div class=\"cell\">B</div><div class=\"cell\">C</div><div class=\"cell\">D</div></div></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        }
      ]
    }
  ]
}

// ID : 16
const CSS_6 = {
  "lessons": [
    {
      "id": 16,
      "title": "선택자 심화와 특이성",
      "isCompleted": false,
      "sliders": [
	      {
          "id": 0,
          "title": "🎯 레벨업 시작하기",
          "modules": [
            {
              "id": 0,
              "type": "image",
              "src": "https://s3.ghmate.com/codingpt/lessons/intro_img.png",
              "size": "lg",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "paragraph",
              "content": "# 선택자 심화와 특이성에 대해 알아볼까?",
              "visibility": { "type": "step", "value": 2 }
            }
          ]
        },
        {
          "id": 1,
          "title": "개요",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "선택자 심화에서는 결합자(>, +, ~, 공백), 속성 선택자([type='text']), 가상 클래스(:hover, :focus, :nth-child)와 가상 요소(::before, ::after)를 다룹니다. 특이성은 인라인 > ID > 클래스/속성/가상 > 태그 순이며, 동일 특이성일 때는 나중 규칙이 우선합니다.",
              "visibility": { "type": "step", "value": 1 }
            }
          ]
        }
      ]
    }
  ]
}

// ID : 17
const CSS_7 = {
  "lessons": [
    {
      "id": 17,
      "title": "단위·컬러·타이포그래피",
      "isCompleted": false,
      "sliders": [
	      {
          "id": 0,
          "title": "🎯 레벨업 시작하기",
          "modules": [
            {
              "id": 0,
              "type": "image",
              "src": "https://s3.ghmate.com/codingpt/lessons/intro_img.png",
              "size": "lg",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "paragraph",
              "content": "# 단위·컬러·타이포그래피에 대해 알아볼까?",
              "visibility": { "type": "step", "value": 2 }
            }
          ]
        },
        {
          "id": 1,
          "title": "개요",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "반응형을 염두에 둔 rem/vw 사용법과, 가독성을 위한 line-height, 글꼴 스택(font-family)을 다룹니다. 컬러는 #HEX/rgb()/hsl()을 상황에 맞게 선택하고 대비(Contrast)와 접근성을 고려합니다.",
              "visibility": { "type": "step", "value": 1 }
            }
          ]
        }
      ]
    }
  ]
}

// ID : 18
const CSS_8 = {
  "lessons": [
    {
      "id": 18,
      "title": "반응형 디자인과 미디어 쿼리",
      "isCompleted": false,
      "sliders": [
	      {
          "id": 0,
          "title": "🎯 레벨업 시작하기",
          "modules": [
            {
              "id": 0,
              "type": "image",
              "src": "https://s3.ghmate.com/codingpt/lessons/intro_img.png",
              "size": "lg",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "paragraph",
              "content": "# 반응형 디자인과 미디어 쿼리에 대해 알아볼까?",
              "visibility": { "type": "step", "value": 2 }
            }
          ]
        },
        {
          "id": 1,
          "title": "개요",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "모바일 퍼스트로 기본 스타일을 잡고, `@media (min-width: 768px)` 같은 쿼리로 점진적 향상을 적용합니다. 이미지/그리드/폰트 크기를 분기해 단말별 체감을 개선합니다.",
              "visibility": { "type": "step", "value": 1 }
            }
          ]
        }
      ]
    }
  ]
}

// ID : 19
const CSS_9 = {
  "lessons": [
    {
      "id": 19,
      "title": "트랜지션·트랜스폼·애니메이션",
      "isCompleted": false,
      "sliders": [
	      {
          "id": 0,
          "title": "🎯 레벨업 시작하기",
          "modules": [
            {
              "id": 0,
              "type": "image",
              "src": "https://s3.ghmate.com/codingpt/lessons/intro_img.png",
              "size": "lg",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "paragraph",
              "content": "# 트랜지션·트랜스폼·애니메이션에 대해 알아볼까?",
              "visibility": { "type": "step", "value": 2 }
            }
          ]
        },
        {
          "id": 1,
          "title": "개요",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "`transition: property duration easing delay`를 이해하고, `transform: translate/scale/rotate`로 합성 애니메이션을 구성합니다. `@keyframes`와 `animation` 속성으로 반복/왕복 효과를 만듭니다.",
              "visibility": { "type": "step", "value": 1 }
            }
          ]
        }
      ]
    }
  ]
}

// ID : 20
const CSS_10 = {
  "lessons": [
    {
      "id": 21,
      "title": "CSS 변수와 테마",
      "isCompleted": false,
      "sliders": [
	      {
          "id": 0,
          "title": "🎯 레벨업 시작하기",
          "modules": [
            {
              "id": 0,
              "type": "image",
              "src": "https://s3.ghmate.com/codingpt/lessons/intro_img.png",
              "size": "lg",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "paragraph",
              "content": "# CSS 변수와 테마에 대해 알아볼까?",
              "visibility": { "type": "step", "value": 2 }
            }
          ]
        },
        {
          "id": 1,
          "title": "개요",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "`:root { --primary: #4f46e5; }`처럼 변수를 선언하고 `var(--primary)`로 사용합니다. 테마 전환은 루트 클래스 토글(.theme-dark)이나 환경설정(`prefers-color-scheme`)을 활용해 일관된 색 체계를 유지합니다.",
              "visibility": { "type": "step", "value": 1 }
            }
          ]
        }
      ]
    }
  ]
}

// ID : 21
const JS_1 = {
  "lessons": [
    {
      "id": 22,
      "title": "자바스크립트 시작하기",
      "isCompleted": false,
      "sliders": [
	      {
          "id": 0,
          "title": "🎯 레벨업 시작하기",
          "modules": [
            {
              "id": 0,
              "type": "image",
              "src": "https://s3.ghmate.com/codingpt/lessons/intro_img.png",
              "size": "lg",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "paragraph",
              "content": "# 자바스크립트에 대해 간단히 알아볼까?",
              "visibility": { "type": "step", "value": 2 }
            }
          ]
        },
        {
          "id": 1,
          "title": "브라우저에서 JS 시작하기: <script>와 console.log",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🚀 자바스크립트 시작\n- **내장 스크립트**: `<script> ... </script>` 블록에 직접 작성\n- **외부 스크립트**: `<script src=\"app.js\" defer></script>`로 파일을 불러오기 (📌 `defer`는 HTML 파싱 후 실행 → 화면 깜빡임↓)\n- **출력/디버깅**: `console.log(\"메시지\")`로 개발자 도구 콘솔에 출력",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "외부 JS 파일을 **HTML 파싱이 끝난 뒤** 실행하려면 올바른 태그는?",
                  "interactionOptions": [
                    { "label": "<script src=\"app.js\" defer></script>" },
                    { "label": "<script href=\"app.js\"></script>" },
                    { "label": "<link rel=\"script\" href=\"app.js\">" },
                    { "label": "<script src=\"app.js\" async></script>" }
                  ],
                  "answer": { "isCorrect": null, "answer": 0, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 정답! 외부 파일은 `<script src=\"...\" defer></script>`가 안정적입니다. (`async`는 로드 순서가 달라질 수 있어요)",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ `href`나 `<link>`는 CSS에 쓰입니다. 외부 JS는 `<script src=\"...\" defer></script>`를 사용하세요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\\n<html lang=\\\"ko\\\">\\n<head>\\n  <meta charset=\\\"UTF-8\\\"/>\\n  <title>JS 시작</title>\\n  <{{BLANK-1}}>\\n    console.log(\\\"JS 시작!\\\");\\n  </{{BLANK-1}}>\\n</head>\\n<body>\\n  <p id=\\\"out\\\">콘솔을 확인해 보세요!</p>\\n</body>\\n</html>",
                  "url": "/code/69",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "<script>", "disabled": false },
                    { "id": "option-2", "value": "<style>", "disabled": false },
                    { "id": "option-3", "value": "</script>", "disabled": false },
                    { "id": "option-4", "value": "</style>", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "<script>", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "</script>", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  {
                    "id": 0,
                    "type": "paragraph",
                    "content": "🎉 잘했어요! `<script>` 블록이 올바르게 작성됐어요. 콘솔에 메시지가 출력됩니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "correct"
                  },
                  {
                    "id": 1,
                    "type": "paragraph",
                    "content": "❌ 자바스크립트 코드는 `<script>` 태그 안에 작성해야 합니다. CSS는 `<style>`, 외부 리소스 연결은 `<link>`예요.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\\\"ko\\\"><head><meta charset=\\\"UTF-8\\\"><title>미리보기</title></head><body style=\\\"font-family:system-ui;padding:16px\\\"><p id=\\\"out\\\">콘솔을 열어 <code>JS 시작!</code> 메시지를 확인하세요.</p><script>console.log(\\\"JS 시작!\\\");</script></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 2,
          "title": "변수 선언: let / const / var",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🧩 변수 기본\n- `let`: **재할당 가능**, 같은 블록 재선언 불가\n- `const`: **재할당 불가**(상수). 객체/배열은 내용 변경 가능하나 **식별자 재할당은 불가**\n- `var`: 함수 스코프, 호이스팅 이슈 → **지양**하고 `let/const` 사용 권장",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "값은 **바꿀 수 있지만** 같은 블록에서 **재선언은 불가**한 키워드는?",
                  "interactionOptions": [
                    { "label": "let" },
                    { "label": "const" },
                    { "label": "var" },
                    { "label": "static" }
                  ],
                  "answer": { "isCorrect": null, "answer": 0, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `let`은 재할당은 가능하지만 **재선언은 불가**해요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `const`는 재할당 불가, `var`는 재선언이 가능해 충돌을 유발할 수 있어요. 정답은 `let`입니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\\n<html lang=\\\"코\\\"><head><meta charset=\\\"UTF-8\\\"><style>body{font-family:system-ui}</style></head><body><p id=\\\"out\\\"></p><script>{{BLANK-1}} count = 1; {{BLANK-2}} PI = 3.14; count = 2; document.getElementById(\\\"out\\\").textContent = count + \", \" + PI;</script></body></html>",
                  "url": "/code/70",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "var", "disabled": false },
                    { "id": "option-2", "value": "const", "disabled": false },
                    { "id": "option-3", "value": "let", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "let", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "const", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! `let`은 재할당, `const`는 상수에 적합합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `count`는 바뀌므로 `let`, 원주율 같은 상수는 `const`로 선언해요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\\\"ko\\\"><head><meta charset=\\\"UTF-8\\\"><title>미리보기</title></head><body style=\\\"font-family:system-ui;padding:16px\\\"><p id=\\\"out\\\"></p><script>let count=1; const PI=3.14; count=2; document.getElementById(\\\"out\\\").textContent = count + \", \" + PI;</script></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 3,
          "title": "데이터 타입과 typeof",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🔤 기본 타입\n- 원시 타입: string, number, boolean, undefined, bigint, symbol (그리고 `null`)\n- 타입 확인: **`typeof 값`** (예: `typeof \"hi\"` → \"string\")\n- 주의: `typeof null`은 역사적 이유로 \"object\"를 반환해요(암기 포인트)",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "값의 **자료형을 확인**할 때 쓰는 연산자는?",
                  "interactionOptions": [
                    { "label": "typeof" },
                    { "label": "instanceof" },
                    { "label": "type()" },
                    { "label": "kindof" }
                  ],
                  "answer": { "isCorrect": null, "answer": 0, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `typeof`는 값의 자료형 이름을 문자열로 돌려줘요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 자료형 확인은 `typeof`를 사용합니다. `type()` 같은 내장은 없어요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\\n<html lang=\\\"ko\\\"><head><meta charset=\\\"UTF-8\\\"></head><body style=\\\"font-family:system-ui;padding:16px\\\"><p id=\\\"out\\\"></p><script>const name = \\\"Sara\\\"; const age = 20; const types = (typeof {{BLANK-1}}) + \\\" / \\\" + (typeof {{BLANK-2}}); document.getElementById(\\\"out\\\").textContent = types;</script></body></html>",
                  "url": "/code/71",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "type", "disabled": false },
                    { "id": "option-2", "value": "types", "disabled": false },
                    { "id": "option-3", "value": "typeof", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "typeof", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! `name`은 string, `age`는 number로 출력됩니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1,
                    "type": "paragraph",
                    "content": "❌ 괄호 안에는 자료형 확인 `typeof`를 넣어야 요. 확인할 `name`, `age`는 식별자 입니다.",
                    "visibility": { "type": "step", "value": 1 },
                    "condition": "wrong"
                  }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\\\"ko\\\"><head><meta charset=\\\"UTF-8\\\"><title>미리보기</title></head><body style=\\\"font-family:system-ui;padding:16px\\\"><p id=\\\"out\\\"></p><script>const name=\\\"Sara\\\"; const age=20; const types=(typeof name)+\\\" / \\\"+(typeof age); document.getElementById(\\\"out\\\").textContent=types;</script></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 4,
          "title": "비교 연산: == vs === (엄격 동등)",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### ⚖️ 비교 연산 핵심\n- `==` 느슨한 동등: **타입 강제 변환** 후 비교 → 예측 어려움\n- `===` 엄격 동등: **타입 & 값**을 모두 비교 → 권장!\n- 습관: 비교는 항상 `===`/`!==`를 우선 사용하기",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "값과 **타입을 모두 비교**하는 연산자는?",
                  "interactionOptions": [
                    { "label": "==" },
                    { "label": "===" },
                    { "label": "!=" },
                    { "label": ">=" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `===`는 타입 변환 없이 엄격하게 비교합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 느슨한 동등(`==`) 대신 **엄격 동등(`===`)**을 사용하세요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\\n<html lang=\\\"ko\\\"><head><meta charset=\\\"UTF-8\\\"></head><body style=\\\"font-family:system-ui;padding:16px\\\"><p id=\\\"out\\\"></p><script>const a = \\\"5\\\"; const b = 5; const same = (a {{BLANK-1}} b); document.getElementById(\\\"out\\\").textContent = \\\"결과: \\\" + same;</script></body></html>",
                  "url": "/code/72",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "==", "disabled": false },
                    { "id": "option-2", "value": "===", "disabled": false },
                    { "id": "option-3", "value": "!=", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "===", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 문자열 \"5\"와 숫자 5는 `===`로 비교하면 **false**가 됩니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `==`는 타입을 강제로 맞추어 true가 될 수 있어요. 예측 가능한 `===`를 사용하세요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\\\"ko\\\"><head><meta charset=\\\"UTF-8\\\"><title>미리보기</title></head><body style=\\\"font-family:system-ui;padding:16px\\\"><p id=\\\"out\\\"></p><script>const a=\\\"5\\\", b=5; const same=(a===b); document.getElementById(\\\"out\\\").textContent=\\\"결과: \\\"+same;</script></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 5,
          "title": "문자열 템플릿 리터럴: `백틱`과 ${표현식}",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🧵 템플릿 리터럴\n- 백틱(\\`)으로 감싸고 `${표현식}`을 삽입: <br>`const msg = \\`안녕, ${name}! 점수: ${score}\\`;`\n- 문자열 연결 `+` 보다 가독성↑, 줄바꿈도 편리\n- 표현식에 **함수 호출/연산**도 가능: `${1+2}` → `3`",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "이름 변수를 문자열에 **간편히 삽입**하는 올바른 예시는?",
                  "interactionOptions": [
                    { "label": "`안녕, ${name}`" },
                    { "label": "\"안녕, ${name}\"" },
                    { "label": "\"안녕, ${name}\"" },
                    { "label": "\"안녕, \" + name" }
                  ],
                  "answer": { "isCorrect": null, "answer": 0, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! 템플릿 리터럴은 **백틱**과 `${}` 구문을 사용합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 작은따옴표나 큰따옴표는 `${}`이 동작하지 않습니다. **백틱(\\`)**을 사용해야 해요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\\n<html lang=\\\"ko\\\"><head><meta charset=\\\"UTF-8\\\"></head><body style=\\\"font-family:system-ui;padding:16px\\\"><p id=\\\"out\\\"></p><script>const name=\\\"민지\\\"; const score=95; const msg = `이름: ${{{BLANK-1}}}, 점수: ${{{BLANK-2}}}`; document.getElementById(\\\"out\\\").textContent = msg;</script></body></html>",
                  "url": "/code/73",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "name", "disabled": false },
                    { "id": "option-2", "value": "${name}", "disabled": false },
                    { "id": "option-3", "value": "score", "disabled": false },
                    { "id": "option-4", "value": "${score}", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "${name}", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "${score}", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 템플릿 리터럴로 변수 값이 문자열에 깔끔히 들어갔어요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `${표현식}` 내부에 **식별자**(예: name, score)를 넣어야 합니다. 빈 `${}`은 의미가 없어요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\\\"ko\\\"><head><meta charset=\\\"UTF-8\\\"><title>미리보기</title></head><body style=\\\"font-family:system-ui;padding:16px\\\"><p id=\\\"out\\\"></p><script>const name=\\\"민지\\\", score=95; const msg=`이름: ${name}, 점수: ${score}`; document.getElementById(\\\"out\\\").textContent=msg;</script></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 6,
          "title": "조건문 if/else 기본",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🔀 분기 처리\n- 형태: `if (조건) { ... } else { ... }`\n- 비교 연산자와 함께 사용: `>=`, `===` 등\n- 블록(`{ }`) 안에서 실행할 코드를 작성합니다.",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "나이가 18 이상이면 \"성인\"을 출력하는 조건문의 머리부분으로 알맞은 것은?",
                  "interactionOptions": [
                    { "label": "if age >= 18" },
                    { "label": "if (age >= 18) { ... }" },
                    { "label": "if (age => 18) ..." },
                    { "label": "if (age = 18)" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! 괄호와 비교 연산자를 정확히 사용해야 합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `if (조건) { ... }` 형태를 사용하고, 비교는 `>=` 같은 연산자를 써야 합니다. `=`는 대입이에요!", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\\n<html lang=\\\"ko\\\"><head><meta charset=\\\"UTF-8\\\"></head><body style=\\\"font-family:system-ui;padding:16px\\\"><p id=\\\"out\\\"></p><script>const age = 17; let result = \\\"\\\"; if ({{BLANK-1}} {{BLANK-2}} 18) { result = \\\"성인\\\"; } else { result = \\\"미성년\\\"; } document.getElementById(\\\"out\\\").textContent = result;</script></body></html>",
                  "url": "/code/74",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "!=", "disabled": false },
                    { "id": "option-2", "value": ">=", "disabled": false },
                    { "id": "option-3", "value": "===", "disabled": false },
                    { "id": "option-4", "value": "<=", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": ">=", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! age가 18 이상인지 비교하는 조건이 완성됐습니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `if (age >= 18)`처럼 **식별자 + 비교 연산자 + 기준값** 형태를 기억해요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\\\"ko\\\"><head><meta charset=\\\"UTF-8\\\"><title>미리보기</title></head><body style=\\\"font-family:system-ui;padding:16px\\\"><p id=\\\"out\\\"></p><script>const age=17; let result=\\\"\\\"; if(age>=18){result=\\\"성인\\\";}else{result=\\\"미성년\\\";} document.getElementById(\\\"out\\\").textContent=result;</script></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        }
      ]
    }
  ]
}

// ID : 22
const JS_2 = {
  "lessons": [
    {
      "id": 23,
      "title": "논리연산, 함수, 배열, 반복, 삼항",
      "isCompleted": false,
      "sliders": [
	      {
          "id": 0,
          "title": "🎯 레벨업 시작하기",
          "modules": [
            {
              "id": 0,
              "type": "image",
              "src": "https://s3.ghmate.com/codingpt/lessons/intro_img.png",
              "size": "lg",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "paragraph",
              "content": "# 논리연산, 함수, 배열, 반복, 삼항에 대해 알아볼까?",
              "visibility": { "type": "step", "value": 2 }
            }
          ]
        },
        {
          "id": 1,
          "title": "Truthy/Falsy와 논리연산자 (||, &&, !)",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### ✅ Truthy/Falsy & 단축 평가\n- JS에서 값들은 조건문에서 **truthy** 또는 **falsy**로 평가돼요.\n- 주요 falsy: `false, 0, \"\", null, undefined, NaN`\n- `A || B`: A가 **truthy면 A**, 아니면 **B** (기본값 지정에 유용)\n- `A && B`: A가 **truthy면 B**, 아니면 **A** (조건부 실행 패턴)\n- `!x`: 논리 부정",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "사용자 이름이 빈 문자열일 때 **'게스트'**를 사용하려면 어떤 표현이 적절할까요?",
                  "interactionOptions": [
                    { "label": "name && \"게스트\"" },
                    { "label": "name || \"게스트\"" },
                    { "label": "\"게스트\" || name" },
                    { "label": "!\"게스트\" && name" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `||`는 왼쪽이 falsy면 오른쪽 값을 반환해요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 기본값 패턴은 `name || \"게스트\"`예요. 왼쪽이 비어 있으면 오른쪽을 사용합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\n<html lang=\"ko\"><head><meta charset=\"UTF-8\"></head><body style=\"font-family:system-ui;padding:16px\"><p id=\"out\"></p><script>const user=\"\"; const displayName = user {{BLANK-1}} \"게스트\"; document.getElementById(\"out\").textContent = displayName;</script></body></html>",
                  "url": "/code/75",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "&&", "disabled": false },
                    { "id": "option-2", "value": "||", "disabled": false },
                    { "id": "option-3", "value": "??", "disabled": false },
                    { "id": "option-4", "value": "!!", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "||", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 빈 문자열은 false라 `||` 오른쪽 값으로 대체돼요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 기본값 패턴은 `값 || 기본값`입니다. `&&`는 조건부 실행 패턴이에요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title></head><body style=\"font-family:system-ui;padding:16px\"><p id=\"out\"></p><script>const user=\"\"; const displayName=user||\"게스트\"; document.getElementById(\"out\").textContent=displayName;</script></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 2,
          "title": "함수 선언과 return",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🧩 함수 기본\n- 선언: `function add(a, b) { return a + b; }`\n- 호출: `add(2, 3)` → `5`\n- `return`은 **값을 돌려주고 함수 실행을 종료**합니다.",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "`return`의 설명으로 가장 알맞은 것은?",
                  "interactionOptions": [
                    { "label": "지역 변수를 모두 전역으로 만든다" },
                    { "label": "함수를 일시정지하고 나중에 재개한다" },
                    { "label": "값을 호출자에게 돌려주고 함수를 종료한다" },
                    { "label": "함수 안의 콘솔을 지운다" }
                  ],
                  "answer": { "isCorrect": null, "answer": 2, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `return`을 만나면 함수는 즉시 종료돼요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `return`은 값을 돌려주고 함수를 **끝냅니다**. 일시정지가 아니에요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\n<html lang=\"ko\"><head><meta charset=\"UTF-8\"></head><body style=\"font-family:system-ui;padding:16px\"><p id=\"out\"></p><script>function add(a,b){ {{BLANK-1}} a+b; } document.getElementById(\"out\").textContent = add(3,4);</script></body></html>",
                  "url": "/code/76",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "break", "disabled": false },
                    { "id": "option-2", "value": "yield", "disabled": false },
                    { "id": "option-3", "value": "return", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "return", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! `add(3,4)`는 7을 반환합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 결과를 돌려주려면 `return`을 사용해야 합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title></head><body style=\"font-family:system-ui;padding:16px\"><p id=\"out\"></p><script>function add(a,b){return a+b;} document.getElementById(\"out\").textContent=add(3,4);</script></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 3,
          "title": "화살표 함수(Arrow Function) 기초",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### ➡️ 간결한 함수 표기\n- 기본: `const f = (x) => x * 2;`\n- 여러 줄이면 `{ }`와 `return` 필요: `const f = (x) => { return x * 2; }`\n- 콜백에서 자주 사용되어 가독성이 좋아요.",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "숫자를 2배로 만드는 **화살표 함수**로 올바른 것은?",
                  "interactionOptions": [
                    { "label": "const double = x => return x * 2;" },
                    { "label": "const double = (x) => x * 2;" },
                    { "label": "function => (x) x * 2;" },
                    { "label": "double(x) -> x * 2" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! 한 줄 본문은 `return`을 생략할 수 있어요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 화살표 함수는 `(매개변수) => 표현식` 형태예요. `return`은 중괄호 블록일 때 필요합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\n<html lang=\"ко\"><head><meta charset=\"UTF-8\"></head><body style=\"font-family:system-ui;padding:16px\"><p id=\"out\"></p><script>const double = (n) => {{BLANK-1}}; document.getElementById(\"out\").textContent = double(7);</script></body></html>",
                  "url": "/code/77",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "n * 2", "disabled": false },
                    { "id": "option-2", "value": "return n * 2", "disabled": false },
                    { "id": "option-3", "value": "{ n * 2 }", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "n * 2", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 화살표 함수는 표현식만 적으면 그 값이 반환됩니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 중괄호를 쓰면 `return`이 필요합니다. 화살표 함수를 사용할 경우, `n * 2`만 적으세요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title></head><body style=\"font-family:system-ui;padding:16px\"><p id=\"out\"></p><script>const double=(n)=>n*2; document.getElementById(\"out\").textContent=double(7);</script></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 4,
          "title": "배열(Array) 기초: 인덱스, push, length",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 📚 배열 다루기\n- 생성: `const arr = [1, 2, 3]`\n- 인덱스 접근: `arr[0]`\n- 추가: `arr.push(값)`\n- 길이: `arr.length` (마지막 인덱스는 `length - 1`)",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "배열의 **길이**를 알려주는 속성은?",
                  "interactionOptions": [
                    { "label": "size()" },
                    { "label": "length" },
                    { "label": "count()" },
                    { "label": "len" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `length`는 배열 크기를 나타내요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 정답은 `length`입니다. 메서드가 아니라 **속성**이에요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\n<html lang=\"ko\"><head><meta charset=\"UTF-8\"></head><body style=\"font-family:system-ui;padding:16px\"><p id=\"out\"></p><script>const colors=[\"red\",\"green\"]; colors.{{BLANK-1}}(\"blue\"); const size = colors.{{BLANK-2}}; document.getElementById(\"out\").textContent = colors.join(\", \") + \" | \" + size;</script></body></html>",
                  "url": "/code/78",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "push", "disabled": false },
                    { "id": "option-2", "value": "append", "disabled": false },
                    { "id": "option-3", "value": "length", "disabled": false },
                    { "id": "option-4", "value": "size", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "push", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "length", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! `colors`는 \"red, green, blue\"가 되고 길이는 3이에요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 항목 추가는 `push`, 길이는 `length` 속성으로 가져옵니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title></head><body style=\"font-family:system-ui;padding:16px\"><p id=\"out\"></p><script>const colors=[\"red\",\"green\"]; colors.push(\"blue\"); const size=colors.length; document.getElementById(\"out\").textContent=colors.join(\", \")+\" | \"+size;</script></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 5,
          "title": "반복문: for와 for...of",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🔁 반복의 기본\n- 전통적 for: `for (let i=0; i<arr.length; i++) { ... }`\n- **값 중심** 순회: `for (const v of arr) { ... }`\n- `for...of`는 배열/이터러블의 **값**을 꺼내기 좋아요. (`for...in`은 키/인덱스에 사용)",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "배열의 **값들**을 순서대로 꺼낼 때 더 적합한 반복문은?",
                  "interactionOptions": [
                    { "label": "for...in" },
                    { "label": "for...of" },
                    { "label": "while (arr)" },
                    { "label": "loop arr" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `for...of`는 값 자체를 순회합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `for...in`은 키/인덱스를 순회합니다. 값 순회는 `for...of`가 적절해요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\n<html lang=\"ko\"><head><meta charset=\"UTF-8\"></head><body style=\"font-family:system-ui;padding:16px\"><p id=\"out\"></p><script>const nums=[1,2,3]; let sum=0; for ({{BLANK-1}} {{BLANK-2}} nums){ sum += n; } document.getElementById(\"out\").textContent = sum;</script></body></html>",
                  "url": "/code/79",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "if", "disabled": false },
                    { "id": "option-2", "value": "for", "disabled": false },
                    { "id": "option-3", "value": "of", "disabled": false },
                    { "id": "option-4", "value": "in", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "for", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "of", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! `sum`은 6이 됩니다. (`1+2+3`)", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 값 순회는 `for (const n **of** nums)` 형태를 사용합니다. `in`은 인덱스 순회예요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title></head><body style=\"font-family:system-ui;padding:16px\"><p id=\"out\"></p><script>const nums=[1,2,3]; let sum=0; for(const n of nums){sum+=n;} document.getElementById(\"out\").textContent=sum;</script></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 6,
          "title": "삼항 연산자(?:)로 간단한 분기",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🔀 한 줄 조건식\n- 형태: `조건 ? 값1 : 값2`\n- 예) `const grade = score >= 90 ? \"A\" : \"B\";`\n- 간단한 분기에서 가독성을 높여 줍니다(과도한 중첩은 지양).",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "점수가 90 이상이면 'A', 아니면 'B'로 만드는 식은?",
                  "interactionOptions": [
                    { "label": "score >= 90 : \"A\" ? \"B\"" },
                    { "label": "score ? \"A\" : \"B\" >= 90" },
                    { "label": "score >= 90 ? \"A\" : \"B\"" },
                    { "label": "if (score >= 90) \"A\" : \"B\"" }
                  ],
                  "answer": { "isCorrect": null, "answer": 2, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `조건 ? 참값 : 거짓값` 순서입니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 삼항은 `조건 ? 값1 : 값2` 형태예요. 위치를 헷갈리지 않게 주의!", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\n<html lang=\"ko\"><head><meta charset=\"UTF-8\"></head><body style=\"font-family:system-ui;padding:16px\"><p id=\"out\"></p><script>const score=85; const grade = (score >= 90) ? \"A\" : {{BLANK-1}}; document.getElementById(\"out\").textContent = grade;</script></body></html>",
                  "url": "/code/80",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "\"B\"", "disabled": false },
                    { "id": "option-2", "value": "B", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "\"B\"", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! score가 85이므로 결과는 \"B\"입니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 문자열 리터럴은 따옴표로 감싸야 합니다. `\"B\"`나 `'B'`를 사용하세요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang=\"ko\"><head><meta charset=\"UTF-8\"><title>미리보기</title></head><body style=\"font-family:system-ui;padding:16px\"><p id=\"out\"></p><script>const score=85; const grade=score>=90?\"A\":\"B\"; document.getElementById(\"out\").textContent=grade;</script></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        }
      ]
    }
  ]
}

// ID : 23
const JS_3 = {
  "lessons": [
    {
      "id": 24,
      "title": "객체, 메서드, map·filter, DOM, 이벤트",
      "isCompleted": false,
      "sliders": [
	      {
          "id": 0,
          "title": "🎯 레벨업 시작하기",
          "modules": [
            {
              "id": 0,
              "type": "image",
              "src": "https://s3.ghmate.com/codingpt/lessons/intro_img.png",
              "size": "lg",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "paragraph",
              "content": "# 객체, 메서드, map·filter, DOM, 이벤트에 대해 간단히 알아볼까?",
              "visibility": { "type": "step", "value": 2 }
            }
          ]
        },
        {
          "id": 1,
          "title": "객체 리터럴과 프로퍼티 접근(점/대괄호)",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🧱 객체 기초\n- 생성: `const user = { name: 'Eun', age: 21 }`\n- **점 표기**: `user.name`\n- **대괄호 표기**: `user['home-city']`, `user[key]`(키가 변수일 때 유용)",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "다음 중 **변수에 들어있는 키 이름**으로 프로퍼티에 접근하는 올바른 방법은?(예: `const key = 'age'`)",
                  "interactionOptions": [
                    { "label": "user.key" },
                    { "label": "user['key']" },
                    { "label": "user[key]" },
                    { "label": "user.get(key)" }
                  ],
                  "answer": { "isCorrect": null, "answer": 2, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! 변수 키 접근은 `user[key]` 형태를 사용합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 점 표기는 **문자 그대로**의 이름만 접근합니다. 변수 키는 `user[key]`처럼 대괄호를 사용하세요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\\n<html lang='ko'><head><meta charset='UTF-8'></head><body style='font-family:system-ui;padding:16px'><p id='out'></p><script>const user={name:'Eun',age:21}; const key='age'; const value = user[{{BLANK-1}}]; document.getElementById('out').textContent = value;</script></body></html>",
                  "url": "/code/81",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "(key)", "disabled": false },
                    { "id": "option-2", "value": "'key'", "disabled": false },
                    { "id": "option-3", "value": "[key]", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "[key]", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 변수 `key`에 담긴 'age'를 사용해 값 21을 얻었습니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 변수에 담긴 키 이름으로 접근하려면 `user[key]`처럼 **대괄호 표기**를 사용해야 합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang='ko'><head><meta charset='UTF-8'><title>미리보기</title></head><body style='font-family:system-ui;padding:16px'><p id='out'></p><script>const user={name:'Eun',age:21}; const key='age'; const value=user[key]; document.getElementById('out').textContent=value;</script></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 2,
          "title": "객체 메서드와 this(간단 버전)",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🙋 메서드와 this\n- 메서드: 객체 안에 정의된 함수\n- `this`는 **해당 객체**를 가리킵니다(메서드 호출 맥락에서)\n- 권장 표기: `greet(){ return 'Hi ' + this.name }`",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "객체 자신의 `name`을 사용해 인사말을 만드는 **올바른 메서드 정의**는?",
                  "interactionOptions": [
                    { "label": "greet(){ return 'Hi ' + this.name }" },
                    { "label": "greet: () => 'Hi ' + this.name" },
                    { "label": "greet(name){ return 'Hi ' + name }" },
                    { "label": "greet: function() { return 'Hi ' + window.name }" }
                  ],
                  "answer": { "isCorrect": null, "answer": 0, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! 메서드에서 `this`는 보통 해당 객체를 가리켜요(화살표 함수는 제외).", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 화살표 함수는 `this`가 다르게 동작할 수 있어요. 메서드는 일반 함수/축약 표기가 안전합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\\n<html lang='ko'><head><meta charset='UTF-8'></head><body style='font-family:system-ui;padding:16px'><p id='out'></p><script>const user={ name:'Eun', greet(){ return 'Hi ' + {{BLANK-1}}.name; } }; document.getElementById('out').textContent = user.greet();</script></body></html>",
                  "url": "/code/82",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "self", "disabled": false },
                    { "id": "option-2", "value": "user", "disabled": false },
                    { "id": "option-3", "value": "this", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "this", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! `user.greet()`가 'Hi Eun'을 반환합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 메서드 내부에서 객체 자신을 가리키려면 `this`를 사용하세요(일반 함수 문법 권장).", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang='ko'><head><meta charset='UTF-8'><title>미리보기</title></head><body style='font-family:system-ui;padding:16px'><p id='out'></p><script>const user={name:'Eun',greet(){return 'Hi '+this.name;}}; document.getElementById('out').textContent=user.greet();</script></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 3,
          "title": "배열 가공: map으로 새 배열 만들기",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🗺️ map\n- 각 요소를 **변환**해 **새 배열**을 반환\n- 원본 배열은 바뀌지 않음\n- 예: `[1,2,3].map(n => n*2) // [2,4,6]`",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "배열의 각 숫자를 **2배**한 **새 배열**을 만들려면?",
                  "interactionOptions": [
                    { "label": "arr.map(n => n * 2)" },
                    { "label": "arr.forEach(n => n * 2)" },
                    { "label": "arr.push(n * 2)" },
                    { "label": "arr.double()" }
                  ],
                  "answer": { "isCorrect": null, "answer": 0, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `map`은 변환 결과로 **새 배열**을 돌려줘요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `forEach`는 반환값이 `undefined`예요. 변환에는 `map`을 사용하세요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\\n<html lang='ko'><head><meta charset='UTF-8'></head><body style='font-family:system-ui;padding:16px'><p id='out'></p><script>const nums=[1,2,3]; const doubled = nums.{{BLANK-1}}(n => n*2); document.getElementById('out').textContent = doubled.join(',');</script></body></html>",
                  "url": "/code/83",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "forEach", "disabled": false },
                    { "id": "option-2", "value": "map", "disabled": false },
                    { "id": "option-3", "value": "filter", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "map", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 결과는 `2,4,6` 입니다. 원본은 유지돼요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 변환 후 새 배열이 필요하면 `map`을 사용해야 합니다. `forEach`는 새 배열을 반환하지 않아요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang='ko'><head><meta charset='UTF-8'><title>미리보기</title></head><body style='font-family:system-ui;padding:16px'><p id='out'></p><script>const nums=[1,2,3]; const doubled=nums.map(n=>n*2); document.getElementById('out').textContent=doubled.join(',');</script></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 4,
          "title": "배열 선별: filter로 조건 통과 요소만",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🔎 filter\n- **조건을 만족**하는 요소만 모아 **새 배열** 반환\n- 예: `[1,2,3,4].filter(n => n%2===0) // [2,4]`",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "짝수만 남기려면 어떤 식이 올바를까요?",
                  "interactionOptions": [
                    { "label": "arr.map(n => n % 2 === 0)" },
                    { "label": "arr.filter(n => n % 2 === 0)" },
                    { "label": "arr.forEach(n => n % 2 === 0)" },
                    { "label": "arr.find(n => n % 2 === 0 && all)" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `filter`는 조건을 통과한 요소만 모읍니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 변환은 `map`, 선별은 `filter`를 사용합니다. 개념을 구분해 보세요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\\n<html lang='ko'><head><meta charset='UTF-8'></head><body style='font-family:system-ui;padding:16px'><p id='out'></p><script>const nums=[1,2,3,4]; const even = nums.{{BLANK-1}}(n => {{BLANK-2}}); document.getElementById('out').textContent = even.join(',');</script></body></html>",
                  "url": "/code/84",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "filter", "disabled": false },
                    { "id": "option-2", "value": "map", "disabled": false },
                    { "id": "option-3", "value": "n % 2 === 0", "disabled": false },
                    { "id": "option-4", "value": "n % 2 == 1", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "filter", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "n % 2 === 0", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 결과는 `2,4` 입니다. 조건을 만족한 요소만 남았어요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `filter(판별함수)`로 조건을 넘긴 요소만 모읍니다. 조건식은 `n % 2 === 0`이었죠!", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang='ko'><head><meta charset='UTF-8'><title>미리보기</title></head><body style='font-family:system-ui;padding:16px'><p id='out'></p><script>const nums=[1,2,3,4]; const even=nums.filter(n=>n%2===0); document.getElementById('out').textContent=even.join(',');</script></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 5,
          "title": "DOM 선택과 텍스트 변경(querySelector, textContent)",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🧷 DOM 조작 기초\n- **선택**: `document.querySelector('#title')` (CSS 선택자 기반)\n- **텍스트 변경**: `el.textContent = '새 제목'`\n- 비슷한 API: `getElementById('id')`(ID 전용)",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "CSS 선택자 방식으로 ID가 `title`인 요소 하나를 선택하는 코드로 알맞은 것은?",
                  "interactionOptions": [
                    { "label": "document.getElementById('title')" },
                    { "label": "document.querySelector('#title')" },
                    { "label": "document.query('#title')" },
                    { "label": "window.select('#title')" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `querySelector`는 CSS 선택자를 그대로 사용합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `querySelector('#id')` 형태를 사용하세요. `getElementById`도 가능하지만 질문은 **CSS 선택자 방식**이었습니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\\n<html lang='ko'><head><meta charset='UTF-8'></head><body style='font-family:system-ui;padding:16px'><h1 id='title'>원래 제목</h1><script>const el = document.{{BLANK-1}}('#title'); el.{{BLANK-2}} = '변경된 제목';</script></body></html>",
                  "url": "/code/85",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "querySelector", "disabled": false },
                    { "id": "option-2", "value": "getElementById", "disabled": false },
                    { "id": "option-3", "value": "textContent", "disabled": false },
                    { "id": "option-4", "value": "innerHTML", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "querySelector", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "textContent", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 제목이 '변경된 제목'으로 바뀌었습니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 선택은 `querySelector('#title')`, 텍스트 변경은 `textContent`가 간단하고 안전해요(HTML 파싱 불필요).", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang='ko'><head><meta charset='UTF-8'><title>미리보기</title></head><body style='font-family:system-ui;padding:16px'><h1 id='title'>원래 제목</h1><script>const el=document.querySelector('#title'); el.textContent='변경된 제목';</script></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 6,
          "title": "이벤트 처리: 클릭 시 카운터 증가(addEventListener)",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🖱️ 이벤트 기본\n- 등록: `el.addEventListener('click', handler)`\n- 핸들러에서 DOM 업데이트하기\n- 인라인 `onclick`보다 명시적이고 분리가 쉬움",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "버튼 클릭 시 함수를 연결하는 표준적인 방법은?",
                  "interactionOptions": [
                    { "label": "btn.addEventListener('click', handler)" },
                    { "label": "btn.onClick(handler)" },
                    { "label": "btn.attachEvent('onclick', handler)" },
                    { "label": "click(btn, handler)" }
                  ],
                  "answer": { "isCorrect": null, "answer": 0, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `addEventListener`가 표준이에요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 표준 방식은 `addEventListener`입니다. 다른 방식은 구식이거나 존재하지 않아요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\\n<html lang='ko'><head><meta charset='UTF-8'></head><body style='font-family:system-ui;padding:16px'><button id='btn'>+1</button> <span id='count'>0</span><script>const btn=document.getElementById('btn'); let n=0; btn.{{BLANK-1}}('click', ()=>{ n++; document.getElementById('count').textContent = n; });</script></body></html>",
                  "url": "/code/86",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "addEventListener", "disabled": false },
                    { "id": "option-2", "value": "onClick", "disabled": false },
                    { "id": "option-3", "value": "attachEvent", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "addEventListener", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 클릭할 때마다 숫자가 1씩 증가합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 표준 이벤트 등록은 `el.addEventListener('click', fn)` 패턴을 사용하세요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang='ko'><head><meta charset='UTF-8'><title>미리보기</title></head><body style='font-family:system-ui;padding:16px'><button id='btn'>+1</button> <span id='count'>0</span><script>const btn=document.getElementById('btn'); let n=0; btn.addEventListener('click',()=>{n++; document.getElementById('count').textContent=n;});</script></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        }
      ]
    }
  ]
}

// ID : 24
const JS_4 = {
  "lessons": [
    {
      "id": 25,
      "title": "구조분해, 스프레드/레스트, 기본값, 축약 표기",
      "isCompleted": false,
      "sliders": [
	      {
          "id": 0,
          "title": "🎯 레벨업 시작하기",
          "modules": [
            {
              "id": 0,
              "type": "image",
              "src": "https://s3.ghmate.com/codingpt/lessons/intro_img.png",
              "size": "lg",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "paragraph",
              "content": "# 구조분해, 스프레드/레스트, 기본값, 축약 표기에 대해 간단히 알아볼까?",
              "visibility": { "type": "step", "value": 2 }
            }
          ]
        },
        {
          "id": 1,
          "title": "배열 구조 분해 할당",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🧩 배열 구조 분해\n- `const [a, b] = [10, 20]` → a=10, b=20\n- 건너뛰기: `const [first, , third] = arr`\n- 기본값: `const [x=0, y=0] = []` → x=0, y=0",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "`const arr=[10,20,30]`에서 앞의 두 값을 x,y로 꺼내려면?",
                  "interactionOptions": [
                    { "label": "const x=arr(0), y=arr(1)" },
                    { "label": "const [x, y] = arr" },
                    { "label": "const {x,y} = arr" },
                    { "label": "let x=arr.0; let y=arr.1" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! 배열은 대괄호 `[]`로 구조 분해합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 객체 구조 분해는 `{}`이고, 배열은 `[]`를 사용해요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\\n<html lang=\\\"ko\\\"><head><meta charset=\\\"UTF-8\\\"></head><body style=\\\"font-family:system-ui;padding:16px\\\"><p id=\\\"out\\\"></p><script>const nums=[1,2,3]; const [first, second] = {{BLANK-1}}; document.getElementById(\\u0027out\\u0027).textContent = first + \\u0027-\\u0027 + second;<\\/script></body></html>",
                  "url": "/code/87",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "nums", "disabled": false },
                    { "id": "option-2", "value": "[1,2]", "disabled": false },
                    { "id": "option-3", "value": "{nums}", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "nums", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! `first=1`, `second=2`가 됩니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 배열 변수 `nums` 자체를 구조 분해해야 합니다. 리터럴 `[1,2]`는 값이 달라요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                { "type": "html", "content": "<!DOCTYPE html><html lang=\\u0027ko\\u0027><head><meta charset=\\u0027UTF-8\\u0027><title>미리보기</title></head><body style=\\u0027font-family:system-ui;padding:16px\\u0027><p id=\\u0027out\\u0027></p><script>const nums=[1,2,3]; const [first,second]=nums; document.getElementById(\\u0027out\\u0027).textContent=first+\\u0027-\\u0027+second;<\\/script></body></html>" }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 2,
          "title": "객체 구조 분해(이름 변경/기본값)",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🧱 객체 구조 분해\n- 이름 변경: `const { name: n } = user`\n- 기본값: `const { age = 0 } = user`\n- 둘 다: `const { name: n, age = 0 } = user`",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "`user.name`을 변수 `n`으로 꺼내는 구문은?",
                  "interactionOptions": [
                    { "label": "const { n } = user" },
                    { "label": "const n = user{name}" },
                    { "label": "const { name: n } = user" },
                    { "label": "const [name: n] = user" }
                  ],
                  "answer": { "isCorrect": null, "answer": 2, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `키:새이름` 형태로 변경합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 객체 구조 분해에서 이름 변경은 `const { 원래키: 새이름 }` 문법을 사용해요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\\n<html lang=\\\"ko\\\"><head><meta charset=\\\"UTF-8\\\"></head><body style=\\\"font-family:system-ui;padding:16px\\\"><p id=\\\"out\\\"></p><script>const user={name:\\u0027Mina\\u0027}; const { name: {{BLANK-1}}, age = {{BLANK-2}} } = user; document.getElementById(\\u0027out\\u0027).textContent = n + \\u0027/\\u0027 + age;<\\/script></body></html>",
                  "url": "/code/88",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "name", "disabled": false },
                    { "id": "option-2", "value": "0", "disabled": false },
                    { "id": "option-3", "value": "n", "disabled": false },
                    { "id": "option-4", "value": "null", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "n", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "0", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! `n=\\u0027Mina\\u0027`, `age=0`으로 표시됩니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 이름 변경은 `name: n`, 기본값은 `age = 0` 형태로 작성해야 합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                { "type": "html", "content": "<!DOCTYPE html><html lang=\\u0027ko\\u0027><head><meta charset=\\u0027UTF-8\\u0027><title>미리보기</title></head><body style=\\u0027font-family:system-ui;padding:16px\\u0027><p id=\\u0027out\\u0027></p><script>const user={name:\\u0027Mina\\u0027}; const {name:n, age=0}=user; document.getElementById(\\u0027out\\u0027).textContent=n+\\u0027/\\u0027+age;<\\/script></body></html>" }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 3,
          "title": "스프레드(...)로 배열 복사/합치기",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 📦 스프레드 연산자\n- 복사: `const copy = [...arr]` (얕은 복사)\n- 결합: `const merged = [...a, ...b]`\n- 주의: 중첩 객체/배열은 **얕게**만 복사됨",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "`arr`의 **독립적인 복사본**을 만드는 코드로 올바른 것은?",
                  "interactionOptions": [
                    { "label": "const clone = arr" },
                    { "label": "const clone = [...arr]" },
                    { "label": "const clone = { ...arr }" },
                    { "label": "arr.clone()" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `[...]`는 새로운 배열을 만듭니다(얕은 복사).", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `const clone = arr`는 **같은 참조**를 가리킵니다. 독립 복사는 스프레드를 쓰세요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\\n<html lang=\\\"ko\\\"><head><meta charset=\\\"UTF-8\\\"></head><body style=\\\"font-family:system-ui;padding:16px\\\"><p id=\\\"out\\\"></p><script>const a=[1,2], b=[3,4]; const merged = [...a, {{BLANK-1}}]; document.getElementById(\\u0027out\\u0027).textContent = merged.join(\\u0027,\\u0027);<\\/script></body></html>",
                  "url": "/code/89",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "b", "disabled": false },
                    { "id": "option-2", "value": "...b", "disabled": false },
                    { "id": "option-3", "value": "[b]", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "...b", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 결과는 `1,2,3,4` 입니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 배열을 펼쳐 넣으려면 `...b`처럼 **스프레드**를 사용해야 합니다. 그냥 `b`는 중첩 배열이 돼요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                { "type": "html", "content": "<!DOCTYPE html><html lang=\\u0027ko\\u0027><head><meta charset=\\u0027UTF-8\\u0027><title>미리보기</title></head><body style=\\u0027font-family:system-ui;padding:16px\\u0027><p id=\\u0027out\\u0027></p><script>const a=[1,2], b=[3,4]; const merged=[...a, ...b]; document.getElementById(\\u0027out\\u0027).textContent=merged.join(\\u0027,\\u0027);<\\/script></body></html>" }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 4,
          "title": "레스트 파라미터(...args)와 합계",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 📥 레스트 파라미터\n- 임의 개수의 인자를 배열로 받기: `function sum(...nums){}`\n- 배열처럼 순회 가능: `for (const n of nums) { ... }`\n- 스프레드와 표기가 같지만 **의미가 다름**(펼치기 vs 모으기)",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "아래 중 임의 개수의 숫자를 **배열로 수집**하는 함수 헤더는?",
                  "interactionOptions": [
                    { "label": "function sum(nums...)" },
                    { "label": "function sum(...nums)" },
                    { "label": "function sum(args[])" },
                    { "label": "function sum(*nums)" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `...매개변수명`이 레스트 파라미터입니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 괄호 안 **앞쪽**에 `...`을 붙여 `function sum(...nums)`처럼 작성해야 해요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\\n<html lang=\\\"ko\\\"><head><meta charset=\\\"UTF-8\\\"></head><body style=\\\"font-family:system-ui;padding:16px\\\"><p id=\\\"out\\\"></p><script>function sum({{BLANK-1}}){ let total=0; for(const n of nums){ total+=n; } return total; } document.getElementById(\\u0027out\\u0027).textContent = sum(1,2,3);<\\/script></body></html>",
                  "url": "/code/90",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "...nums", "disabled": false },
                    { "id": "option-2", "value": "nums...", "disabled": false },
                    { "id": "option-3", "value": "args...", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "...nums", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! `sum(1,2,3)`의 결과는 6입니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 레스트 파라미터 표기는 `...식별자` 순서입니다. 뒤에 점을 쓰면 문법 오류예요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                { "type": "html", "content": "<!DOCTYPE html><html lang=\\u0027ko\\u0027><head><meta charset=\\u0027UTF-8\\u0027><title>미리보기</title></head><body style=\\u0027font-family:system-ui;padding:16px\\u0027><p id=\\u0027out\\u0027></p><script>function sum(...nums){let t=0; for(const n of nums){t+=n;} return t;} document.getElementById(\\u0027out\\u0027).textContent=sum(1,2,3);<\\/script></body></html>" }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 5,
          "title": "기본값 매개변수",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🧷 기본값 파라미터\n- `function greet(name=\\u0027게스트\\u0027){...}`\n- 인자를 생략하거나 `undefined`를 전달하면 기본값 사용\n- 다른 매개변수/표현식도 가능: `f(a=1,b=a+1)`",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "레벨이 없으면 1로 처리하는 정의는?",
                  "interactionOptions": [
                    { "label": "function setLevel(level=1){}" },
                    { "label": "function setLevel(level||1){}" },
                    { "label": "function setLevel(level?1:0){}" },
                    { "label": "function setLevel(level==1){}" }
                  ],
                  "answer": { "isCorrect": null, "answer": 0, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! 매개변수 자리에서 바로 기본값을 줄 수 있어요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 기본값은 함수 선언의 **매개변수** 위치에서 `=`로 지정합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\\n<html lang=\\\"ko\\\"><head><meta charset=\\\"UTF-8\\\"></head><body style=\\\"font-family:system-ui;padding:16px\\\"><p id=\\\"out\\\"></p><script>function greet(name={{BLANK-1}}){ return \\`안녕, \\${name}\\`; } document.getElementById(\\u0027out\\u0027).textContent = greet();<\\/script></body></html>",
                  "url": "/code/91",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "'게스트'", "disabled": false },
                    { "id": "option-2", "value": "게스트", "disabled": false },
                    { "id": "option-3", "value": "[게스트]", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "'게스트'", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 인자를 생략하면 \\u0027안녕, 게스트\\u0027가 출력됩니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 문자열 리터럴은 따옴표로 감싸야 합니다. `\\u0027게스트\\u0027` 또는 `\\\"게스트\\\"`를 사용하세요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                { "type": "html", "content": "<!DOCTYPE html><html lang=\\u0027ko\\u0027><head><meta charset=\\u0027UTF-8\\u0027><title>미리보기</title></head><body style=\\u0027font-family:system-ui;padding:16px\\u0027><p id=\\u0027out\\u0027></p><script>function greet(name=\\u0027게스트\\u0027){return \\`안녕, \\${name}\\`;} document.getElementById(\\u0027out\\u0027).textContent=greet();<\\/script></body></html>" }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 6,
          "title": "객체 리터럴 축약 & 계산된 프로퍼티",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### ✨ 모던 객체 문법\n- 축약 표기: 변수명이 키와 같다면 `{name, age}`\n- 계산된 키: `const obj={ [key]: value }`\n- 스프레드로 복사/확장: `const next={ ...prev, active:true }`",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "`name`과 `age` 변수를 같은 이름의 프로퍼티로 갖는 `user`를 만드는 코드?",
                  "interactionOptions": [
                    { "label": "const user = { name: name, age: age }" },
                    { "label": "const user = { name, age }" },
                    { "label": "const user = (name, age)" },
                    { "label": "const user = [ name, age ]" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! 변수명이 키와 같을 때는 `{name, age}`로 축약 가능합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 객체 리터럴의 축약 표기를 사용하면 코드를 줄이고 가독성을 높일 수 있어요: `{name, age}`.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\\n<html lang=\\\"ko\\\"><head><meta charset=\\\"UTF-8\\\"></head><body style=\\\"font-family:system-ui;padding:16px\\\"><p id=\\\"out\\\"></p><script>const key=\\u0027level\\u0027; const obj = { [{{BLANK-1}}]: {{BLANK-2}} }; document.getElementById(\\u0027out\\u0027).textContent = obj.level;<\\/script></body></html>",
                  "url": "/code/92",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "key", "disabled": false },
                    { "id": "option-2", "value": "'level'", "disabled": false },
                    { "id": "option-3", "value": "1", "disabled": false },
                    { "id": "option-4", "value": "'1'", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "key", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "1", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 계산된 키로 `{ level: 1 }` 객체가 만들어졌어요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 대괄호 `[]` 안에 **식별자 `key`**를 넣어 동적으로 키 이름을 만들고, 값은 숫자 `1`을 사용해야 합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                { "type": "html", "content": "<!DOCTYPE html><html lang=\\u0027ko\\u0027><head><meta charset=\\u0027UTF-8\\u0027><title>미리보기</title></head><body style=\\u0027font-family:system-ui;padding:16px\\u0027><p id=\\u0027out\\u0027></p><script>const key=\\u0027level\\u0027; const obj={ [key]:1 }; document.getElementById(\\u0027out\\u0027).textContent=obj.level;<\\/script></body></html>" }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        }
      ]
    }
  ]
}

// ID : 25
const JS_5 = {
  "lessons": [
    {
      "id": 26,
      "title": "동기와 비동기",
      "isCompleted": false,
      "sliders": [
	      {
          "id": 0,
          "title": "🎯 레벨업 시작하기",
          "modules": [
            {
              "id": 0,
              "type": "image",
              "src": "https://s3.ghmate.com/codingpt/lessons/intro_img.png",
              "size": "lg",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "paragraph",
              "content": "# 동기와 비동기에 대해 알아볼까?",
              "visibility": { "type": "step", "value": 2 }
            }
          ]
        },
        {
          "id": 1,
          "title": "동기 vs 비동기, setTimeout",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### ⏱️ 동기/비동기 기초\\n- **동기(Sync)**: 위에서 아래로 **즉시** 실행\\n- **비동기(Async)**: 나중에 실행(대기, 네트워크, 타이머 등)\\n- `setTimeout(fn, ms)`: **ms 후** `fn`을 1회 실행\\n- 이벤트 루프 때문에 `setTimeout(..., 0)`도 **다음 틱**에 실행돼요.",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "일정 시간 후 콜백을 **한 번** 실행하는 API는?",
                  "interactionOptions": [
                    { "label": "setTimeout" },
                    { "label": "setInterval" },
                    { "label": "Promise" },
                    { "label": "alert" }
                  ],
                  "answer": { "isCorrect": null, "answer": 0, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `setTimeout`은 지연 후 **1회** 실행합니다(0ms도 다음 틱).", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `setInterval`은 **반복** 실행입니다. 한 번만 실행하려면 `setTimeout`을 사용하세요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\\n<html lang='ko'><head><meta charset='UTF-8'></head><body style='font-family:system-ui;padding:16px'><p id='out'></p><script>const out=document.getElementById('out'); const log=t=>out.textContent+=t+' '; log('A'); {{BLANK-1}}(()=>log('B'), {{BLANK-2}}); log('C');<\\/script></body></html>",
                  "url": "/code/93",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "setInterval", "disabled": false },
                    { "id": "option-2", "value": "setTimeout", "disabled": false },
                    { "id": "option-3", "value": "0", "disabled": false },
                    { "id": "option-4", "value": "1000", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "setTimeout", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "0", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 잘했어요! 화면에는 `A C B` 순서로 출력돼요(비동기 큐).", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `setTimeout(fn, 0)`은 **즉시**가 아니라 다음 틱에 실행돼 `A C B`가 됩니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang='ko'><head><meta charset='UTF-8'><title>미리보기</title></head><body style='font-family:system-ui;padding:16px'><p id='out'></p><script>const out=document.getElementById('out'); const log=t=>out.textContent+=t+' '; log('A'); setTimeout(()=>log('B'),0); log('C');<\\/script></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 2,
          "title": "콜백 함수 패턴",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### ☎️ 콜백 기본\\n- 콜백: **나중에 실행**할 함수를 인자로 전달\\n- 예: `doAfter(1000, () => console.log('done'))`\\n- 즉시 실행되는 `console.log('done')`을 **그대로 전달하면 안 됨**(함수 자체를 넘겨야 함)",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "콜백을 **올바르게 전달**한 예시는?",
                  "interactionOptions": [
                    { "label": "doAfter(1000, () => console.log('done'))" },
                    { "label": "doAfter(1000, console.log('done'))" },
                    { "label": "doAfter(1000, alert('done'))" },
                    { "label": "doAfter(() => 'done', 1000)" }
                  ],
                  "answer": { "isCorrect": null, "answer": 0, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! **함수 자체**를 인자로 전달해야 나중에 실행됩니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `console.log('done')`는 즉시 실행돼 반환값을 넘겨버립니다. 콜백은 `() => ...`처럼 **함수**를 넘기세요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\\n<html lang='ko'><head><meta charset='UTF-8'></head><body style='font-family:system-ui;padding:16px'><p id='out'>대기 중...</p><script>function doAfter(ms, {{BLANK-1}}){ setTimeout({{BLANK-2}}, ms); } const out=document.getElementById('out'); doAfter(300, ()=>{ out.textContent='완료'; });<\\/script></body></html>",
                  "url": "/code/94",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "fn", "disabled": false },
                    { "id": "option-2", "value": "callback", "disabled": false },
                    { "id": "option-3", "value": "cb", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "cb", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 300ms 후 '완료'가 표시됩니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 콜백 인자 이름과 `setTimeout`에 넘기는 **콜백 참조**가 일치해야 합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang='ko'><head><meta charset='UTF-8'><title>미리보기</title></head><body style='font-family:system-ui;padding:16px'><p id='out'>대기 중...</p><script>function doAfter(ms, cb){ setTimeout(cb, ms); } const out=document.getElementById('out'); doAfter(300, ()=>{ out.textContent='완료'; });<\\/script></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 3,
          "title": "Promise 기초: resolve와 then",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🤝 Promise 시작\\n- `new Promise((resolve, reject)=>{...})`\\n- **성공**은 `resolve(value)`, **실패**는 `reject(error)`\\n- 결과 받기: `promise.then(onFulfilled)` / 오류: `promise.catch(onRejected)`",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "Promise의 **성공 결과**를 처리하는 메서드는?",
                  "interactionOptions": [
                    { "label": "then" },
                    { "label": "catch" },
                    { "label": "finally" },
                    { "label": "await" }
                  ],
                  "answer": { "isCorrect": null, "answer": 0, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `then`은 성공 값을 전달받아 처리합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 오류 처리는 `catch`, 마무리 콜백은 `finally`예요. 성공은 `then`을 사용하세요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\\n<html lang='ko'><head><meta charset='UTF-8'></head><body style='font-family:system-ui;padding:16px'><p id='out'>대기...</p><script>const out=document.getElementById('out'); const work=new Promise((resolve)=>{ setTimeout(()=>{{BLANK-1}}('OK'),300); }); work.{{BLANK-2}}(v=>{ out.textContent=v; });<\\/script></body></html>",
                  "url": "/code/95",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "then", "disabled": false },
                    { "id": "option-2", "value": "reject", "disabled": false },
                    { "id": "option-3", "value": "resolve", "disabled": false },
                    { "id": "option-4", "value": "catch", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "resolve", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "then", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 300ms 뒤에 'OK'가 표시됩니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 성공 콜백은 `resolve`, 처리 메서드는 `then`이에요. 둘을 혼동하지 마세요!", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang='ko'><head><meta charset='UTF-8'><title>미리보기</title></head><body style='font-family:system-ui;padding:16px'><p id='out'>대기...</p><script>const out=document.getElementById('out'); const work=new Promise(res=>{setTimeout(()=>res('OK'),300);}); work.then(v=>{out.textContent=v;});<\\/script></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 4,
          "title": "Promise 체이닝과 catch",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### ⛓️ 체이닝 & 에러 처리\\n- `then`은 **새 Promise**를 반환 → 연속 처리 가능\\n- 오류는 아래로 전파되며 `catch`에서 한 번에 처리 가능\\n- `finally`는 성공/실패와 무관하게 마지막에 호출",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "체인에서 발생한 에러를 **처리**하는 메서드는?",
                  "interactionOptions": [
                    { "label": "then" },
                    { "label": "catch" },
                    { "label": "map" },
                    { "label": "finally" }
                  ],
                  "answer": { "isCorrect": null, "answer": 1, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `catch`는 에러를 받아 처리합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `finally`는 정리용 콜백일 뿐, 에러 객체를 받지 않아요. 에러 처리는 `catch`에서 하세요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\\n<html lang='ko'><head><meta charset='UTF-8'></head><body style='font-family:system-ui;padding:16px'><p id='out'></p><script>Promise.resolve(2).then(n=>n*2).then(n=>{ if(n===4) throw new Error('boom'); return n; }).{{BLANK-1}}(e=>{ document.getElementById('out').textContent='에러 처리'; });<\\/script></body></html>",
                  "url": "/code/96",
                  "isInteractive": true,
                  "inputLength": 1,
                  "interactionOptions": [
                    { "id": "option-1", "value": "handle", "disabled": false },
                    { "id": "option-2", "value": "catch", "disabled": false },
                    { "id": "option-3", "value": "error", "disabled": false },
                    { "id": "option-4", "value": "finally", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "catch", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 던진 에러를 잡아 '에러 처리'를 표시했습니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ 에러는 `catch`에서 처리해야 합니다. `finally`는 정리 단계이며 에러 인자를 받지 않아요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang='ko'><head><meta charset='UTF-8'><title>미리보기</title></head><body style='font-family:system-ui;padding:16px'><p id='out'></p><script>Promise.resolve(2).then(n=>n*2).then(n=>{ if(n===4) throw new Error('boom'); return n; }).catch(()=>{ document.getElementById('out').textContent='에러 처리'; });<\\/script></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 5,
          "title": "async/await 기본",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 💤 async/await\\n- `async function f(){}`: 항상 **Promise** 반환\\n- `await promise`: Promise가 해결될 때까지 **대기** 후 값 받기\\n- 비동기 코드를 동기처럼 읽기 쉽게 만들어 줌",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "비동기 함수를 **선언**하는 키워드는?",
                  "interactionOptions": [
                    { "label": "async" },
                    { "label": "await" },
                    { "label": "defer" },
                    { "label": "promise" }
                  ],
                  "answer": { "isCorrect": null, "answer": 0, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `async`로 선언하고 내부에서 `await`을 사용합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `await`은 **사용** 키워드고, 선언은 `async`가 맞아요.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\\n<html lang='ko'><head><meta charset='UTF-8'></head><body style='font-family:system-ui;padding:16px'><p id='out'>대기...</p><script>const out=document.getElementById('out'); const wait=ms=>new Promise(r=>setTimeout(r,ms)); {{BLANK-1}} function run(){ {{BLANK-2}} wait(200); out.textContent='끝'; } run();<\\/script></body></html>",
                  "url": "/code/97",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "async", "disabled": false },
                    { "id": "option-2", "value": "defer", "disabled": false },
                    { "id": "option-3", "value": "await", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "async", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "await", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 200ms 대기 후 '끝'이 출력됩니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `await`은 **async 함수 내부**에서만 사용 가능합니다. `async function` 선언을 잊지 마세요!", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang='ko'><head><meta charset='UTF-8'><title>미리보기</title></head><body style='font-family:system-ui;padding:16px'><p id='out'>대기...</p><script>const out=document.getElementById('out'); const wait=ms=>new Promise(r=>setTimeout(r,ms)); async function run(){ await wait(200); out.textContent='끝'; } run();<\\/script></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        },
        {
          "id": 6,
          "title": "async/await 에러 처리(try/catch)",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "### 🧯 에러 다루기\\n- `await` 중 에러 → 예외 발생\\n- 처리: `try { ... } catch (e) { ... }`\\n- 실패한 Promise를 던지는 함수와 함께 실습해 봐요.",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "multipleChoice",
              "questions": [
                {
                  "title": "`await`하는 비동기 호출에서 발생한 예외를 **잡으려면** 무엇을 사용하나요?",
                  "interactionOptions": [
                    { "label": "try/catch" },
                    { "label": "if/else" },
                    { "label": "switch" },
                    { "label": "throw만 사용" }
                  ],
                  "answer": { "isCorrect": null, "answer": 0, "userAnswer": null }
                }
              ],
              "visibility": { "type": "step", "value": 2 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 정답! `try/catch`로 예외를 안전하게 처리할 수 있어요.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `await` 중 예외는 `try/catch`로 감싸서 처리해야 합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 2,
              "type": "codeFillTheGap",
              "files": [
                {
                  "name": "index.html",
                  "language": "html",
                  "content": "<!DOCTYPE html>\\n<html lang='ko'><head><meta charset='UTF-8'></head><body style='font-family:system-ui;padding:16px'><p id='out'>시도 중...</p><script>function fail(){ return new Promise((_,reject)=>setTimeout(()=>reject(new Error('x')),200)); } async function run(){ try { const v = {{BLANK-1}} fail(); document.getElementById('out').textContent=v; } {{BLANK-2}}(e){ document.getElementById('out').textContent='실패'; } } run();<\\/script></body></html>",
                  "url": "/code/98",
                  "isInteractive": true,
                  "inputLength": 2,
                  "interactionOptions": [
                    { "id": "option-1", "value": "await", "disabled": false },
                    { "id": "option-2", "value": "then", "disabled": false },
                    { "id": "option-3", "value": "catch", "disabled": false },
                    { "id": "option-4", "value": "error", "disabled": false }
                  ],
                  "answers": [
                    { "isCorrect": null, "answer": "await", "userAnswer": null, "optionElIndex": null },
                    { "isCorrect": null, "answer": "catch", "userAnswer": null, "optionElIndex": null }
                  ]
                }
              ],
              "visibility": { "type": "step", "value": 3 },
              "result": {
                "totalStep": 1,
                "modules": [
                  { "id": 0, "type": "paragraph", "content": "🎉 좋아요! 예외를 잡아 '실패'로 안전하게 표시했습니다.", "visibility": { "type": "step", "value": 1 }, "condition": "correct" },
                  { "id": 1, "type": "paragraph", "content": "❌ `await`은 값을 **기다렸다가** 받지만, 실패 시 예외를 던지므로 `catch`가 필요합니다.", "visibility": { "type": "step", "value": 1 }, "condition": "wrong" }
                ]
              }
            },
            {
              "id": 3,
              "type": "webview",
              "tabs": [
                {
                  "type": "html",
                  "content": "<!DOCTYPE html><html lang='ko'><head><meta charset='UTF-8'><title>미리보기</title></head><body style='font-family:system-ui;padding:16px'><p id='out'>시도 중...</p><script>function fail(){return new Promise((_,reject)=>setTimeout(()=>reject(new Error('x')),200));} async function run(){ try{ const v=await fail(); document.getElementById('out').textContent=v; } catch(e){ document.getElementById('out').textContent='실패'; } } run();<\\/script></body></html>"
                }
              ],
              "visibility": { "type": "step", "value": 4 }
            }
          ]
        }
      ]
    }
  ]
}

// ID : 26
const JS_6 = {
  "lessons": [
    {
      "id": 27,
      "title": "배열 메서드 심화",
      "isCompleted": false,
      "sliders": [
	      {
          "id": 0,
          "title": "🎯 레벨업 시작하기",
          "modules": [
            {
              "id": 0,
              "type": "image",
              "src": "https://s3.ghmate.com/codingpt/lessons/intro_img.png",
              "size": "lg",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "paragraph",
              "content": "# 배열 메서드에 대해 자세히 알아볼까?",
              "visibility": { "type": "step", "value": 2 }
            }
          ]
        },
        {
          "id": 1,
          "title": "개요",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "`reduce`로 합계/최댓값/빈도수를 계산하고, `find`(첫 일치), `some`(하나라도), `every`(모두), `sort`(주의: 원본 변경)를 다룹니다. 불변 패턴(`[...arr].sort(...)`)을 습관화하세요.",
              "visibility": { "type": "step", "value": 1 }
            }
          ]
        }
      ]
    }
  ]
}

// ID : 27
const JS_7 = {
  "lessons": [
    {
      "id": 28,
      "title": "문자열·정규표현식 입문",
      "isCompleted": false,
      "sliders": [
	      {
          "id": 0,
          "title": "🎯 레벨업 시작하기",
          "modules": [
            {
              "id": 0,
              "type": "image",
              "src": "https://s3.ghmate.com/codingpt/lessons/intro_img.png",
              "size": "lg",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "paragraph",
              "content": "# 문자열·정규표현식에 대해 가볍게 알아볼까?",
              "visibility": { "type": "step", "value": 2 }
            }
          ]
        },
        {
          "id": 1,
          "title": "개요",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "문자열 탐색/자르기/치환 기본과 함께 `/패턴/gi` 문법, 특수문자 이스케이프(`\\.` 등), `RegExp.test()`/`String.match()` 사용법을 익힙니다. 사용자 입력 검증의 기초가 돼요.",
              "visibility": { "type": "step", "value": 1 }
            }
          ]
        }
      ]
    }
  ]
}

// ID : 28
const JS_8 = {
  "lessons": [
    {
      "id": 29,
      "title": "JSON과 Fetch API(비동기 데이터)",
      "isCompleted": false,
      "sliders": [
	      {
          "id": 0,
          "title": "🎯 레벨업 시작하기",
          "modules": [
            {
              "id": 0,
              "type": "image",
              "src": "https://s3.ghmate.com/codingpt/lessons/intro_img.png",
              "size": "lg",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "paragraph",
              "content": "# JSON과 Fetch API(비동기 데이터)에 대해 알아볼까?",
              "visibility": { "type": "step", "value": 2 }
            }
          ]
        },
        {
          "id": 1,
          "title": "개요",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "REST API 호출 흐름(요청→응답→파싱)을 이해하고 로딩/에러 상태를 관리합니다. `JSON.stringify/parse`로 직렬화/역직렬화하고, 헤더/메서드/쿼리 등 요청 옵션을 맛봅니다.",
              "visibility": { "type": "step", "value": 1 }
            }
          ]
        }
      ]
    }
  ]
}

// ID : 29
const JS_9 = {
  "lessons": [
    {
      "id": 30,
      "title": "Web Storage와 쿠키",
      "isCompleted": false,
      "sliders": [
	      {
          "id": 0,
          "title": "🎯 레벨업 시작하기",
          "modules": [
            {
              "id": 0,
              "type": "image",
              "src": "https://s3.ghmate.com/codingpt/lessons/intro_img.png",
              "size": "lg",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "paragraph",
              "content": "# Web Storage와 쿠키에 대해 알아볼까?",
              "visibility": { "type": "step", "value": 2 }
            }
          ]
        },
        {
          "id": 1,
          "title": "개요",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "`localStorage`(영구)/`sessionStorage`(세션) 차이를 이해하고, 저장 용량·동기 API 특성을 고려합니다. 쿠키는 `expires`/`max-age`/`secure`/`SameSite` 등 속성으로 제어합니다.",
              "visibility": { "type": "step", "value": 1 }
            }
          ]
        }
      ]
    }
  ]
}

// ID : 30
const JS_10 = {
  "lessons": [
    {
      "id": 31,
      "title": "ES Modules(import/export)와 프로젝트 구조",
      "isCompleted": false,
      "sliders": [
	      {
          "id": 0,
          "title": "🎯 레벨업 시작하기",
          "modules": [
            {
              "id": 0,
              "type": "image",
              "src": "https://s3.ghmate.com/codingpt/lessons/intro_img.png",
              "size": "lg",
              "visibility": { "type": "step", "value": 1 }
            },
            {
              "id": 1,
              "type": "paragraph",
              "content": "# 마지막으로 ES Modules(import/export)와 프로젝트 구조에 대해 알아보자!",
              "visibility": { "type": "step", "value": 2 }
            }
          ]
        },
        {
          "id": 1,
          "title": "개요",
          "modules": [
            {
              "id": 0,
              "type": "paragraph",
              "content": "모듈 간 인터페이스를 설계하고, 순환 의존을 피하는 구조를 생각합니다. 브라우저 모듈 경로, 상대/절대 임포트, 초기 번들링 개념까지 가볍게 다룹니다.",
              "visibility": { "type": "step", "value": 1 }
            }
          ]
        }
      ]
    }
  ]
}