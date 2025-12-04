# 프론트엔드 개발 프롬프트: S3 파일 편집기 기능 구현

## 개요
현재 "프리뷰" 탭을 "S3 파일 편집기"로 확장하여, S3 경로의 파일들을 VSCode처럼 편집할 수 있는 기능을 구현합니다.

## 현재 상태
- 프리뷰 탭에서 S3 경로와 파일명을 입력하여 프리뷰를 볼 수 있음
- 백엔드 API: `POST /api/preview` (s3Path, fileName 전달)

## 구현 요구사항

### 1. UI 변경사항

#### 1.1 탭 이름 변경
- "프리뷰" 탭 → "S3 편집기" 또는 "S3" 탭으로 변경

#### 1.2 입력 필드 변경
- **제거**: 파일명 입력 필드 (`fileName` state 및 input 제거)
- **유지**: S3 경로 입력 필드만 유지
- **추가**: "파일 불러오기" 버튼 (S3 경로 옆에 배치)

#### 1.3 레이아웃 구조
```
[S3 편집기 모드]
├── 상단 컨트롤 바
│   ├── S3 경로 입력 필드
│   ├── "파일 불러오기" 버튼
│   └── "프리뷰 보기" 버튼
│
├── 메인 영역 (좌우 분할 또는 탭 방식)
│   ├── 왼쪽: 파일 트리/목록 영역 (30-40%)
│   │   └── S3에서 불러온 파일 목록 표시
│   │       - 파일명 클릭 시 해당 파일 편집 영역에 표시
│   │       - VSCode 스타일의 파일 트리 UI
│   │
│   └── 오른쪽: 파일 편집 영역 (60-70%)
│       ├── 상단: 현재 편집 중인 파일명 표시
│       └── 하단: 코드 에디터 (textarea 또는 Monaco Editor)
│
└── 하단: 프리뷰 영역 (선택적, 토글 가능)
    └── iframe으로 프리뷰 표시
```

### 2. 상태 관리 (State)

#### 2.1 추가 필요한 State
```javascript
const [s3Files, setS3Files] = useState([]); // S3에서 불러온 파일 목록
const [selectedFile, setSelectedFile] = useState(null); // 현재 선택된 파일
const [fileContents, setFileContents] = useState({}); // 파일별 내용 { [파일경로]: 내용 }
const [isLoadingFiles, setIsLoadingFiles] = useState(false); // 파일 목록 로딩 상태
const [isSavingFile, setIsSavingFile] = useState(false); // 파일 저장 중 상태
const [previewMode, setPreviewMode] = useState(false); // 프리뷰 모드 토글
```

#### 2.2 제거할 State
- `fileName` state 제거 (파일명은 자동으로 index.html 찾기)

### 3. API 통신

#### 3.1 파일 목록 불러오기 API
```javascript
// GET /api/s3/files?path={s3Path}
// 또는
// POST /api/s3/files
// Body: { s3Path: string }

const handleLoadFiles = async () => {
  if (!s3Path.trim()) {
    setPreviewError('S3 경로를 입력해주세요.');
    return;
  }

  setIsLoadingFiles(true);
  setPreviewError(null);

  try {
    const response = await fetch(`${backendUrl}/api/s3/files`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ s3Path: s3Path.trim() }),
    });

    const data = await response.json();

    if (data.success && data.files) {
      setS3Files(data.files); // [{ name: 'index.html', path: '...', type: 'file' }, ...]
      // 첫 번째 파일 자동 선택 (또는 index.html 우선 선택)
      const indexFile = data.files.find(f => f.name === 'index.html') || data.files[0];
      if (indexFile) {
        await handleSelectFile(indexFile);
      }
    } else {
      setPreviewError(data.message || '파일 목록을 불러올 수 없습니다.');
    }
  } catch (err) {
    setPreviewError('파일 목록 로딩 중 오류가 발생했습니다.');
    console.error('파일 목록 로딩 오류:', err);
  } finally {
    setIsLoadingFiles(false);
  }
};
```

**예상 응답 형식:**
```json
{
  "success": true,
  "files": [
    {
      "name": "index.html",
      "path": "class-id-00000001/lesson-id-00000001/code-execution-00000001/index.html",
      "type": "file",
      "size": 1024
    },
    {
      "name": "style.css",
      "path": "class-id-00000001/lesson-id-00000001/code-execution-00000001/style.css",
      "type": "file",
      "size": 512
    },
    {
      "name": "script.js",
      "path": "class-id-00000001/lesson-id-00000001/code-execution-00000001/script.js",
      "type": "file",
      "size": 2048
    }
  ]
}
```

#### 3.2 파일 내용 불러오기 API
```javascript
// GET /api/s3/file?path={filePath}
// 또는
// POST /api/s3/file
// Body: { filePath: string }

const handleSelectFile = async (file) => {
  // 이미 로드된 파일이면 캐시에서 가져오기
  if (fileContents[file.path]) {
    setSelectedFile(file);
    return;
  }

  try {
    const response = await fetch(`${backendUrl}/api/s3/file`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ filePath: file.path }),
    });

    const data = await response.json();

    if (data.success && data.content !== undefined) {
      setFileContents(prev => ({
        ...prev,
        [file.path]: data.content
      }));
      setSelectedFile(file);
    } else {
      setPreviewError(data.message || '파일을 불러올 수 없습니다.');
    }
  } catch (err) {
    setPreviewError('파일 로딩 중 오류가 발생했습니다.');
    console.error('파일 로딩 오류:', err);
  }
};
```

**예상 응답 형식:**
```json
{
  "success": true,
  "content": "<!DOCTYPE html>...",
  "filePath": "class-id-00000001/lesson-id-00000001/code-execution-00000001/index.html"
}
```

#### 3.3 파일 저장 API (자동 저장 또는 수동 저장)
```javascript
// PUT /api/s3/file
// Body: { filePath: string, content: string }

const handleSaveFile = async (filePath, content) => {
  setIsSavingFile(true);

  try {
    const response = await fetch(`${backendUrl}/api/s3/file`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        filePath: filePath,
        content: content
      }),
    });

    const data = await response.json();

    if (data.success) {
      // 성공 시 파일 내용 업데이트
      setFileContents(prev => ({
        ...prev,
        [filePath]: content
      }));
      // 성공 메시지 표시 (선택적)
      console.log('파일 저장 완료');
    } else {
      setPreviewError(data.message || '파일 저장에 실패했습니다.');
    }
  } catch (err) {
    setPreviewError('파일 저장 중 오류가 발생했습니다.');
    console.error('파일 저장 오류:', err);
  } finally {
    setIsSavingFile(false);
  }
};
```

**예상 응답 형식:**
```json
{
  "success": true,
  "message": "파일이 성공적으로 저장되었습니다.",
  "filePath": "class-id-00000001/lesson-id-00000001/code-execution-00000001/index.html"
}
```

#### 3.4 프리뷰 API (기존 유지, 파일명 제거)
```javascript
// POST /api/preview
// Body: { s3Path: string } (fileName 제거, 자동으로 index.html 찾기)

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
      body: JSON.stringify({ s3Path: s3Path.trim() }), // fileName 제거
    });

    const data = await response.json();

    if (data.success && data.previewUrl) {
      setPreviewUrl(data.previewUrl);
      setPreviewMode(true); // 프리뷰 모드 활성화
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
```

### 4. 파일 편집 기능

#### 4.1 코드 에디터
- 기본: `textarea` 사용 (현재 스타일 유지)
- 향후 개선: Monaco Editor 또는 CodeMirror 통합 고려

#### 4.2 자동 저장 또는 수동 저장
- **옵션 1: 자동 저장 (권장)**
  - `onChange` 이벤트에서 debounce 적용 (예: 1-2초 후 자동 저장)
  - 저장 중 표시 (로딩 인디케이터)

- **옵션 2: 수동 저장**
  - "저장" 버튼 추가
  - Ctrl+S 또는 Cmd+S 단축키 지원

#### 4.3 파일 변경 감지
- 파일 내용이 변경되었는지 추적
- 저장되지 않은 변경사항이 있으면 경고 표시

### 5. UI/UX 개선사항

#### 5.1 파일 트리 스타일
- VSCode와 유사한 다크 테마
- 파일 아이콘 (파일 타입별)
- 선택된 파일 하이라이트
- 폴더 구조 표시 (필요시)

#### 5.2 편집 영역
- 현재 편집 중인 파일명 표시
- 저장 상태 표시 (저장됨/저장 중/저장 안됨)
- 파일 타입에 따른 문법 하이라이트 (선택적)

#### 5.3 프리뷰 영역
- 프리뷰 모드 토글 버튼
- 프리뷰 영역을 별도 탭 또는 하단 패널로 표시
- 프리뷰 새로고침 버튼

### 6. 에러 처리
- 파일 목록 로딩 실패
- 파일 내용 로딩 실패
- 파일 저장 실패
- 네트워크 오류
- 모든 에러는 사용자에게 명확한 메시지로 표시

### 7. 성능 최적화
- 파일 내용 캐싱 (이미 로드한 파일은 다시 요청하지 않음)
- Debounce를 통한 자동 저장 최적화
- 대용량 파일 처리 고려

## 구현 순서
1. UI 레이아웃 변경 (파일명 입력 제거, 파일 불러오기 버튼 추가)
2. 파일 목록 불러오기 API 연동
3. 파일 트리/목록 UI 구현
4. 파일 선택 및 내용 불러오기 API 연동
5. 파일 편집 영역 구현
6. 파일 저장 API 연동 (자동 저장 또는 수동 저장)
7. 프리뷰 API 수정 (fileName 제거)
8. 프리뷰 모드 토글 기능
9. 에러 처리 및 로딩 상태 표시
10. UI/UX 개선 및 스타일링

## 참고사항
- 기존 코드 스타일 및 구조 유지
- 다크 테마 유지 (#1e1e1e, #2d2d2d 등)
- 폰트: font-mono 사용
- 반응형 디자인 고려 (필요시)

