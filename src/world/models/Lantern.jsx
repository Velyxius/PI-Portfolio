/*
Author: Sam Feng (https://sketchfab.com/fengyuan20000303)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/japanese-shrine-lantern-8c19d6525acf441b9cf3c1fd91598ff6
Title: Japanese Shrine Lantern
*/

import { useGLTF } from "@react-three/drei";

const Lantern = (props) => {
  const { nodes, materials } = useGLTF("/assets/models/lantern/lantern.glb");
  return (
    <group {...props} dispose={null} onClick={(e) => e.stopPropagation()}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube001_Lantern_0.geometry}
              material={materials.Lantern}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube001_Light_0.geometry}
              material={materials.Light}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/assets/models/lantern/lantern.glb");
export default Lantern;
