import { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody, BallCollider } from "@react-three/rapier";

const Jabulani = (props) => {
  const { nodes, materials } = useGLTF("/assets/models/jabulani/jabulani.glb");
  const [play, setPlay] = useState(false);
  const jabulaniRef = useRef();
  const handleJabulani = () => {
    const alpha = () => {
      return Math.round(Math.random()) ? 1 : -1;
    };
    jabulaniRef.current.wakeUp();
    jabulaniRef.current.applyImpulse(
      { x: 1 * alpha(), y: 4, z: 1 * alpha() },
      true
    );
    jabulaniRef.current.applyTorqueImpulse(
      { x: 0.1 * alpha(), y: 0.1, z: 0.1 * alpha() },
      true
    );
  };

  const [hitSound] = useState(() => new Audio("/assets/sounds/hit.wav"));

  useEffect(() => {
    jabulaniRef.current.sleep();
  }, []);

  useEffect(() => {
    if (play) {
      hitSound.currentTime = 0;
      hitSound.volume = Math.random();
      hitSound.muted = false;
      hitSound.play().catch((error) => {
        console.log(
          "Chromium cannot play sound without user interaction first"
        );
      });
    }
  }, [play]);

  return (
    <RigidBody
      ref={jabulaniRef}
      colliders={"hull"}
      onClick={handleJabulani}
      onCollisionEnter={() => setPlay(!play)}
      onCollisionLeave={() => setPlay(!play)}
    >
      <group {...props} dispose={null}>
        <group>
          <group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Material2.geometry}
              material={materials.jabulani1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Material2_1.geometry}
              material={materials.jabulani1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Material2_2.geometry}
              material={materials.jabulani1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Material2_3.geometry}
              material={materials.jabulani1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Material2_4.geometry}
              material={materials.jabulani_2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Material2_5.geometry}
              material={materials.material}
            />
            <lineSegments
              geometry={nodes.Material2_6.geometry}
              material={materials.edge_color808080255}
            />
          </group>
        </group>
      </group>
    </RigidBody>
  );
};

useGLTF.preload("/assets/models/jabulani/jabulani.glb");

export default Jabulani;
