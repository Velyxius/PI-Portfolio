import Experience from "./Experience";
import Info from "./Info/Info";
import { Canvas } from "@react-three/fiber";

const App = () => {
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

export default App;
