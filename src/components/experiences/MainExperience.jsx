import { OrbitControls, PointerLockControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import Controls from "../../world/controls/Controls";
import Calli from "../../world/models/Calli";
import Sakura from "../../world/models/Sakura";
import Lantern from "../../world/models/Lantern";
import Floor from "../../world/models/Floor";
import Lights from "../../world/staging/Lights";
import Torii from "../../world/models/Torii";
import Dinner from "../../world/models/Dinner";
import Environments from "../../world/staging/Environments";
import { Perf } from "r3f-perf";
import SignPost from "../../world/models/SignPost";
import Texts from "../../world/texts/Texts";
import Room from "../../world/models/Room";
import Jabulani from "../../world/models/Jabulani";

const MainExperience = () => {
  useFrame((state, delta) => {});

  return (
    <Physics>
      {/* <Perf position="top-right" /> */}
      <Controls />
      <Lights />
      <Texts />
      <Calli position={[0, 0, 0]} />
      <Sakura scale={0.15} position={[-2, 0, -5]} />
      <Lantern scale={1} position={[3, 6, 0]} />
      <SignPost position={[-3, 0, 2]} rotation-y={Math.PI / 4} />
      <Torii scale={2} position={[0, 8.46, 10]} />
      <Dinner position={[0, 0.02, 1.5]} />
      <Room scale={0.01} rotation-y={-Math.PI / 2} position={[15, 0.11, 3]} />
      <Jabulani scale={1 / 12} position={[12, 0.111, 0]} />
      <Jabulani scale={1 / 12} position={[12, 0.111, 2]} />
      <Jabulani scale={1 / 12} position={[12, 0.111, 4]} />
      <Jabulani scale={1 / 12} position={[14, 0.111, 0]} />
      <Jabulani scale={1 / 12} position={[14, 0.12, 5]} />
      <Floor position-y={-0.1} rotation-x={-Math.PI / 2} receiveShadow />
      <Environments />
    </Physics>
  );
};

export default MainExperience;
