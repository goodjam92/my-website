import styled from "styled-components";
import { backgroundAnimate } from "@/components/animation/animation";
import DeveloperCard from "@/components/career/DeveloperCard";
import { ContentBox, FlexBox } from "@/components/common/commonStyle";
import OtherCareerCard from "@/components/career/OtherCareerCard";

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
      <ContentBox>
        <CareerFlexBox>
          <CareerCard onClick={onClickedCareerButton}>
            <InfoCard>
              <CareerHeadText>
                Front End <br />
                Developer
              </CareerHeadText>
            </InfoCard>
            <InfoBackCard>
              <DeveloperCard />
            </InfoBackCard>
          </CareerCard>
          <CareerCard onClick={onClickedCareerButton}>
            <InfoCard>
              <CareerHeadText>Other Career</CareerHeadText>
            </InfoCard>
            <InfoBackCard>
              <OtherCareerCard />
            </InfoBackCard>
          </CareerCard>
        </CareerFlexBox>
      </ContentBox>
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

const CareerFlexBox = styled(FlexBox)`
  min-width: 100%;
  height: 44rem;
  perspective: 1000px;
  gap: 2rem;
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
`;

const InfoCard = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 192, 0.1);
  backdrop-filter: blur(0.4rem);
  border-radius: 2rem;
  color: white;
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
`;

const InfoBackCard = styled(InfoCard)`
  transform: rotateY(180deg);
`;
