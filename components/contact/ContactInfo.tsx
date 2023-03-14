import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { BsGithub, BsPhoneVibrate } from "react-icons/bs";
import { SiBloglovin } from "react-icons/si";
import { MdAlternateEmail } from "react-icons/md";

interface ContactInfoProps {
  info: "github" | "blog" | "email";
  text: string;
}

export default function ContactInfo({ info, text }: ContactInfoProps) {
  const infoIconRendering = (info: string) => {
    const render = () => {
      switch (info) {
        case "blog":
          return <SiBloglovin style={{ margin: 0, width: 32, height: 32 }} />;
        case "email":
          return (
            <MdAlternateEmail style={{ margin: 0, width: 36, height: 36 }} />
          );
        case "github":
          return <BsGithub style={{ margin: 0, width: 36, height: 36 }} />;
        default:
          break;
      }
    };
    return <>{render()}</>;
  };

  const infoTextRendering = (info: string) => {
    const render = () => {
      switch (info) {
        case "github":
        case "blog":
          return (
            <InfoText href={`https://${text}`} target="_blank">
              {text}
            </InfoText>
          );
        case "email":
          return (
            <InfoText href={`mailto:${text}`} target="_blank">
              {text}
            </InfoText>
          );
        default:
          break;
      }
    };
    return <>{render()}</>;
  };

  return (
    <InfoContainer id={info}>
      <InfoIcon>{infoIconRendering(info)}</InfoIcon>
      {infoTextRendering(info)}
    </InfoContainer>
  );
}

const InfoContainer = styled.div`
  width: 100%;
  min-height: 6rem;
  color: white;
  padding: 0.8rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
`;

const InfoIcon = styled.div`
  width: 20%;
  height: auto;
  text-align: center;
`;

const InfoText = styled.a`
  font-size: 2rem;
  width: fit-content;

  text-decoration: none;
  color: white;
  :visited {
    text-decoration: none;
    color: white;
  }
`;
