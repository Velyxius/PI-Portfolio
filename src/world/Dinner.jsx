import React from "react";

import { useGLTF } from "@react-three/drei";

const Dinner = (props) => {
  const { nodes, materials } = useGLTF("/assets/models/dinner/dinner.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials["Material.001"]}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/assets/models/dinner/dinner.glb");

export default Dinner;
