import { ProjectProps } from "@/model/ProjectProps";

export const INTRO_TEXT =
  "안녕하세요! 👋\nFront-end Developer\n구재모 입니다! :)";

export const DENPIC_PROJECT_TEXT: ProjectProps = {
  TITLE: "DENPIC (위노아이)",
  PERIOD: "2022.11 ~ 2023. 02",
  SIMPLE: "간편한 교정 환자 관리 및 교정 사진 분석 웹 서비스",
  DETAIL: [
    "프론트 엔드 구현 담당",
    "Firebase 이메일 인증 후 회원가입 로직 구현",
    "환자 관리 페이지 및 환자 치아 사진 데이터 관리 및 드래그 앤 드롭 사진 위치 변경 기능 구현",
    "비동기 처리 및 Firebase 데이터 실시간 양방향 통신 구현",
    "emoion & storybook을 이용한 UI 컴포넌트 라이브러리화 작업",
    "상태 관리를 위한 Recoil 도입",
  ],
  USE_SKILL: [
    "React",
    "Typescript",
    "Firebase",
    "emotion",
    "storybook",
    "Recoil",
    "Jira",
    "Confluence",
  ],
  GITHUB: {
    repasitory: "",
    url: "",
  },
  FOOTER: {
    refType: "",
    url: "",
  },
};

export const WBS_PROJECT_TEXT: ProjectProps = {
  TITLE: "WHICH BEACH SEARCH",
  PERIOD: "2022. 08 ~ 2022. 10",
  SIMPLE: "국내 해수욕장 날씨 및 정보 조회 서비스",
  DETAIL: [
    `프론트 엔드 및 화면 와이어 프레임 담당`,
    `Axios로 공공기관 REST API와 통신하여 데이터 요청`,
    `서버리스 환경(firebase)에서의 데이터 관리 구현`,
    "카카오 맵 API 사용하여 해수욕장 위치 마커 표시 구현",
    "회원 가입 및 로그인 기능 구현"
  ],
  USE_SKILL: [
    "HTML5",
    "CSS",
    "Javascript",
    "Firebase",
    "Axios",
    "RESTfull API",
    "Jira",
    "Confluence",
  ],
  GITHUB: {
    repasitory: "DoItStory Repasitory",
    url: "https://github.com/DoItStory/WhichBeachSearch",
  },
  FOOTER: {
    refType: "Demo",
    url: "https://whichbeachsearch.web.app",
  },
};

export const MY_WEB_PROJECT_TEXT: ProjectProps = {
  TITLE: "MY WEBSITE",
  PERIOD: "2023. 03",
  SIMPLE: "개인 포트폴리오 웹 사이트",
  DETAIL: [
    `반응형 웹으로 제작`,
    `Full page로 제작되었으며, Next.js와 Styled Component를 주로 사용하여 제작`,
    `Vercel로 배포하여 Github와 실시간 연동`,
  ],
  USE_SKILL: ["NextJS", "Styled Component", "Typescript", "Versel", "Threejs"],
  GITHUB: {
    repasitory: "My WebSite",
    url: "https://github.com/goodjam92/my-website",
  },
  FOOTER: {
    refType: "Web",
    url: "https://jaemokoo.vercel.app/",
  },
};

export const CAREER_TEXT = {
  COMPANY: "위노아이 (Winoi)",
  PERIOD: " 2022.11 ~ 2023.02 ",
  WORK: [
    "React 기반 웹 Front-End 구현",
    "서비스 사용자의 Needs에 맞게 UI 구현 및 비즈니스 로직 구현",
    "서버와의 실시간 데이터 연동 기능 구현",
  ],
};

export const OTHER_CAREER_TEXT = {
  SOLKO: {
    COMPANY: "솔코 (Solko)",
    PERIOD: " 2020.03 ~ 2022.10 ",
    WORK: [
      "3D 설계 프로그램 기술 지원 및 교육 담당",
      "고객 맞춤형 설계 표준화 가이드",
      "기술 자료 작성 및 기술 Webinar 발표",
    ],
  },
  YSTT: {
    COMPANY: "와이에스썸텍 (YSTT)",
    PERIOD: " 2016.12 ~ 2019.12 ",
    WORK: [
      "열처리 장비 설계 업무",
      "장비 시운전 및 장비 메뉴얼 작성",
      "3D & 2D CAD 툴 사용",
    ],
  },
};

export const CONTACT_TEXT = {
  thanks:
    "저의 포트폴리오를 끝까지 지켜봐주셔서 감사합니다.\n메일로 연락주시면 빠르게 회신드리도록 하겠습니다.",
  email: "devgoozz@gmail.com",
  github: "github.com/goodjam92",
  blog: "velog.io/@goodjam92",
};
