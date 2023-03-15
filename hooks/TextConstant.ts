import { ProjectProps } from "@/model/ProjectProps";

export const INTRO_TEXT =
  "안녕하세요! 👋\nFront-end Developer\n구재모 입니다! :)";

export const WBS_PROJECT_TEXT: ProjectProps = {
  TITLE: "WHICH BEACH SEARCH",
  PERIOD: "2022. 08 ~ 2022. 10",
  SIMPLE: "국내 해수욕장 날씨 및 정보 조회 서비스",
  DETAIL: [
    `- 모바일 사이즈로 제작 된 전국 모든 해수욕장의 날씨와 정보 조회 서비스 웹입니다.`,
    `- 휴가 기간이나 해양 레저를 즐기고자 해수욕장을 방문 할 때 좀 더 정확한 날씨 및 해상 정보를 시간 단위로 확인할 수 있습니다.`,
    `- 잘 알려지지 않았던 해수욕장에 대한 관심도 이끌어 낼 수 있습니다.`,
  ],
  USE_SKILL: [
    "HTML5",
    "CSS",
    "Javascript",
    "Firebase",
    "Axios",
    "RESTfull API",
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
  SIMPLE: "포트폴리오 웹 사이트",
  DETAIL: [
    `- 개발자로써 저를 소개하기 위한 웹 사이트 입니다.`,
    `- Full page로 제작되었으며, Next.js와 Styled Component를 주로 사용하여 제작되었습니다.`,
    `- 반응형 웹으로 제작되어 모바일 또는 데스크탑 환경에서도 편하게 보실 수 있습니다.`,
  ],
  USE_SKILL: ["NextJS", "Styled Component", "Typescript", "Versel", "Threejs"],
  GITHUB: {
    repasitory: "",
    url: "",
  },
  FOOTER: {
    refType: "",
    url: "",
  },
};

export const CAREER_TEXT = {
  COMPANY: "위노아이 (Winoi)",
  PERIOD: " 2022.11 ~ 2023.02 ",
  WORK: [
    "- React 기반 웹 FRONT END 구현",
    "- 서비스 사용자의 Needs에 맞게 UI 구현 및 비즈니스 로직 구현",
    "- 서버와의 실시간 데이터 연동 기능 구현",
  ],
};

export const OTHER_CAREER_TEXT = {
  SOLKO: {
    COMPANY: "솔코 (Solko)",
    PERIOD: " 2020.03 ~ 2022.10 ",
    WORK: [
      "- 3D 설계 프로그램 기술 지원 및 교육 담당",
      "- 고객 맞춤형 설계 표준화 가이드",
      "- 기술 자료 작성 및 기술 Webinar 발표",
    ],
  },
  YSTT: {
    COMPANY: "와이에스썸텍 (YSTT)",
    PERIOD: " 2016.12 ~ 2019.12 ",
    WORK: [
      "- 열처리 장비 설계 업무",
      "- 장비 시운전 및 장비 메뉴얼 작성",
      "- 생산 부서와의 협업으로 장비 생산성 향상 도모",
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
