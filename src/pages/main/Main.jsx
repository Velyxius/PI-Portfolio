import { Canvas } from "@react-three/fiber";
import Info from "../../components/info/Info";
import MainExperience from "../../components/experiences/MainExperience";

const Main = () => {
  const cameraSettings = {
    position: [0, 4, 7],
    fov: 75,
  };

  return (
    <>
      <Info name={"Marcelo Millán"} biography={"Developer. 21 years old."} />
      <Canvas camera={cameraSettings} shadows>
        <MainExperience />
      </Canvas>
    </>
  );
};

export default Main;
