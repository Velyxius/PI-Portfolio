import {
  OrbitControls,
  FirstPersonControls,
  PointerLockControls,
} from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Info from "./Info/Info";

const Experience = () => {
  const sphereRef = useRef();
  const coneRef = useRef();
  const torusRef = useRef();
  useFrame((state, delta) => {
    torusRef.current.position.y = Math.sin(state.clock.getElapsedTime());
    torusRef.current.rotation.y = Math.cos(state.clock.getElapsedTime());
    sphereRef.current.position.x = Math.sin(state.clock.getElapsedTime());
    sphereRef.current.position.y = Math.cos(state.clock.getElapsedTime());
    sphereRef.current.rotation.y = Math.cos(state.clock.getElapsedTime());
    coneRef.current.position.x = Math.cos(state.clock.getElapsedTime()) + 5;
    coneRef.current.rotation.z = Math.cos(state.clock.getElapsedTime()) + 5;
  });

  return (
    <>
      <PointerLockControls />
      <ambientLight intensity={0.3} />
      <directionalLight position={[2, 3, 5]} intensity={2} />
      <mesh ref={sphereRef} position={[5, 0, -5]}>
        <sphereGeometry args={[1, 16, 32]} />
        <meshPhysicalMaterial color="red" roughness={0} reflectivity={0} />
      </mesh>
      <mesh ref={coneRef} position={[0, 0, -5]}>
        <coneGeometry args={[1, 2]} />
        <meshPhysicalMaterial color="pink" roughness={0} reflectivity={0} />
      </mesh>
      <mesh ref={torusRef} position={[-5, 0, -10]}>
        <torusGeometry args={[1, 0.5, 16, 100]} />
        <meshPhysicalMaterial color="green" roughness={0} reflectivity={0} />
      </mesh>
    </>
  );
};

export default Experience;
