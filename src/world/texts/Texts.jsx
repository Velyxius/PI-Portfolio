import { Text3D, Center, Float, Text } from "@react-three/drei";
import { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";

const Texts = () => {
  const [active, setActive] = useState(false);
  useFrame((state, delta) => {
    state.camera.position.x = MathUtils.lerp(
      state.camera.position.x,
      active ? 18 : 0,
      0.02
    );
    state.camera.position.y = MathUtils.lerp(
      state.camera.position.y,
      active ? 2 : 4,
      0.02
    );
    state.camera.position.z = MathUtils.lerp(
      state.camera.position.z,
      active ? 6 : 7,
      0.02
    );
  });

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
      <Center position={[0, 4, 2]}>
        <Text3D
          font="/assets/fonts/AnimeAce.json"
          bevelEnabled
          bevelSize={0.01}
          bevelThickness={0.02}
          height={0.1}
          lineHeight={0.5}
          letterSpacing={0.05}
          size={0.25}
        >
          {`Welcome`}
          <meshStandardMaterial color={0xff88ff} />
        </Text3D>
      </Center>
      <Center position={[3, 4, 2]} rotation={[0, -Math.PI / 6, 0]}>
        <Text3D
          font="/assets/fonts/AnimeAce.json"
          bevelEnabled
          bevelSize={0.01}
          bevelThickness={0.02}
          height={0.1}
          lineHeight={0.5}
          letterSpacing={0}
          size={0.25}
          onClick={() => setActive(!active)}
        >
          {` Click to\n\nVisit Room`}
          <meshStandardMaterial color={0xff8888} />
        </Text3D>
      </Center>
      <Center position={[11.8, 3, 3.5]} rotation={[0, Math.PI / 2, 0]}>
        <Text3D
          font="/assets/fonts/AnimeAce.json"
          bevelEnabled
          bevelSize={0.01}
          bevelThickness={0.01}
          height={0.1}
          lineHeight={0.5}
          letterSpacing={0}
          size={0.25}
          onClick={() => setActive(!active)}
        >
          {`    Click to\n\nReset Camera`}
          <meshStandardMaterial color={0x0088ff} />
        </Text3D>
      </Center>
    </Float>
  );
};

export default Texts;
