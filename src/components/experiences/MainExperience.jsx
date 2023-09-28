import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Calli from "../../world/Calli";
import Sakura from "../../world/Sakura";
import Lantern from "../../world/Lantern";
import Floor from "../../world/Floor";

const MainExperience = () => {
  useFrame((state, delta) => {});

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.3} />
      <directionalLight position={[2, 3, 5]} intensity={2} />
      <Calli position-y={-1} />
      <Sakura scale={0.15} position={[-2, -1, -5]} />
      <Lantern scale={1.8} position={[2.5, -1, 0]} />
      <Floor position-y={-1.1} rotation-x={-Math.PI / 2} receiveShadow />
    </>
  );
};

export default MainExperience;
