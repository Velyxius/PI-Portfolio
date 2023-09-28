import { useTexture } from "@react-three/drei";
import { RepeatWrapping, Vector2 } from "three";

const Floor = (props) => {
  const PATH = "/assets/textures/grass/";

  const propsTexture = useTexture({
    map: PATH + "grassColor.jpg",
    normalMap: PATH + "grassNormal.jpg",
    displacementMap: PATH + "grassDisplacement.jpg",
    roughnessMap: PATH + "grassRoughness.jpg",
    aoMap: PATH + "grassAO.jpg",
  });

  const repeat = new Vector2(8, 8);
  const mapVector = [
    propsTexture.map,
    propsTexture.normalMap,
    propsTexture.displacementMap,
    propsTexture.roughnessMap,
    propsTexture.aoMap,
  ];

  for (const map of mapVector) {
    map.repeat = repeat;
  }

  const repeatWrapping = RepeatWrapping;
  for (const map of mapVector) {
    map.wrapS = map.wrapT = repeatWrapping;
  }

  propsTexture.map.offset =
    propsTexture.normalMap.offset =
    propsTexture.displacementMap.offset =
    propsTexture.roughnessMap.offset =
    propsTexture.aoMap.offset =
      new Vector2(0.5, 0.5);

  return (
    <mesh {...props}>
      <planeGeometry args={[32, 32, 20, 20]} />
      <meshStandardMaterial {...propsTexture} />
    </mesh>
  );
};
export default Floor;
