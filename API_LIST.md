# Execute.jsx 사용 API 목록

## 파일/폴더 관리

### 1. 파일 목록 조회
- **URL**: `POST /api/s3/files`
- **요청**: `{ s3Path: string }`
- **응답**: `{ success: boolean, files: array }`

### 2. 파일 조회
- **URL**: `POST /api/s3/file`
- **요청**: `{ filePath: string }`
- **응답**: `{ success: boolean, content: string }`

### 3. 파일 생성
- **URL**: `PUT /api/s3/file`
- **요청**: `{ filePath: string, content: string }`
- **응답**: `{ success: boolean }`

### 4. 파일 내용 수정
- **URL**: `PUT /api/s3/file`
- **요청**: `{ filePath: string, content: string }`
- **응답**: `{ success: boolean }`

### 5. 파일 삭제
- **URL**: `DELETE /api/s3/file`
- **요청**: `{ filePath: string }`
- **응답**: `{ success: boolean }`

### 6. 폴더 생성
- **URL**: `POST /api/s3/folder`
- **요청**: `{ folderPath: string }`
- **응답**: `{ success: boolean }`

### 7. 이름 변경
- **URL**: `PUT /api/s3/rename`
- **요청**: `{ oldPath: string, newName: string }`
- **응답**: `{ success: boolean }`

### 8. 이동
- **URL**: `POST /api/s3/move`
- **요청**: `{ sourcePath: string, targetPath: string }`
- **응답**: `{ success: boolean }`

## 실행 관련

### 9. 라이브 서버 실행
- **URL**: `POST /api/executor/preview`
- **요청**: `{ s3Path: string }`
- **응답**: `{ success: boolean, previewUrl: string }`

### 10. 파일 코드 실행
- **URL**: `POST /api/executor/execute-s3`
- **요청**: `{ s3Path: string, fileName: string, language: string }`
- **응답**: SSE 스트림 (text/event-stream)

## 기타

### 11. 캐시 무효화
- **URL**: `POST /api/s3/invalidate`
- **요청**: `{ filePath: string }`
- **응답**: `{ success: boolean, invalidationId: string }`

