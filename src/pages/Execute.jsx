import { useState, useRef, useEffect } from 'react';
import { executeCode } from '../utils/executeCode';
import { Terminal } from 'xterm';
import { FitAddon } from '@xterm/addon-fit';
import { backendUrl } from '../utils/common';
import 'xterm/css/xterm.css';

const Execute = () => {
  const [mode, setMode] = useState('execute'); // 'execute' | 'preview'
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [selectedSample, setSelectedSample] = useState('');
  const [logs, setLogs] = useState([]); // 서버 통신 로그 (log 타입)
  const [isRunning, setIsRunning] = useState(false);
  const [status, setStatus] = useState('');
  const [s3Path, setS3Path] = useState('class-id-00000006/index.html');
  const [previewLoading, setPreviewLoading] = useState(false);
  const [previewError, setPreviewError] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const abortRef = useRef(null);
  const terminalRef = useRef(null);
  const terminalContainerRef = useRef(null);

  // 언어별 코드 샘플
  const codeSamples = {
    javascript: {
      '기본 출력': `console.log("Hello, World!");
console.log("안녕하세요!");`,
      '변수와 연산': `let a = 10;
let b = 20;
let sum = a + b;
console.log("합계:", sum);
console.log("곱셈:", a * b);`,
      '조건문 (if)': `let score = 85;

if (score >= 90) {
  console.log("A등급");
} else if (score >= 80) {
  console.log("B등급");
} else if (score >= 70) {
  console.log("C등급");
} else {
  console.log("F등급");
}`,
      '반복문 (for)': `// 1부터 10까지 출력
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 배열 순회
let fruits = ["사과", "바나나", "오렌지"];
for (let fruit of fruits) {
  console.log(fruit);
}`,
      '반복문 (while)': `let count = 0;
while (count < 5) {
  console.log("카운트:", count);
  count++;
}`,
      '함수': `// 함수 정의
function add(a, b) {
  return a + b;
}

function greet(name) {
  return "안녕하세요, " + name + "님!";
}

// 함수 호출
console.log(add(5, 3));
console.log(greet("홍길동"));`,
      '배열': `let numbers = [1, 2, 3, 4, 5];

console.log("첫 번째 요소:", numbers[0]);
console.log("배열 길이:", numbers.length);

// 배열 메서드
numbers.push(6);
console.log("추가 후:", numbers);

let doubled = numbers.map(n => n * 2);
console.log("2배:", doubled);`,
      '객체': `let person = {
  name: "홍길동",
  age: 25,
  city: "서울"
};

console.log("이름:", person.name);
console.log("나이:", person.age);

// 객체 순회
for (let key in person) {
  console.log(key + ":", person[key]);
}`
    },
    python: {
      '기본 출력': `print("Hello, World!")
print("안녕하세요!")`,
      '변수와 연산': `a = 10
b = 20
sum = a + b
print(f"합계: {sum}")
print(f"곱셈: {a * b}")`,
      '조건문 (if)': `score = 85

if score >= 90:
    print("A등급")
elif score >= 80:
    print("B등급")
elif score >= 70:
    print("C등급")
else:
    print("F등급")`,
      '반복문 (for)': `# 1부터 10까지 출력
for i in range(1, 11):
    print(i)

# 리스트 순회
fruits = ["사과", "바나나", "오렌지"]
for fruit in fruits:
    print(fruit)`,
      '반복문 (while)': `count = 0
while count < 5:
    print(f"카운트: {count}")
    count += 1`,
      '함수': `# 함수 정의
def add(a, b):
    return a + b

def greet(name):
    return f"안녕하세요, {name}님!"

# 함수 호출
print(add(5, 3))
print(greet("홍길동"))`,
      '리스트': `numbers = [1, 2, 3, 4, 5]

print(f"첫 번째 요소: {numbers[0]}")
print(f"리스트 길이: {len(numbers)}")

# 리스트 메서드
numbers.append(6)
print(f"추가 후: {numbers}")

doubled = [n * 2 for n in numbers]
print(f"2배: {doubled}")`,
      '딕셔너리': `person = {
    "name": "홍길동",
    "age": 25,
    "city": "서울"
}

print(f"이름: {person['name']}")
print(f"나이: {person['age']}")

# 딕셔너리 순회
for key, value in person.items():
    print(f"{key}: {value}")`
    }
  };

  // 언어 변경 시 샘플 초기화
  useEffect(() => {
    setSelectedSample('');
    const firstSample = Object.keys(codeSamples[language])[0];
    setCode(codeSamples[language][firstSample]);
  }, [language]);

  // 샘플 선택 시 코드 변경
  const handleSampleChange = (sampleName) => {
    setSelectedSample(sampleName);
    if (sampleName && codeSamples[language][sampleName]) {
      setCode(codeSamples[language][sampleName]);
    }
  };

  // xterm.js 터미널 초기화
  useEffect(() => {
    if (!terminalContainerRef.current) return;

    // 터미널 생성
    const terminal = new Terminal({
      theme: {
        background: '#1e1e1e',
        foreground: '#d4d4d4',
        cursor: '#007acc',
        selection: '#264f78',
        black: '#000000',
        red: '#f48771',
        green: '#4ec9b0',
        yellow: '#dcdcaa',
        blue: '#569cd6',
        magenta: '#c586c0',
        cyan: '#4ec9b0',
        white: '#d4d4d4',
        brightBlack: '#808080',
        brightRed: '#f48771',
        brightGreen: '#4ec9b0',
        brightYellow: '#dcdcaa',
        brightBlue: '#569cd6',
        brightMagenta: '#c586c0',
        brightCyan: '#4ec9b0',
        brightWhite: '#ffffff',
      },
      fontSize: 12,
      fontFamily: 'Consolas, "Courier New", monospace',
      cursorBlink: true,
      cursorStyle: 'block',
      allowTransparency: true,
      convertEol: true, // \n을 \r\n으로 자동 변환하여 줄바꿈 처리
    });

    const fitAddon = new FitAddon();
    terminal.loadAddon(fitAddon);
    terminal.open(terminalContainerRef.current);
    
    // DOM이 완전히 렌더링된 후 fit() 호출
    const fitTerminal = () => {
      try {
        if (terminalContainerRef.current && terminalContainerRef.current.offsetWidth > 0) {
          fitAddon.fit();
        } else {
          // 아직 크기가 결정되지 않았으면 다음 프레임에 재시도
          requestAnimationFrame(fitTerminal);
        }
      } catch (error) {
        console.error('Error fitting terminal:', error);
      }
    };

    // 약간의 지연 후 fit 실행 (DOM 렌더링 완료 대기)
    setTimeout(() => {
      fitTerminal();
    }, 0);

    terminalRef.current = terminal;

    // 리사이즈 이벤트 처리
    const handleResize = () => {
      try {
        if (terminalContainerRef.current && terminalContainerRef.current.offsetWidth > 0) {
          fitAddon.fit();
        }
      } catch (error) {
        console.error('Error resizing terminal:', error);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      terminal.dispose();
      terminalRef.current = null;
    };
  }, []);

  const handleExecute = async () => {
    if (!code.trim()) {
      alert('코드를 입력해주세요.');
      return;
    }

    setIsRunning(true);
    setLogs([]);
    setStatus('실행 중...');

    // 터미널 초기화
    if (terminalRef.current) {
      terminalRef.current.clear();
      // 커서를 첫 번째 줄로 이동
      terminalRef.current.write('\x1b[H'); // 커서를 홈 위치로 이동
    }

    const abort = await executeCode(
      code,
      language,
      {
        onLog: (data) => {
          // log 타입: 서버 통신 로그 (로그 영역에 표시)
          const message = data.message || '';
          setLogs((prev) => [...prev, { type: 'log', message, timestamp: new Date() }]);
        },
        onOutput: (data) => {
          // output 타입: 터미널 출력 (xterm.js로 표시)
          if (terminalRef.current && data.data) {
            // xterm.js는 \n을 줄바꿈으로 처리하므로 그대로 전달
            terminalRef.current.write(data.data);
          }
        },
        onError: (data) => {
          // error 타입: 에러 출력 (xterm.js로 빨간색으로 표시)
          if (terminalRef.current && data.data) {
            terminalRef.current.write('\x1b[31m'); // 빨간색 시작
            terminalRef.current.write(data.data);
            terminalRef.current.write('\x1b[0m'); // 색상 리셋
          }
          setStatus('에러 발생');
        },
        onClose: (data) => {
          setIsRunning(false);
          const message = data.hasError
            ? `실행 완료 (에러, 종료 코드: ${data.exitCode})`
            : `실행 완료 (종료 코드: ${data.exitCode})`;
          setStatus(message);
          setLogs((prev) => [...prev, { type: 'close', exitCode: data.exitCode, hasError: data.hasError, timestamp: new Date() }]);
        },
      }
    );

    abortRef.current = abort;
  };

  const handleStop = () => {
    if (abortRef.current) {
      abortRef.current();
      abortRef.current = null;
    }
    setIsRunning(false);
    setStatus('중단됨');
  };

  const handleClear = () => {
    if (terminalRef.current) {
      terminalRef.current.clear();
    }
    setLogs([]);
    setStatus('');
  };

  // 프리뷰 API 호출
  const handlePreview = async () => {
    if (!s3Path.trim()) {
      setPreviewError('S3 경로를 입력해주세요.');
      return;
    }

    setPreviewLoading(true);
    setPreviewError(null);

    try {
      const response = await fetch(`${backendUrl}/api/preview`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ s3Path: s3Path.trim() }),
      });

      const data = await response.json();

      if (data.success && data.previewUrl) {
        // iframe에 프리뷰 URL 설정
        setPreviewUrl(data.previewUrl);
      } else {
        setPreviewError(data.message || '프리뷰를 열 수 없습니다.');
        setPreviewUrl(null);
      }
    } catch (err) {
      setPreviewError('프리뷰 요청 중 오류가 발생했습니다.');
      console.error('프리뷰 오류:', err);
    } finally {
      setPreviewLoading(false);
    }
  };

  const logsEndRef = useRef(null);

  useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  return (
    <div className="flex flex-col w-full h-screen bg-[#1e1e1e] overflow-hidden">
      {/* 모드 전환 헤더 */}
      <div className="flex items-center h-10 bg-[#252526] border-b border-[#3e3e3e] px-3 flex-shrink-0">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMode('execute')}
            className={`px-4 py-1.5 text-xs font-semibold rounded transition-colors font-mono ${
              mode === 'execute'
                ? 'bg-[#0e639c] text-white'
                : 'bg-[#3c3c3c] text-[#cccccc] hover:bg-[#464647]'
            }`}
          >
            코드 실행
          </button>
          <button
            onClick={() => setMode('preview')}
            className={`px-4 py-1.5 text-xs font-semibold rounded transition-colors font-mono ${
              mode === 'preview'
                ? 'bg-[#0e639c] text-white'
                : 'bg-[#3c3c3c] text-[#cccccc] hover:bg-[#464647]'
            }`}
          >
            프리뷰
          </button>
        </div>
      </div>

      {/* 모드별 컨텐츠 */}
      {mode === 'execute' ? (
        <>
          {/* 코드 실행 모드 헤더 */}
          <div className="flex items-center justify-between h-10 bg-[#2d2d2d] border-b border-[#3e3e3e] px-3 flex-shrink-0">
            <div className="flex items-center gap-2">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                disabled={isRunning}
                className="px-3 py-1 text-xs bg-[#3c3c3c] border border-[#464647] text-[#cccccc] rounded focus:outline-none focus:border-[#007acc] disabled:opacity-50 disabled:cursor-not-allowed font-mono"
              >
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
              </select>
              <select
                value={selectedSample}
                onChange={(e) => handleSampleChange(e.target.value)}
                disabled={isRunning}
                className="px-3 py-1 text-xs bg-[#3c3c3c] border border-[#464647] text-[#cccccc] rounded focus:outline-none focus:border-[#007acc] disabled:opacity-50 disabled:cursor-not-allowed font-mono min-w-[140px]"
              >
                <option value="">코드 샘플 선택</option>
                {Object.keys(codeSamples[language]).map((sampleName) => (
                  <option key={sampleName} value={sampleName}>
                    {sampleName}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              {isRunning && (
                <button
                  onClick={handleStop}
                  className="px-3 py-1 text-xs bg-[#c72e2e] text-white rounded hover:bg-[#d73a3a] transition-colors font-mono"
                >
                  중단
                </button>
              )}
              <button
                onClick={handleExecute}
                disabled={isRunning}
                className="px-3 py-1 text-xs bg-[#0e639c] text-white rounded hover:bg-[#1177bb] disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-mono"
              >
                실행
              </button>
              <button
                onClick={handleClear}
                disabled={isRunning}
                className="px-3 py-1 text-xs bg-[#3c3c3c] text-[#cccccc] rounded hover:bg-[#464647] disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-mono"
              >
                지우기
              </button>
            </div>
          </div>

      {/* 코드 에디터 영역 (상단 55%) */}
      <div className="flex flex-col flex-[0.55] min-h-0 border-b border-[#3e3e3e]">
        <div className="flex items-center h-7 bg-[#252526] border-b border-[#3e3e3e] px-3 flex-shrink-0">
          <span className="text-xs text-[#cccccc] font-mono">
            {language === 'javascript' ? 'main.js' : 'main.py'}
          </span>
        </div>
        <div className="flex-1 overflow-hidden">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            disabled={isRunning}
            placeholder={`${language === 'javascript' ? 'console.log("Hello, World!");' : 'print("Hello, World!")'}`}
            className="w-full h-full px-4 py-3 bg-[#1e1e1e] text-[#d4d4d4] text-sm font-mono focus:outline-none disabled:opacity-50 resize-none leading-relaxed"
            style={{ 
              tabSize: 2,
              caretColor: '#007acc'
            }}
          />
        </div>
      </div>

      {/* 서버 통신 로그 영역 (중간 12%) */}
      <div className="flex flex-col flex-[0.12] min-h-0 border-b border-[#3e3e3e] bg-[#1e1e1e]">
        <div className="flex items-center h-6 bg-[#252526] border-b border-[#3e3e3e] px-3 flex-shrink-0">
          <span className="text-xs text-[#858585] font-mono">로그</span>
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-1.5 bg-[#1e1e1e]">
          {logs.length === 0 ? (
            <p className="text-[#4a4a4a] text-xs font-mono">서버 통신 로그가 여기에 표시됩니다.</p>
          ) : (
            <div className="space-y-0.5">
              {logs.map((log, index) => (
                <div key={index} className="text-xs font-mono leading-tight">
                  {log.type === 'log' && (
                    <p className="text-[#4ec9b0]">
                      <span className="text-[#858585]">[{log.timestamp.toLocaleTimeString()}]</span> {log.message}
                    </p>
                  )}
                  {log.type === 'close' && (
                    <p className={log.hasError ? 'text-[#f48771]' : 'text-[#4ec9b0]'}>
                      <span className="text-[#858585]">[{log.timestamp.toLocaleTimeString()}]</span> 종료 코드: {log.exitCode} {log.hasError && '(에러)'}
                    </p>
                  )}
                </div>
              ))}
              <div ref={logsEndRef} />
            </div>
          )}
        </div>
      </div>

      {/* 터미널 영역 (하단 33%) - xterm.js 사용 */}
      <div className="flex flex-col flex-[0.33] min-h-0 bg-[#1e1e1e]">
        <div className="flex items-center justify-between h-7 bg-[#252526] border-b border-[#3e3e3e] px-3 flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#cccccc] font-mono">터미널</span>
            {status && (
              <span className="text-xs text-[#858585] font-mono">• {status}</span>
            )}
          </div>
        </div>
        <div 
          ref={terminalContainerRef} 
          className="flex-1 w-full bg-[#1e1e1e] p-2"
          style={{ minHeight: 0 }}
        />
      </div>
        </>
      ) : (
        <>
          {/* 프리뷰 모드 */}
          {/* 프리뷰 컨트롤 영역 (상단) */}
          <div className="flex items-center justify-between h-14 bg-[#2d2d2d] border-b border-[#3e3e3e] px-4 flex-shrink-0">
            <div className="flex items-center gap-3 flex-1 max-w-4xl">
              <label className="text-xs font-semibold text-[#cccccc] font-mono whitespace-nowrap">
                S3 경로:
              </label>
              <input
                type="text"
                value={s3Path}
                onChange={(e) => {
                  setS3Path(e.target.value);
                  setPreviewError(null);
                }}
                placeholder="class-id-00000006/index.html"
                className="flex-1 px-3 py-2 bg-[#1c1c1c] border border-[#464647] rounded text-[#d4d4d4] text-xs font-mono focus:outline-none focus:border-[#007acc] transition-colors"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !previewLoading) {
                    handlePreview();
                  }
                }}
              />
              <button
                onClick={handlePreview}
                disabled={previewLoading || !s3Path.trim()}
                className="px-4 py-2 bg-[#0e639c] text-white rounded font-semibold hover:bg-[#1177bb] disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-mono text-xs whitespace-nowrap"
              >
                {previewLoading ? '로딩 중...' : '프리뷰 보기'}
              </button>
            </div>
            {previewError && (
              <div className="ml-4 px-3 py-2 bg-[#3c1f1f] border border-[#c72e2e] rounded">
                <p className="text-xs text-[#f48771] font-mono">{previewError}</p>
              </div>
            )}
          </div>

          {/* 프리뷰 iframe 영역 (하단) */}
          <div className="flex-1 min-h-0 bg-[#1e1e1e]">
            {previewUrl ? (
              <iframe
                src={previewUrl}
                className="w-full h-full border-0"
                title="HTML Preview"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-[#858585] text-sm font-mono">
                  S3 경로를 입력하고 "프리뷰 보기" 버튼을 클릭하세요.
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Execute;

