import { VisibleProps } from "@/model/VisibleProps";
import { media } from "@/styles/media";
import styled, { css } from "styled-components";
import { fadeIn, fadeOut } from "../animation/animation";

interface ProjectFooterProps {
  github: {
    repasitory: string;
    url: string;
  };
  footer: {
    refType: string;
    url: string;
  };
  visible: boolean;
}

export default function ProjectFooter({
  github,
  footer,
  visible,
}: ProjectFooterProps) {
  return (
    <ProjectFooterWrap visible={visible}>
      {github.url === "" ? null : (
        <FooterContent>
          <ProjectFooterText>Github</ProjectFooterText>
          <ProjectFooterURL href={github.url} target="_blank">
            {github.repasitory}
          </ProjectFooterURL>
        </FooterContent>
      )}
      {footer.url === "" ? null : (
        <FooterContent>
          <ProjectFooterText>{footer.refType}</ProjectFooterText>
          <ProjectFooterURL href={footer.url} target="_blank">
            Go to Reference Site
          </ProjectFooterURL>
        </FooterContent>
      )}
    </ProjectFooterWrap>
  );
}

const ProjectFooterWrap = styled.div<VisibleProps>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  opacity: 0;
  ${(props) =>
    props.visible === true
      ? css`
          animation: ${fadeIn} 1s linear forwards;
          animation-delay: 5.5s;
        `
      : css`
          animation: ${fadeOut} 0.2s linear forwards;
        `}
  ${media.small`
  gap: 0.4rem
`}
`;

const FooterContent = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
`;

const ProjectFooterText = styled.footer`
  text-align: start;
  font-size: 2rem;
  width: 8rem;
  ${media.small`
  font-size: 1.6rem;
`}
`;

const ProjectFooterURL = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  text-decoration: none;

  :visited {
    text-decoration: none;
    color: white;
  }
  :hover {
    text-decoration: underline;
    text-decoration-color: tomato;
    font-size: 1.8rem;
    transition: 0.5s;
  }
  ${media.small`
  font-size: 1.4rem;
`}
`;
