import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import {
  DirectionalLightHelper,
  HemisphereLightHelper,
  PointLightHelper,
  SpotLightHelper,
} from "three";

const Lights = () => {
  const directionalLightRef = useRef();
  // useHelper(directionalLightRef, DirectionalLightHelper);

  const pointLightRef = useRef();
  // useHelper(pointLightRef, PointLightHelper);

  const spotLightRef = useRef();
  // useHelper(spotLightRef, SpotLightHelper);

  const hemisphereLightRef = useRef();
  // useHelper(hemisphereLightRef, HemisphereLightHelper);

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight
        ref={directionalLightRef}
        castShadow
        position={[5, 12, 5]}
        intensity={3}
        color={0xffffff}
        shadow-mapSize={[256, 256]}
        shadow-camera-far={32}
        shadow-camera-top={32}
        shadow-camera-bottom={-32}
        shadow-camera-right={32}
        shadow-camera-left={-32}
      />
      <pointLight
        ref={pointLightRef}
        castShadow
        position={[3, 7, 0]}
        intensity={5}
        color={0xff0000}
      />
      <spotLight
        ref={spotLightRef}
        castShadow
        position={[0, 5, 0]}
        angle={Math.PI / 8}
        intensity={200}
        color={0xffffff}
        penumbra={1}
        distance={8}
      />
      {/* <hemisphereLight
        ref={hemisphereLightRef}
        position={[-10, 3, 3]}
        intensity={0}
        color={0xff66ff}
      /> */}
    </>
  );
};

export default Lights;
