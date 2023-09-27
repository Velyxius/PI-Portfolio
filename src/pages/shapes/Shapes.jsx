import React from "react";
import { Canvas } from "@react-three/fiber";
import Info from "../../components/info/Info";
import Experience from "../../Experience";

const Figures = () => {
  const cameraSettings = {
    position: [0, 0, 5],
    fov: 60,
  };

  return (
    <>
      <Info name={"Marcelo"} biography={"Developer. 21 years old."} />
      <Canvas camera={cameraSettings}>
        <Experience />
      </Canvas>
    </>
  );
};

export default Figures;
