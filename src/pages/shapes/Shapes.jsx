import React from "react";
import { Canvas } from "@react-three/fiber";
import Info from "../../components/info/Info";
import ShapesExperience from "../../components/experiences/ShapesExperience";

const Figures = () => {
  const cameraSettings = {
    position: [0, 0, 5],
    fov: 60,
  };

  return (
    <>
      <Info name={"Marcelo García"} biography={"Developer. 21 years old."} />
      <Canvas camera={cameraSettings}>
        <ShapesExperience />
      </Canvas>
    </>
  );
};

export default Figures;
