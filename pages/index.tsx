import { useRouter } from "next/router";
import styled from "styled-components";
import About from "@/components/section/About";
import Project from "@/components/section/Project";
import Wellcome from "@/components/section/Wellcome";
import { Spacer } from "@/components/Spacer";
import { media } from "@/styles/media";

export default function Home() {
  const router = useRouter();
  console.log(router);

  return (
    <LandingPageWrap>
      <Wellcome />
      <Spacer height={10} />
      <About />
      <Project />
    </LandingPageWrap>
  );
}

const LandingPageWrap = styled.div`
  height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
  overflow: auto;
  border-radius: 2rem;
  ${media.medium`
    margin-left: 0rem;
  `}
`;
