import { media } from "@/styles/media";
import styled from "styled-components";
import { Hyphen, HyphenText, HyphenTextWrap } from "../common/commonStyle";

interface CardHyphenTextProps {
  description: string;
}

export default function CardHyphenText({ description }: CardHyphenTextProps) {
  return (
    <TextWrap>
      <TextHyphen fontSize={2}>-</TextHyphen>
      <Text fontSize={2}>{description}</Text>
    </TextWrap>
  );
}

const TextWrap = styled(HyphenTextWrap)`
  line-height: 2;
  gap: 1rem;
`;

const TextHyphen = styled(Hyphen)`
  ${media.medium`
  font-size: 1.6rem;
  line-height: 1.5;
`}
  ${media.small`
  font-size: 1.6rem;
  line-height: 2;
`}
  ${media.xSmall`
  line-height: 1.4;
`}
`;

const Text = styled(HyphenText)`
  font-weight: 400;
  ${media.medium`
  font-size: 1.6rem;
  line-height: 1.5;
`}
  ${media.xSmall`
  font-size: 1.4rem;
  line-height: 1;
`}
`;
