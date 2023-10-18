import React from "react";
import { Text3D, Center, Float, Text } from "@react-three/drei";
import { Color } from "three";

const WelcomeText = () => {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Center position={[0, 4, 1]}>
        <Text3D
          font="/assets/fonts/AnimeAce.json"
          bevelEnabled
          bevelSize={0.005}
          bevelThickness={0.01}
          height={0.1}
          lineHeight={0.5}
          letterSpacing={0.05}
          size={0.25}
        >
          {`Welcome`}
          <meshStandardMaterial color={0xff88ff} />
        </Text3D>
      </Center>
    </Float>
  );
};

export default WelcomeText;
