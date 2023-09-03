import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Experience = () => {
  const boxRef = useRef();
  console.log(boxRef.current);
  useFrame((state, delta) => {
    boxRef.current.rotation.x += 1 * delta;
  });

  return (
    <>
      <OrbitControls makeDefault />
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={2} />
      <mesh ref={boxRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
};

export default Experience;
