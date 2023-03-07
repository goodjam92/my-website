import styled from "styled-components";

export default function Career() {
  return (
    <CareerWrap>
      <CareerContent>Career Page</CareerContent>
    </CareerWrap>
  );
}

const CareerWrap = styled.section`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d33643;
`;

const CareerContent = styled.div`
  font-size: 10rem;
  color: white;
  text-align: center;
`;
