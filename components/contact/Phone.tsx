/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 phone.gltf --transform
Author: stPixel (https://sketchfab.com/innasparrow)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/3d-icons-phonecall-87a1a019fa984a90870325324b166333
Title: 3D icons Phone/Call
*/
import React, { useRef } from "react";
import { Stage, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Material } from "three";
import { useFrame } from "react-three-fiber";

type GLTFResult = GLTF & {
  nodes: {
    make_a_call_make_a_call_0: any;
  };
  materials: {
    make_a_call: Material | Material[] | undefined;
  };
};

export default function Model(props: any) {
  const { nodes, materials } = useGLTF("/phone-transformed.glb") as GLTFResult;
  const mesh = useRef<any>(null);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <Stage environment="city" intensity={0.6} shadows={false}>
      <group {...props} dispose={null}>
        <mesh
          ref={mesh}
          geometry={nodes.make_a_call_make_a_call_0.geometry}
          material={materials.make_a_call}
          position={[-150.55, 60.39, 1.49]}
          rotation={[0, 0, -1.04]}
        />
      </group>
    </Stage>
  );
}

useGLTF.preload("/phone-transformed.glb");
