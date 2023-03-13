import { ProjectProps } from "@/model/ProjectProps";

export const INTRO_PAGE = {
  LEFT_TOP_TEXT: "안녕하세요! 🙋🏻‍♂️",
  LEFT_MID_TEXT: "Front-end Developer",
  LEFT_BOTTOM_TEXT: `구재모 입니다! :) `,
};

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

export const CONTACT_TEXT = {
  email: "devgoozz@gmail.com",
  hp: "010-2497-2770",
  github: "github.com/goodjam92",
  blog: "velog.io/@goodjam92",
};
