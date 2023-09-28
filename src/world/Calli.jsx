/*
Author: Seafoam (https://sketchfab.com/seafoam)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/smol-calli-mori-calliope-holomyth-bac01c63d3074f28a6cb1d2d8b3b3ec2
Title: Smol Calli - Mori Calliope, HoloMyth
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Calli = (props) => {
  const calliRef = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/assets/models/calli/calli.glb"
  );
  const { actions, mixer, clips } = useAnimations(animations, calliRef);
  console.log(calliRef);

  useEffect((state, delta) => {
    const action = actions[/*"SmolcalliAnimationsRESOURCE"*/ "paradewalk"];
    action.play();
    //mixer.setTime(3.5);
  }, []);

  return (
    <group ref={calliRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="170e3b08faee40458e5af78f85b78b53fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="callirig"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_46"
                      geometry={nodes.Object_46.geometry}
                      material={materials.Smolcalli}
                      skeleton={nodes.Object_46.skeleton}
                      morphTargetDictionary={
                        nodes.Object_46.morphTargetDictionary
                      }
                      morphTargetInfluences={
                        nodes.Object_46.morphTargetInfluences
                      }
                    />
                    <skinnedMesh
                      name="Object_47"
                      geometry={nodes.Object_47.geometry}
                      material={materials.SmolcalliOutline}
                      skeleton={nodes.Object_47.skeleton}
                      morphTargetDictionary={
                        nodes.Object_47.morphTargetDictionary
                      }
                      morphTargetInfluences={
                        nodes.Object_47.morphTargetInfluences
                      }
                    />
                    <skinnedMesh
                      name="Object_48"
                      geometry={nodes.Object_48.geometry}
                      material={materials.SmolcalliVeil}
                      skeleton={nodes.Object_48.skeleton}
                      morphTargetDictionary={
                        nodes.Object_48.morphTargetDictionary
                      }
                      morphTargetInfluences={
                        nodes.Object_48.morphTargetInfluences
                      }
                    />
                    <skinnedMesh
                      name="Object_49"
                      geometry={nodes.Object_49.geometry}
                      material={materials.SmolcalliHead}
                      skeleton={nodes.Object_49.skeleton}
                      morphTargetDictionary={
                        nodes.Object_49.morphTargetDictionary
                      }
                      morphTargetInfluences={
                        nodes.Object_49.morphTargetInfluences
                      }
                    />
                    <skinnedMesh
                      name="Object_50"
                      geometry={nodes.Object_50.geometry}
                      material={materials.SmolcalliEye}
                      skeleton={nodes.Object_50.skeleton}
                      morphTargetDictionary={
                        nodes.Object_50.morphTargetDictionary
                      }
                      morphTargetInfluences={
                        nodes.Object_50.morphTargetInfluences
                      }
                    />
                    <group
                      name="Object_45"
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                  </group>
                </group>
                <group
                  name="calliMESH"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/assets/models/calli/calli.glb");
export default Calli;
