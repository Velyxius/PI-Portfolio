import { OrbitControls, PointerLockControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Calli from "../../world/Calli";
import Sakura from "../../world/Sakura";
import Lantern from "../../world/Lantern";
import Floor from "../../world/Floor";
import Lights from "../../world/Lights";
import Torii from "../../world/Torii";
import Dinner from "../../world/Dinner";
import Environments from "../../world/Environments";
import { Perf } from "r3f-perf";
import SignPost from "../../world/SignPost";

const MainExperience = () => {
  useFrame((state, delta) => {});

  return (
    <>
      {/* <Perf position="top-right" /> */}
      <OrbitControls rotation={[0, 30, 0]} />
      <Lights />
      <Calli position={[0, 0, 0]} />
      <Sakura scale={0.15} position={[-2, 0, -5]} />
      <Lantern scale={1} position={[3, 6, 0]} />
      <SignPost position={[-3, 0, 0]} />
      <Torii scale={2} position={[0, 8.46, 10]} />
      <Dinner position={[0, 0.02, 1.5]} />
      <Floor position-y={-0.1} rotation-x={-Math.PI / 2} receiveShadow />
      <Environments />
    </>
  );
};

export default MainExperience;
