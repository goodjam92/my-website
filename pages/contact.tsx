import styled from "styled-components";

export default function Contact() {
  return (
    <ContactWrap>
      <ContactContent>Contact Page</ContactContent>
    </ContactWrap>
  );
}

const ContactWrap = styled.section`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4336d3;
`;

const ContactContent = styled.div`
  font-size: 10rem;
  color: white;
  text-align: center;
`;
