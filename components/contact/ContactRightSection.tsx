import { lazy } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import styled from "styled-components";

const SimbolComponent = lazy(() => import("@/components/contact/MySymbol"));

export default function ContactRightSection() {
  return (
    <RightSectionWrap>
      <Canvas style={{ height: 220 }}>
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <OrbitControls enableZoom={false} />
        <SimbolComponent />
      </Canvas>
    </RightSectionWrap>
  );
}

const RightSectionWrap = styled.div`
  min-width: 32rem;
  min-height: 32rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
`;
