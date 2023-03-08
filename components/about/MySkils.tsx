import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";

const mySkill: Array<string> = [`FrontEnd`, "co-op", "library"];

interface MySkillsProps {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

export default function MySkils({ selected, setSelected }: MySkillsProps) {
  return (
    <List>
      {mySkill.map((item) => (
        <ListItem
          key={item}
          text={item}
          selected={selected}
          onClick={(e: any) => {
            setSelected(e.target.innerText);
          }}
        >
          {item}
        </ListItem>
      ))}
    </List>
  );
}

const List = styled.ul`
  min-height: 40rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 2rem;
`;

interface ListItemProps {
  text: string;
  selected: string;
}

const ListItem = styled.li<ListItemProps>`
  height: 100%;
  width: fit-content + 1;
  font-size: 6rem;
  cursor: pointer;
  -webkit-text-stroke: 0.05rem #ffffff;
  font-family: "CarterOne-Regular";
  position: relative;
  color: ${(props) =>
    props.selected === props.text ? "#b201a3" : "transparent"};
  text-shadow: ${(props) =>
    props.selected === props.text ? "0.1rem 0.1rem 0.2rem white" : "none"};

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
          color: #b201a3;
          text-shadow: 0.1rem 0.1rem 0.2rem white;
          width: 100%;
        }
      }
    }
  }
`;
