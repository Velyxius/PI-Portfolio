import { Canvas } from "@react-three/fiber";
import Info from "../../components/info/Info";
import MainExperience from "../../components/experiences/MainExperience";

const Main = () => {
  const cameraSettings = {
    position: [0, 0, 5],
    fov: 60,
  };

  return (
    <>
      <Info name={"Marcelo García"} biography={"Developer. 21 years old."} />
      <Canvas camera={cameraSettings}>
        <MainExperience />
      </Canvas>
    </>
  );
};

export default Main;
