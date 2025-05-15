<!-- 배너 이미지 (banner.png) -->
<p align="center">
  <img src="banner.png" alt="Seoro 배너" width="50%" />
</p>



# Seoro - 외국인을 위한 국내 여행 플랫폼

## 프로젝트 개요

- **프로젝트 기간**: 2025.05 ~ (진행 중)
- **담당 역할**: Full Stack Developer

**Seoro**는 외국인(및 내국인) 사용자를 위한 새로운 국내 여행 플랫폼입니다.  
트렌드 이슈 해설, 여행 후기, 주간 핫플레이스 추천, AI 여행 플래너, 트립메이트 매칭 등 다양한 기능을 제공합니다.  
Task Master(MCP)로 작업을 관리하며, React와 Firebase 등 최신 기술을 사용합니다.

---

## 실제 구동 예시

<p align="center">
  <img src="mainpage pic.png" alt="Seoro 메인페이지 예시" width="80%" />
</p>

## 사용 기술 및 설명

- **React**: 컴포넌트 기반의 UI 개발을 위한 프론트엔드 라이브러리. 빠른 렌더링과 재사용성이 강점입니다.
- **JavaScript**: 웹 프론트엔드의 표준 언어로, 동적 UI와 로직 구현에 사용합니다.
- **styled-components**: CSS-in-JS 방식으로, 컴포넌트 단위로 스타일을 관리할 수 있습니다.
- **Vite**: 빠른 개발 환경과 빌드 속도를 제공하는 프론트엔드 빌드 도구입니다.
- **Firebase**: 인증, 실시간 데이터베이스, 호스팅 등 다양한 백엔드 기능을 제공하는 BaaS(Backend as a Service) 플랫폼입니다. 초기 백엔드로 사용하며, 추후 Spring Boot로 마이그레이션 예정입니다.
- **Spring Boot**: Java 기반의 강력한 백엔드 프레임워크로, 대규모 서비스 확장에 적합합니다(마이그레이션 예정).
- **Kakao Map API**: 국내 지도 서비스로, 여행지 위치 정보 및 지도 기능을 제공합니다.
- **OpenAI API**: AI 여행 플래너 등 인공지능 기능 구현에 사용합니다.
- **한국관광공사 API, Google Trends, 인스타그램 해시태그, Firecrawl**: 트렌드, 여행지, 후기 등 다양한 외부 데이터를 수집/활용합니다.
- **d3.js**: 데이터 시각화(키워드 구름 등)에 활용합니다.
- **dotenv**: 환경 변수 관리로, API 키 등 민감 정보를 안전하게 관리합니다.
- **git**: 버전 관리 및 협업을 위한 필수 도구입니다.
- **Task Master(MCP)**: 프로젝트 작업(Task) 관리 및 자동화 도구로, 한글로 작업을 관리할 수 있습니다.

---

## 폴더 구조 예시

```plaintext
project-root/
├── public/
│   └── index.html
├── src/
│   ├── assets/           # 이미지, 로고, 배너 등
│   ├── components/       # 공통 컴포넌트 (Header, Banner, InfiniteFeed, Footer 등)
│   ├── pages/            # 주요 페이지 (MainPage.jsx 등)
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── .env                  # 환경 변수(API 키 등, git에 포함 X)
├── .gitignore
├── package.json
├── README.md
└── ...
```

---

## 주요 기능

- **트렌드 이슈 해설**  
  한국 여행 관련 최신 트렌드, 이슈, 키워드 해설 제공

- **여행 후기 공유**  
  사용자들이 여행 후기를 남기고, 댓글/좋아요로 소통

- **주간 핫플레이스 추천**  
  실시간 트렌드, SNS, 관광공사 데이터를 활용한 인기 여행지 추천

- **AI 여행 플래너**  
  OpenAI API를 활용한 맞춤형 여행 일정 자동 생성

- **트립메이트 매칭**  
  비슷한 일정/취향의 여행자 매칭

- **로그인/마이페이지/다국어 지원**  
  소셜 로그인, 내 정보 관리, 영어/한국어 등 다국어 지원

- **(예정) 백엔드 Spring Boot 마이그레이션**  
  초기에는 Firebase, 추후 Spring Boot로 확장 예정

---

## 설치 및 실행 방법

1. **프로젝트 클론**
   ```bash
   git clone [레포지토리 주소]
   cd [프로젝트 폴더]
   ```

2. **필수 환경 변수 설정**
   - `.env` 파일을 만들고, 필요한 API 키를 입력  
     (예시: Kakao, OpenAI, Firebase 등)

3. **의존성 설치**
   ```bash
   npm install
   ```

4. **개발 서버 실행**
   ```bash
   npm run dev
   ```
   - 브라우저에서 `http://localhost:5173` 접속

---

## 개발/운영 팁

- **컴포넌트/페이지 추가**  
  `src/components/`, `src/pages/`에 파일을 추가하고, `App.jsx`에서 라우팅/임포트

- **스타일 가이드**  
  styled-components 사용, 컬러/폰트는 디자인 가이드 참고

- **API 키 관리**  
  `.env` 파일에만 저장, 절대 git에 올리지 않기

- **작업 관리**  
  Task Master(MCP)로 할 일(Task) 관리  
  - `npm run task-master` 또는 MCP 도구 사용  
  - 작업 추가/분해/상태 변경 등은 한글로 관리

- **에러 발생 시**
  - 경로, 파일명, import 문법, 서버 실행 위치, 브라우저 콘솔 에러 등을 차근차근 점검
  - Vite 기본 화면만 나올 경우, `App.jsx` 위치와 실행 위치가 일치하는지 확인

- **git 관리**
  - `.gitignore`에 `node_modules`, `.env`, `logs`, `tasks/`, `.cursor/` 등 포함

---

## 참고 자료

- [React 공식 문서](https://react.dev/)
- [Firebase 공식 문서](https://firebase.google.com/)
- [Kakao 지도 API](https://apis.map.kakao.com/)
- [OpenAI API](https://platform.openai.com/)
- [Task Master(MCP) 공식 문서](https://github.com/task-master-ai)

---

## 기여 방법

1. 이슈/할 일(Task) 확인 후, 본인이 맡을 작업을 정합니다.
2. 작업 전후로 Task Master에 상태/진행 상황을 기록합니다.
3. 코드 작성 후, PR(Pull Request)로 제출합니다.
4. 코드 리뷰 및 머지

---

## 문의/도움이 필요할 때

- README, 코드, Task Master 사용법 등 궁금한 점은 언제든 질문해 주세요!
- 초보자도 환영합니다.  
- 실수해도 괜찮으니, 차근차근 함께 만들어가요 😊

---

이 README는 프로젝트 상황에 따라 자유롭게 수정/보완해도 됩니다!  
추가로 궁금한 점이 있으면 언제든 말씀해 주세요. 