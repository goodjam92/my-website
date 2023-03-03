import styled from "styled-components";

interface SpacerProps {
  width?: number;
  height?: number;
}

export function Spacer({ width, height }: SpacerProps) {
  return <SpacerDiv width={width} height={height} />;
}

const SpacerDiv = styled.div<SpacerProps>`
  min-width: ${({ width }) => width || "100%"}rem;
  min-height: ${({ height }) => height || "100%"}rem;
  background-color: transparent;
`;
