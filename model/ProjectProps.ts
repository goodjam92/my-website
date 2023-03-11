export interface ProjectProps {
  TITLE: string;
  PERIOD: string;
  SIMPLE: string;
  DETAIL: Array<string>;
  USE_SKILL: Array<string>;
  GITHUB: {
    repasitory: string;
    url: string;
  };
  FOOTER: {
    refType: string;
    url: string;
  };
}
