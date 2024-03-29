import { lazy } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import styled from "styled-components";
import { media } from "@/styles/media";

const SimbolComponent = lazy(() => import("@/components/intro/MySymbol"));

export default function Symbol() {
  return (
    <SymbolWrap>
      <Canvas style={{ height: 220 }}>
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <OrbitControls enableZoom={true} />
        <SimbolComponent />
      </Canvas>
    </SymbolWrap>
  );
}

const SymbolWrap = styled.div`
  max-width: 24rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  ${media.xSmall`
    
  `}
`;
