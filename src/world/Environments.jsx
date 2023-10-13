import { Environment, Sky, Stars, Sparkles, Cloud } from "@react-three/drei";

const Environments = () => {
  return (
    <>
      <Environment
        background
        files={"/assets/environments/spring_1k.hdr"}
        ground={{ height: 80, scale: 32 }}
      />
      <Sky
        distance={45000}
        sunPosition={[0, 0, -1]} // Coloca el sol debajo del horizonte
        inclination={1} // Ajusta la inclinación para simular el atardecer
        azimuth={180}
        elevation={1}
        exposure={0.1}
        mieDirectionalG={0.5}
        rayleigh={0.1}
      />
      <Stars
        radius={100} // Radius of the inner sphere (default=100)
        depth={50} // Depth of area where stars should fit (default=50)
        count={5000} // Amount of stars (default=5000)
        factor={2} // Size factor (default=4)
        saturation={0} // Saturation 0-1 (default=0)
      />
      <Sparkles
        color="white"
        count={100}
        size={4}
        fade={false}
        speed={0.5}
        scale={6}
      />
      <Cloud
        opacity={0.5}
        speed={0.4} // Rotation speed
        width={20} // Width of the full cloud
        depth={5} // Z-dir depth
        segments={20} // Number of particles
        position={[0, 5, 0]}
        rotation={[0, 0, 0]}
        color={0xffaaff}
      />
    </>
  );
};

export default Environments;
