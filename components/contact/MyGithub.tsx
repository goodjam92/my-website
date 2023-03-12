import { useTexture } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { TextureLoader } from "three";

export default function MyGithub(props: any) {
  const mesh = useRef<any>(null);
  const base = new TextureLoader().load("/assets/image/github.jpeg");

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh {...props} ref={mesh} scale={[1, 1, 1]}>
      <boxBufferGeometry args={[10, 10, 0.15]} />
      <meshStandardMaterial map={base} />
    </mesh>
  );
}
