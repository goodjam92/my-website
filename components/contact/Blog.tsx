/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 blog.gltf --transform
Author: AnshiNoWara (https://sketchfab.com/AnshiNoWara)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/badoo-old-logo-293917e3a3d5467bb823d3c64733712b
Title: Badoo Old Logo
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Material } from "three";
import { useFrame } from "react-three-fiber";

type GLTFResult = GLTF & {
  nodes: {
    Object_2: any;
    Object_3: any;
  };
  materials: {
    blank: Material | Material[] | undefined;
    logo: Material | Material[] | undefined;
  };
};

export default function Model(props: any) {
  const { nodes, materials } = useGLTF("/blog-transformed.glb") as GLTFResult;
  const mesh = useRef<any>(null);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <group {...props} dispose={null} ref={mesh}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.blank} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.logo} />
      </group>
    </group>
  );
}

useGLTF.preload("/blog-transformed.glb");
