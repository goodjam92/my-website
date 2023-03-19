import { VisibleProps } from "@/model/VisibleProps";
import { media } from "@/styles/media";
import styled, { css } from "styled-components";
import { cliptext, fadeOut } from "../animation/animation";
import { Hyphen, HyphenText, HyphenTextWrap } from "../common/commonStyle";

interface DescriptionTextProps {
  description: string;
  visible: boolean;
  index: number;
}

export default function DescriptionText({
  description,
  visible,
  index,
}: DescriptionTextProps) {
  return (
    <TextWrap visible={visible} delay={index + 1.5}>
      <TextHyphen fontSize={1.8}>-</TextHyphen>
      <Text fontSize={1.8}>{description}</Text>
    </TextWrap>
  );
}

const TextWrap = styled(HyphenTextWrap)<VisibleProps>`
  line-height: 1.2;
  gap: 0.8rem;
  opacity: 0;
  ${(props) =>
    props.visible === true
      ? css`
          animation: ${cliptext} 0.5s linear forwards;
          animation-delay: ${props.delay}s;
        `
      : css`
          animation: ${fadeOut} 0.2s linear forwards;
        `}
`;

const TextHyphen = styled(Hyphen)`
  ${media.medium`
  font-size: 1.6rem;
`}
  ${media.small`
  font-size: 1.4rem;
  font-weight: 400;
`}
`;

const Text = styled(HyphenText)`
  ${media.medium`
  font-size: 1.6rem;
`}
  ${media.small`
  font-size: 1.4rem;
  font-weight: 400;
`}
`;
