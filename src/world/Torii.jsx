import { useGLTF } from "@react-three/drei";

const Torii = (props) => {
  const { nodes, materials } = useGLTF("/assets/models/torii/torii.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_torii_0.geometry}
        material={materials.torii}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
    </group>
  );
};

useGLTF.preload("/assets/models/torii/torii.glb");

export default Torii;
