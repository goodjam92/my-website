import { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { TextureLoader } from "three";
import { RoundedBoxGeometry } from "three-stdlib";

export default function MySymbol(props: any) {
  const mesh = useRef<any>(null);
  const base = new TextureLoader().load("/assets/image/github.jpeg");
  const geometry = new RoundedBoxGeometry(12, 12, 12, 6, 2);
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      geometry={geometry}
      scale={[1, 1, 1]}
      position={[0, 0, -10]}
    >
      <meshStandardMaterial map={base} />
    </mesh>
  );
}
