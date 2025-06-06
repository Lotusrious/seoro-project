# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 🚀 프로젝트 실행 방법

이 프로젝트를 로컬 환경에서 실행하려면 아래의 단계를 따라주세요.

### 1. 사전 요구사항

- [Node.js](https://nodejs.org/ko/) (LTS 버전 권장)
- npm 또는 yarn

### 2. 프로젝트 클론 및 의존성 설치

터미널을 열고 아래 명령어를 실행하여 프로젝트를 클론하고 필요한 패키지를 설치합니다.

```bash
# 1. GitHub에서 프로젝트를 클론합니다.
git clone https://github.com/your-repo-url/seoro-project.git

# 2. 프로젝트 폴더로 이동합니다.
cd seoro-project/project-seoro/seoro

# 3. 필요한 패키지를 설치합니다.
npm install
```

### 3. 환경 변수 설정 (.env 파일)

프로젝트를 실행하려면 Firebase와 통신하기 위한 API 키가 필요합니다.

1.  `seoro` 폴더 안에 `.env` 라는 이름의 새 파일을 만드세요.
2.  아래 내용을 복사하여 `.env` 파일에 붙여넣고, `YOUR_..._HERE` 부분을 실제 Firebase 프로젝트의 값으로 채워주세요.

    **`.env` 파일 내용:**
    ```env
    # 이 파일은 절대로 Git에 커밋하지 마세요!
    # Firebase 콘솔 -> 프로젝트 설정(⚙️) -> 일반 -> 내 앱 -> SDK 설정 및 구성 에서 값을 찾을 수 있습니다.

    VITE_FIREBASE_API_KEY=YOUR_API_KEY_HERE
    VITE_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN_HERE
    VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID_HERE
    VITE_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET_HERE
    VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID_HERE
    VITE_FIREBASE_APP_ID=YOUR_APP_ID_HERE
    ```
    **주의:** 각 값의 양쪽에 따옴표(`"`)나 대괄호(`[]`)를 포함하지 마세요.

### 4. 개발 서버 실행

모든 설정이 완료되었습니다! 아래 명령어를 실행하여 개발 서버를 시작하세요.

```bash
npm run dev
```

서버가 성공적으로 실행되면 터미널에 표시된 `http://localhost:5173` 주소로 접속하여 프로젝트를 확인할 수 있습니다.

---

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
