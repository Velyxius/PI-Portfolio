import React from "react";
import { useGLTF } from "@react-three/drei";

const SignPost = (props) => {
  const { nodes, materials } = useGLTF("/assets/models/signpost/SignPost.glb");
  const handleAboutMeSign = (event, type) => {
    alert(type);
  };

  const handleProjectsSign = (event, type) => {
    if (window.confirm(type)) {
      window.open("https://github.com/Velyxius?tab=repositories", "_blank");
    }
  };

  const handleContactSign = (event, type) => {
    alert(type);
  };

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Post.geometry}
        material={materials.Wood}
        position={[0, 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SignAboutMe.geometry}
        material={materials.AboutMe}
        position={[0.937, 3.7, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.64, 1, 0.7]}
        onClick={(event) =>
          handleAboutMeSign(
            event,
            "Hola, soy Marcelo Millán, Ingeniero de Sistemas en Formación.\n\n" +
              "Habilidades en Python, Django, HTML, CSS y JavaScript."
          )
        }
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TextAboutMe.geometry}
          material={nodes.TextAboutMe.material}
          position={[-0.945, 0.067, 0.118]}
          scale={[0.437, 0.28, 0.4]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Support.geometry}
        material={materials.Wood}
        position={[0, 3.7, 1]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.4}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DiagonalSupport.geometry}
          material={materials.Wood}
          position={[0, -1.125, 1]}
          rotation={[-Math.PI / 4, 0, 0]}
          scale={0.7}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SignProjects.geometry}
        material={materials.Projects}
        position={[-0.83, 3.4, -0.46]}
        rotation={[Math.PI / 2, 0, -2.618]}
        scale={[0.64, 1, 0.7]}
        onClick={(event, type) =>
          handleProjectsSign(event, 'Clickea "Ok" para ver los proyectos')
        }
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TextProjects.geometry}
          material={nodes.TextProjects.material}
          position={[0.856, -0.072, 0.094]}
          rotation={[0, 0, -Math.PI]}
          scale={[0.547, 0.35, 0.5]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SignContact.geometry}
        material={materials.Contact}
        position={[-0.121, 0.999, 0.237]}
        rotation={[Math.PI / 2, 0, Math.PI / 6]}
        scale={[0.64, 1, 0.91]}
        onClick={(event) =>
          handleContactSign(
            event,
            "Puedes contactarme por medio del siguiente correo: garcia.marcelo@correounivalle.edu.co"
          )
        }
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TextContact.geometry}
          material={nodes.TextContact.material}
          position={[-0.952, 0.08, 0.103]}
          scale={[0.547, 0.35, 0.385]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SignMusic.geometry}
        material={materials.Music}
        position={[-0.24, 1.95, 0.1]}
        rotation={[Math.PI / 2, 0, -2.094]}
        scale={[0.462, 0.917, 0.7]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TextMusic.geometry}
          material={nodes.TextMusic.material}
          position={[-0.033, -0.064, 0.079]}
          rotation={[0, 0, -Math.PI]}
          scale={[0.455, 0.229, 0.3]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lantern.geometry}
        material={materials.Metal}
        position={[0.001, 1.317, 1.626]}
        scale={0.5}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCircle.geometry}
          material={materials.Metal}
          position={[0, 1.777, -0.003]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PostRings.geometry}
        material={materials.Metal}
        position={[0.001, 3.551, 1.624]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.5}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BottomRing.geometry}
          material={materials.Metal}
          position={[0, 0, 0.344]}
          rotation={[0, 0, -Math.PI / 2]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chain.geometry}
        material={materials.Metal}
        position={[0.001, 3.312, 1.624]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Light.geometry}
        material={materials.Light}
        position={[0.001, 1.317, 1.626]}
        scale={0.5}
      />
    </group>
  );
};

useGLTF.preload("/assets/models/signpost/SignPost.glb");
export default SignPost;
