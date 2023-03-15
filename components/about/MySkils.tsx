import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { media } from "@/styles/media";

const MY_SKILL: Array<string> = [
  `Front-End`,
  "Co-op & Versioning",
  "Library & Tool",
  "Deploy & BackEnd",
];

interface MySkillsProps {
  selectedSkill: string;
  setselectedSkill: Dispatch<SetStateAction<string>>;
}

export default function MySkils({
  selectedSkill,
  setselectedSkill,
}: MySkillsProps) {
  return (
    <List>
      {MY_SKILL.map((item) => (
        <ListItem
          key={item}
          text={item}
          selectedSkill={selectedSkill}
          onClick={(e: any) => {
            setselectedSkill(e.target.innerText);
          }}
        >
          {item}
        </ListItem>
      ))}
    </List>
  );
}

const List = styled.ul`
  min-height: 44rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 2rem;

  ${media.medium`
  min-height: 16rem;
  flex-direction: row;
  align-items: center;
  flex-wrap:wrap;
  padding: 0;
  margin-top: 4rem;
  gap:4rem;
`}
`;

interface ListItemProps {
  text: string;
  selectedSkill: string;
}

const ListItem = styled.li<ListItemProps>`
  height: 100%;
  width: fit-content;
  font-size: 5.2rem;
  cursor: pointer;
  -webkit-text-stroke: 0.1rem #ffffff;
  font-family: "RussoOne-Regular";
  position: relative;
  color: ${(props) =>
    props.selectedSkill === props.text ? "white" : "transparent"};
  text-shadow: ${(props) =>
    props.selectedSkill === props.text
      ? "0.4rem 0.4rem 0.4rem #323232"
      : "none"};
  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear forwards;
      @keyframes moveText {
        0% {
          width: 0;
        }
        100% {
          color: white;
          text-shadow: 0.2rem 0.2rem 0.2rem #323232;
          width: 100%;
        }
      }
    }
  }

  ${media.large`
  font-size: 4.8rem;
`}
  ${media.medium`
  font-size: 4rem
`}
  ${media.small`
  font-size: 3.6rem 
`}
`;
