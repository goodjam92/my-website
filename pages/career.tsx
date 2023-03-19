import styled from "styled-components";
import { backgroundAnimate } from "@/components/animation/animation";
import DeveloperCard from "@/components/career/DeveloperCard";
import { ContentBox, FlexBox } from "@/components/common/commonStyle";
import OtherCareerCard from "@/components/career/OtherCareerCard";
import { media } from "@/styles/media";

export default function Career() {
  const onClickedCareerButton = (event: any) => {
    const card = event.currentTarget;
    if (card.style.transform == "rotateY(180deg)") {
      card.style.transform = "rotateY(0deg)";
      return;
    }
    card.style.transform = "rotateY(180deg)";
  };

  return (
    <CareerWrap>
      <CareerContentBox>
        <CareerFlexBox>
          <CareerCard onClick={onClickedCareerButton}>
            <InfoFrontCard>
              <CareerHeadText>
                Front End <br />
                Developer
              </CareerHeadText>
            </InfoFrontCard>
            <InfoBackCard>
              <DeveloperCard />
            </InfoBackCard>
          </CareerCard>
          <CareerCard onClick={onClickedCareerButton}>
            <InfoFrontCard>
              <CareerHeadText>Other Career</CareerHeadText>
            </InfoFrontCard>
            <InfoBackCard>
              <OtherCareerCard />
            </InfoBackCard>
          </CareerCard>
        </CareerFlexBox>
      </CareerContentBox>
    </CareerWrap>
  );
}

const CareerWrap = styled.section`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #06769b, #068c9b, #0c638f, #06769b);
  background-size: 400% 400%;
  animation: ${backgroundAnimate} 20s ease infinite;
`;

const CareerContentBox = styled.div`
  min-width: 120rem;
  height: 100%;
  margin-left: 10rem;
  margin-right: 2rem;
  padding: 4rem;
  box-sizing: border-box;
  transition: all 0.5s;
  ${media.large`
  min-width: 108rem;
  margin: 0;
`}
  ${media.medium`
  min-width: 66rem;
  margin: 0;
`}
  ${media.small`
  min-width: 52.8rem;
  margin: 0;
`}
  ${media.xSmall`
  min-width: 44.8rem;
  margin: 0;
`}
`;

const CareerFlexBox = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.5s;
  width: 100%;
  height: 42rem;
  perspective: 1000px;
  gap: 4rem;

  ${media.large`
  gap: 2rem;
  `}
  ${media.medium`
  flex-direction: column;
  min-height: 62rem;
  `}
  ${media.xSmall`
  flex-direction: column;
  min-height: 52rem;
  `}
`;

const CareerCard = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
`;

const CareerHeadText = styled.h2`
  font-size: 5.2rem;
  white-space: pre-line;
  text-align: center;
  font-family: "RussoOne-Regular";
  font-weight: 400;
  ${media.xSmall`
  font-size: 3.6rem;
  `}
`;

const InfoCard = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
  :hover {
    box-shadow: 0.4rem 0.8rem 1.2rem 0.4rem rgba(0, 0, 0, 0.3);
  }
  :active {
    box-shadow: 0.8rem 0.8rem 0.8rem 0.4rem rgba(0, 0, 0, 0.3) inset;
  }
  ${media.xSmall`
  border-radius: 1.2rem;
  `}
`;

const InfoFrontCard = styled(InfoCard)`
  background: linear-gradient(-45deg, #06769b, #0c638f, #108491, #157fa2);
  background-size: 400% 400%;
  animation: ${backgroundAnimate} 20s ease infinite;
  color: white;
`;

const InfoBackCard = styled(InfoCard)`
  transform: rotateY(180deg);
  background-color: white;
  color: black;
`;
