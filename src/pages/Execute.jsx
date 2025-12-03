import { useState, useRef, useEffect } from 'react';
import { executeCode } from '../utils/executeCode';
import { backendUrl } from '../utils/common';

const Execute = () => {
  const [mode, setMode] = useState('execute'); // 'execute' | 'preview'
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [selectedSample, setSelectedSample] = useState('');
  const [logs, setLogs] = useState([]); // 서버 통신 로그 (log 타입)
  const [isRunning, setIsRunning] = useState(false);
  const [status, setStatus] = useState('');
  const [s3Path, setS3Path] = useState('class-id-00000001/default/lesson-id-00000001/code-execution-00000001');
  const [fileName, setFileName] = useState('index.html');
  const [previewLoading, setPreviewLoading] = useState(false);
  const [previewError, setPreviewError] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [terminalOutput, setTerminalOutput] = useState(''); // 터미널 출력 내용
  const abortRef = useRef(null);
  const terminalOutputRef = useRef(null); // 스크롤을 위한 ref

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

  // 터미널 출력 자동 스크롤
  useEffect(() => {
    if (terminalOutputRef.current) {
      terminalOutputRef.current.scrollTop = terminalOutputRef.current.scrollHeight;
    }
  }, [terminalOutput]);

  const handleExecute = async () => {
    if (!code.trim()) {
      alert('코드를 입력해주세요.');
      return;
    }

    setIsRunning(true);
    setLogs([]);
    setStatus('실행 중...');
    setTerminalOutput(''); // 터미널 출력 초기화

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
          // output 타입: 터미널 출력 (실시간으로 추가)
          if (data.data) {
            setTerminalOutput((prev) => prev + data.data);
          }
        },
        onError: (data) => {
          // error 타입: 에러 출력 (빨간색으로 표시)
          if (data.data) {
            setTerminalOutput((prev) => prev + data.data);
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
    setTerminalOutput('');
    setLogs([]);
    setStatus('');
  };

  // 프리뷰 API 호출
  const handlePreview = async () => {
    if (!s3Path.trim()) {
      setPreviewError('S3 경로를 입력해주세요.');
      return;
    }

    if (!fileName.trim()) {
      setPreviewError('파일명을 입력해주세요.');
      return;
    }

    setPreviewLoading(true);
    setPreviewError(null);

    const requestBody = { 
      s3Path: s3Path.trim(),
      fileName: fileName.trim()
    };

    console.log('프리뷰 요청 데이터:', requestBody);

    try {
      const response = await fetch(`${backendUrl}/api/preview`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      
      console.log('프리뷰 응답 데이터:', data);
      console.log('받은 previewUrl:', data.previewUrl);

      if (data.success && data.previewUrl) {
        // iframe에 프리뷰 URL 설정 (백엔드에서 받은 previewUrl을 그대로 사용)
        console.log('iframe에 설정할 URL:', data.previewUrl);
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
          <div className="flex items-center h-10 bg-[#2d2d2d] border-b border-[#3e3e3e] px-3 flex-shrink-0 overflow-x-auto">
            <div className="flex items-center gap-2 min-w-max">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                disabled={isRunning}
                className="px-3 py-1 text-xs bg-[#3c3c3c] border border-[#464647] text-[#cccccc] rounded focus:outline-none focus:border-[#007acc] disabled:opacity-50 disabled:cursor-not-allowed font-mono flex-shrink-0"
              >
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
              </select>
              <select
                value={selectedSample}
                onChange={(e) => handleSampleChange(e.target.value)}
                disabled={isRunning}
                className="px-3 py-1 text-xs bg-[#3c3c3c] border border-[#464647] text-[#cccccc] rounded focus:outline-none focus:border-[#007acc] disabled:opacity-50 disabled:cursor-not-allowed font-mono min-w-[140px] flex-shrink-0"
              >
                <option value="">코드 샘플 선택</option>
                {Object.keys(codeSamples[language]).map((sampleName) => (
                  <option key={sampleName} value={sampleName}>
                    {sampleName}
                  </option>
                ))}
              </select>
              {isRunning && (
                <button
                  onClick={handleStop}
                  className="px-3 py-1 text-xs bg-[#c72e2e] text-white rounded hover:bg-[#d73a3a] transition-colors font-mono flex-shrink-0"
                >
                  중단
                </button>
              )}
              <button
                onClick={handleExecute}
                disabled={isRunning}
                className="px-3 py-1 text-xs bg-[#0e639c] text-white rounded hover:bg-[#1177bb] disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-mono flex-shrink-0"
              >
                실행
              </button>
              <button
                onClick={handleClear}
                disabled={isRunning}
                className="px-3 py-1 text-xs bg-[#3c3c3c] text-[#cccccc] rounded hover:bg-[#464647] disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-mono flex-shrink-0"
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

      {/* 터미널 영역 (하단 33%) - 실시간 출력 */}
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
          ref={terminalOutputRef}
          className="flex-1 w-full bg-[#1e1e1e] p-3 overflow-y-auto"
          style={{ minHeight: 0 }}
        >
          <pre className="text-xs text-[#d4d4d4] font-mono whitespace-pre-wrap break-words m-0">
            {terminalOutput || <span className="text-[#4a4a4a]">터미널 출력이 여기에 표시됩니다...</span>}
          </pre>
        </div>
      </div>
        </>
      ) : (
        <>
          {/* 프리뷰 모드 */}
          {/* 프리뷰 컨트롤 영역 (상단) */}
          <div className="flex items-center h-14 bg-[#2d2d2d] border-b border-[#3e3e3e] px-4 flex-shrink-0 overflow-x-auto">
            <div className="flex items-center gap-3 min-w-max">
              <label className="text-xs font-semibold text-[#cccccc] font-mono whitespace-nowrap flex-shrink-0">
                S3 경로:
              </label>
              <input
                type="text"
                value={s3Path}
                onChange={(e) => {
                  setS3Path(e.target.value);
                  setPreviewError(null);
                }}
                placeholder="class-id-00000006"
                className="w-64 px-3 py-2 bg-[#1c1c1c] border border-[#464647] rounded text-[#d4d4d4] text-xs font-mono focus:outline-none focus:border-[#007acc] transition-colors flex-shrink-0"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !previewLoading) {
                    handlePreview();
                  }
                }}
              />
              <label className="text-xs font-semibold text-[#cccccc] font-mono whitespace-nowrap flex-shrink-0">
                파일명:
              </label>
              <input
                type="text"
                value={fileName}
                onChange={(e) => {
                  setFileName(e.target.value);
                  setPreviewError(null);
                }}
                placeholder="index.html"
                className="w-48 px-3 py-2 bg-[#1c1c1c] border border-[#464647] rounded text-[#d4d4d4] text-xs font-mono focus:outline-none focus:border-[#007acc] transition-colors flex-shrink-0"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !previewLoading) {
                    handlePreview();
                  }
                }}
              />
              <button
                onClick={handlePreview}
                disabled={previewLoading || !s3Path.trim() || !fileName.trim()}
                className="px-4 py-2 bg-[#0e639c] text-white rounded font-semibold hover:bg-[#1177bb] disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-mono text-xs whitespace-nowrap flex-shrink-0"
              >
                {previewLoading ? '로딩 중...' : '프리뷰 보기'}
              </button>
              {previewError && (
                <div className="ml-2 px-3 py-2 bg-[#3c1f1f] border border-[#c72e2e] rounded flex-shrink-0">
                  <p className="text-xs text-[#f48771] font-mono">{previewError}</p>
                </div>
              )}
            </div>
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
                  S3 경로와 파일명을 입력하고 "프리뷰 보기" 버튼을 클릭하세요.
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
