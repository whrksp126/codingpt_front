# 백엔드 개발 프롬프트: S3 파일 편집기 API 구현

## 개요
프론트엔드에서 S3 경로의 파일들을 불러오고, 편집하고, 저장할 수 있는 API를 구현합니다.

## 현재 상태
- `POST /api/preview` 엔드포인트 존재
  - Request: `{ s3Path: string, fileName: string }`
  - Response: `{ success: boolean, previewUrl: string }`
  - 기능: S3 경로와 파일명을 받아서 프리뷰 URL 생성

## 구현 요구사항

### 1. API 엔드포인트

#### 1.1 S3 파일 목록 조회 API
**엔드포인트:** `POST /api/s3/files` 또는 `GET /api/s3/files?path={s3Path}`

**Request:**
```json
{
  "s3Path": "class-id-00000001/lesson-id-00000001/code-execution-00000001"
}
```

**Response (성공):**
```json
{
  "success": true,
  "files": [
    {
      "name": "index.html",
      "path": "class-id-00000001/lesson-id-00000001/code-execution-00000001/index.html",
      "type": "file",
      "size": 1024,
      "lastModified": "2024-01-01T00:00:00Z"
    },
    {
      "name": "style.css",
      "path": "class-id-00000001/lesson-id-00000001/code-execution-00000001/style.css",
      "type": "file",
      "size": 512,
      "lastModified": "2024-01-01T00:00:00Z"
    },
    {
      "name": "script.js",
      "path": "class-id-00000001/lesson-id-00000001/code-execution-00000001/script.js",
      "type": "file",
      "size": 2048,
      "lastModified": "2024-01-01T00:00:00Z"
    }
  ]
}
```

**Response (실패):**
```json
{
  "success": false,
  "message": "S3 경로를 찾을 수 없습니다.",
  "error": "NoSuchKey"
}
```

**기능:**
- S3 버킷에서 지정된 경로의 모든 파일 목록을 조회
- 파일명, 전체 경로, 파일 타입, 크기, 수정일시 반환
- 하위 디렉토리도 포함하여 재귀적으로 조회 (선택적)
- 빈 경로인 경우 적절한 에러 메시지 반환

**구현 예시 (Node.js/AWS SDK):**
```javascript
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

async function listS3Files(s3Path) {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Prefix: s3Path + '/',
    Delimiter: '/' // 디렉토리 구분자
  };

  try {
    const data = await s3.listObjectsV2(params).promise();
    
    const files = [];
    
    // 파일 목록 처리
    if (data.Contents) {
      for (const object of data.Contents) {
        // 디렉토리 자체는 제외 (파일만)
        if (!object.Key.endsWith('/')) {
          const fileName = object.Key.split('/').pop();
          files.push({
            name: fileName,
            path: object.Key,
            type: 'file',
            size: object.Size,
            lastModified: object.LastModified
          });
        }
      }
    }
    
    return {
      success: true,
      files: files
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || '파일 목록을 불러올 수 없습니다.',
      error: error.code
    };
  }
}
```

#### 1.2 S3 파일 내용 조회 API
**엔드포인트:** `POST /api/s3/file` 또는 `GET /api/s3/file?path={filePath}`

**Request:**
```json
{
  "filePath": "class-id-00000001/lesson-id-00000001/code-execution-00000001/index.html"
}
```

**Response (성공):**
```json
{
  "success": true,
  "content": "<!DOCTYPE html>\n<html>...</html>",
  "filePath": "class-id-00000001/lesson-id-00000001/code-execution-00000001/index.html",
  "contentType": "text/html",
  "encoding": "utf-8"
}
```

**Response (실패):**
```json
{
  "success": false,
  "message": "파일을 찾을 수 없습니다.",
  "error": "NoSuchKey"
}
```

**기능:**
- S3에서 지정된 파일의 내용을 읽어서 반환
- 텍스트 파일은 UTF-8로 디코딩하여 반환
- 바이너리 파일은 base64 인코딩하여 반환 (선택적)
- 파일 크기 제한 고려 (예: 10MB 이상은 경고)

**구현 예시:**
```javascript
async function getS3FileContent(filePath) {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: filePath
  };

  try {
    const data = await s3.getObject(params).promise();
    
    // 텍스트 파일인 경우
    const contentType = data.ContentType || 'text/plain';
    let content;
    
    if (contentType.startsWith('text/') || 
        filePath.endsWith('.html') || 
        filePath.endsWith('.css') || 
        filePath.endsWith('.js') ||
        filePath.endsWith('.json')) {
      content = data.Body.toString('utf-8');
    } else {
      // 바이너리 파일은 base64로 인코딩
      content = data.Body.toString('base64');
    }
    
    return {
      success: true,
      content: content,
      filePath: filePath,
      contentType: contentType,
      encoding: contentType.startsWith('text/') ? 'utf-8' : 'base64'
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || '파일을 불러올 수 없습니다.',
      error: error.code
    };
  }
}
```

#### 1.3 S3 파일 저장/업데이트 API
**엔드포인트:** `PUT /api/s3/file`

**Request:**
```json
{
  "filePath": "class-id-00000001/lesson-id-00000001/code-execution-00000001/index.html",
  "content": "<!DOCTYPE html>\n<html>...</html>"
}
```

**Response (성공):**
```json
{
  "success": true,
  "message": "파일이 성공적으로 저장되었습니다.",
  "filePath": "class-id-00000001/lesson-id-00000001/code-execution-00000001/index.html",
  "size": 1024,
  "cacheInvalidated": true
}
```

**Response (실패):**
```json
{
  "success": false,
  "message": "파일 저장에 실패했습니다.",
  "error": "AccessDenied"
}
```

**기능:**
- S3에 파일 내용을 저장하거나 업데이트
- 기존 파일이 있으면 덮어쓰기, 없으면 새로 생성
- 파일 타입에 따라 적절한 Content-Type 설정
- 저장 전 유효성 검사 (파일 크기, 경로 등)
- **중요: 파일 저장 후 CloudFront 캐시 무효화(Invalidation) 자동 실행**

**구현 예시:**
```javascript
const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const cloudfront = new AWS.CloudFront();

async function saveS3File(filePath, content) {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: filePath,
    Body: content,
    ContentType: getContentType(filePath) // 파일 확장자에 따라 결정
  };

  try {
    // 1. S3에 파일 저장
    const data = await s3.putObject(params).promise();
    
    // 2. CloudFront 캐시 무효화
    let cacheInvalidated = false;
    try {
      await invalidateCloudFrontCache(filePath);
      cacheInvalidated = true;
    } catch (invalidationError) {
      // 캐시 무효화 실패해도 파일 저장은 성공으로 처리
      console.error('CloudFront 캐시 무효화 실패:', invalidationError);
    }
    
    return {
      success: true,
      message: '파일이 성공적으로 저장되었습니다.',
      filePath: filePath,
      size: Buffer.byteLength(content, 'utf-8'),
      cacheInvalidated: cacheInvalidated
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || '파일 저장에 실패했습니다.',
      error: error.code
    };
  }
}

// CloudFront 캐시 무효화 함수
async function invalidateCloudFrontCache(filePath) {
  const distributionId = process.env.CLOUDFRONT_DISTRIBUTION_ID;
  
  if (!distributionId) {
    throw new Error('CLOUDFRONT_DISTRIBUTION_ID 환경 변수가 설정되지 않았습니다.');
  }

  // CloudFront URL 경로 생성 (S3 버킷 경로를 CloudFront 경로로 변환)
  // 예: "class-id-00000001/lesson-id-00000001/code-execution-00000001/index.html"
  // -> "/class-id-00000001/lesson-id-00000001/code-execution-00000001/index.html"
  const cloudFrontPath = `/${filePath}`;
  
  // 같은 디렉토리의 다른 파일들도 함께 무효화 (선택적)
  // 예: index.html이 변경되면 같은 디렉토리의 모든 파일 무효화
  const directoryPath = filePath.substring(0, filePath.lastIndexOf('/'));
  const directoryPattern = `/${directoryPath}/*`;

  const params = {
    DistributionId: distributionId,
    InvalidationBatch: {
      CallerReference: `invalidation-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      Paths: {
        Quantity: 2,
        Items: [
          cloudFrontPath,        // 변경된 파일
          directoryPattern       // 같은 디렉토리의 모든 파일 (선택적)
        ]
      }
    }
  };

  try {
    const result = await cloudfront.createInvalidation(params).promise();
    console.log('CloudFront 캐시 무효화 성공:', result.Invalidation.Id);
    return result;
  } catch (error) {
    console.error('CloudFront 캐시 무효화 오류:', error);
    throw error;
  }
}

function getContentType(filePath) {
  const ext = filePath.split('.').pop().toLowerCase();
  const contentTypes = {
    'html': 'text/html',
    'css': 'text/css',
    'js': 'application/javascript',
    'json': 'application/json',
    'txt': 'text/plain',
    'png': 'image/png',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'gif': 'image/gif',
    'svg': 'image/svg+xml'
  };
  return contentTypes[ext] || 'application/octet-stream';
}
```

**CloudFront 캐시 무효화 설정:**
1. **환경 변수 추가:**
   - `CLOUDFRONT_DISTRIBUTION_ID`: CloudFront Distribution ID

2. **AWS 권한 설정:**
   - IAM 역할/사용자에 `cloudfront:CreateInvalidation` 권한 추가
   ```json
   {
     "Effect": "Allow",
     "Action": [
       "cloudfront:CreateInvalidation"
     ],
     "Resource": "arn:aws:cloudfront::ACCOUNT_ID:distribution/DISTRIBUTION_ID"
   }
   ```

3. **무효화 전략 (선택):**
   - **옵션 1**: 변경된 파일만 무효화 (빠르고 비용 효율적)
   - **옵션 2**: 같은 디렉토리의 모든 파일 무효화 (더 안전하지만 비용 증가)
   - **옵션 3**: 전체 경로 하위의 모든 파일 무효화 (가장 안전하지만 비용이 많이 듦)

4. **비용 고려사항:**
   - CloudFront 무효화는 월 1,000건까지 무료
   - 그 이후는 건당 $0.005
   - 무효화는 즉시 적용되지만 완료까지 몇 분 걸릴 수 있음

#### 1.4 프리뷰 API 수정
**엔드포인트:** `POST /api/preview` (기존 엔드포인트 수정)

**Request (변경):**
```json
{
  "s3Path": "class-id-00000001/lesson-id-00000001/code-execution-00000001"
}
```
- `fileName` 필드 제거
- 파일명을 전달하지 않으면 자동으로 `index.html`을 찾아서 처리

**Response (기존과 동일):**
```json
{
  "success": true,
  "previewUrl": "https://preview.example.com/..."
}
```

**기능 변경:**
- `fileName`이 없으면 자동으로 해당 경로에서 `index.html` 파일을 찾음
- `index.html`이 없으면 에러 반환 또는 첫 번째 HTML 파일 사용 (선택적)

**구현 예시:**
```javascript
async function createPreview(s3Path, fileName = null) {
  let targetFile = fileName;
  
  // fileName이 없으면 index.html 찾기
  if (!targetFile) {
    const files = await listS3Files(s3Path);
    if (files.success) {
      const indexFile = files.files.find(f => f.name === 'index.html');
      if (indexFile) {
        targetFile = 'index.html';
      } else {
        // index.html이 없으면 첫 번째 HTML 파일 찾기
        const htmlFile = files.files.find(f => f.name.endsWith('.html'));
        if (htmlFile) {
          targetFile = htmlFile.name;
        } else {
          return {
            success: false,
            message: 'HTML 파일을 찾을 수 없습니다.'
          };
        }
      }
    } else {
      return {
        success: false,
        message: 'S3 경로를 찾을 수 없습니다.'
      };
    }
  }
  
  // 기존 프리뷰 URL 생성 로직
  const previewUrl = generatePreviewUrl(s3Path, targetFile);
  
  return {
    success: true,
    previewUrl: previewUrl
  };
}
```

### 2. 에러 처리

#### 2.1 공통 에러 응답 형식
```json
{
  "success": false,
  "message": "사용자 친화적인 에러 메시지",
  "error": "에러 코드 (선택적)"
}
```

#### 2.2 주요 에러 케이스
- **S3 접근 권한 오류**: `AccessDenied`
- **파일/경로 없음**: `NoSuchKey`
- **네트워크 오류**: `NetworkError`
- **파일 크기 초과**: `FileTooLarge`
- **잘못된 요청**: `InvalidRequest`

### 3. CloudFront 캐시 무효화 (중요)

#### 3.1 문제 상황
- S3 파일이 변경되어도 CloudFront가 캐시된 이전 버전을 계속 제공
- 프리뷰에서 변경사항이 반영되지 않는 문제 발생

#### 3.2 해결 방법
**파일 저장 시 CloudFront 캐시 무효화 자동 실행**

**구현 위치:**
- `PUT /api/s3/file` 엔드포인트에서 파일 저장 성공 후 즉시 실행

**필수 설정:**
1. AWS SDK CloudFront 클라이언트 초기화
2. 환경 변수: `CLOUDFRONT_DISTRIBUTION_ID`
3. IAM 권한: `cloudfront:CreateInvalidation`

**무효화 경로:**
- 변경된 파일의 전체 경로: `/{filePath}`
- 예: `/class-id-00000001/lesson-id-00000001/code-execution-00000001/index.html`

**에러 처리:**
- 캐시 무효화 실패해도 파일 저장은 성공으로 처리
- 로그에 캐시 무효화 실패 기록
- 응답에 `cacheInvalidated: true/false` 포함

**성능 고려:**
- 캐시 무효화는 비동기로 처리 가능 (선택적)
- 무효화 완료까지 몇 분 걸릴 수 있지만, 무효화 요청만 보내면 됨

### 4. 보안 고려사항

#### 4.1 입력 검증
- S3 경로 검증 (경로 탐색 공격 방지: `../`, `//` 등)
- 파일 크기 제한 (예: 10MB)
- 허용된 파일 확장자만 처리 (선택적)

#### 4.2 권한 관리
- S3 접근 권한 확인
- CloudFront 무효화 권한 확인
- 사용자별 경로 접근 권한 검증 (필요시)
- CORS 설정 확인

### 5. 성능 최적화

#### 5.1 캐싱
- 파일 목록 캐싱 (짧은 TTL, 예: 30초)
- 파일 내용 캐싱은 권장하지 않음 (실시간 편집을 위해)

#### 5.2 비동기 처리
- 대용량 파일 처리는 비동기로 처리
- 파일 목록 조회 시 페이지네이션 고려 (파일이 많은 경우)
- CloudFront 캐시 무효화는 비동기로 처리 가능 (선택적)

### 6. 로깅
- 모든 API 요청 로깅
- 에러 발생 시 상세 로그 기록
- 파일 저장/수정 이력 기록 (선택적)
- CloudFront 캐시 무효화 성공/실패 로그 기록

### 7. 테스트 케이스

#### 7.1 파일 목록 조회
- 정상 경로의 파일 목록 조회
- 존재하지 않는 경로
- 빈 경로
- 권한 없는 경로

#### 7.2 파일 내용 조회
- 정상 파일 읽기
- 존재하지 않는 파일
- 대용량 파일
- 바이너리 파일

#### 7.3 파일 저장
- 새 파일 생성
- 기존 파일 업데이트
- 권한 없는 경로에 저장 시도
- 잘못된 파일 경로
- **파일 저장 후 CloudFront 캐시 무효화 확인**
- **캐시 무효화 실패 시에도 파일 저장 성공 확인**

#### 7.4 프리뷰
- fileName 없이 index.html 자동 찾기
- index.html이 없는 경우
- HTML 파일이 없는 경우

#### 7.5 CloudFront 캐시 무효화
- 파일 저장 후 캐시 무효화 자동 실행 확인
- 캐시 무효화 성공 시 로그 확인
- 캐시 무효화 실패 시에도 파일 저장 성공 확인
- 프리뷰에서 변경사항 즉시 반영 확인

## 구현 순서
1. S3 파일 목록 조회 API 구현
2. S3 파일 내용 조회 API 구현
3. S3 파일 저장 API 구현
4. **CloudFront 캐시 무효화 기능 추가 (파일 저장 후 자동 실행)**
5. 프리뷰 API 수정 (fileName 제거, 자동 index.html 찾기)
6. 에러 처리 및 검증 로직 추가
7. 보안 검증 추가
8. 로깅 추가
9. 테스트 작성 및 검증

## 참고사항
- AWS SDK 버전 확인 및 사용법
- S3 버킷 설정 및 권한 확인
- **CloudFront Distribution ID 확인 및 IAM 권한 설정**
- 환경 변수 설정 (S3_BUCKET_NAME, CLOUDFRONT_DISTRIBUTION_ID 등)
- 기존 코드 스타일 및 구조 유지

## CloudFront 캐시 무효화 추가 설정 가이드

### 1. CloudFront Distribution ID 확인
```bash
# AWS CLI로 확인
aws cloudfront list-distributions --query "DistributionList.Items[*].[Id,DomainName,Origins.Items[0].DomainName]" --output table
```

### 2. IAM 권한 추가
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation",
        "cloudfront:GetInvalidation",
        "cloudfront:ListInvalidations"
      ],
      "Resource": "arn:aws:cloudfront::ACCOUNT_ID:distribution/DISTRIBUTION_ID"
    }
  ]
}
```

### 3. 환경 변수 설정
```bash
# .env 파일 또는 환경 변수 설정
CLOUDFRONT_DISTRIBUTION_ID=E1234567890ABC
```

### 4. 테스트 방법
1. 파일 저장 API 호출
2. CloudFront 콘솔에서 Invalidation 목록 확인
3. 프리뷰에서 변경사항이 즉시 반영되는지 확인

