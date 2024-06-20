import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import deathStarScene from "../assets/deathStar.glb";

const DeathStar = (props) => {
  const { nodes, materials } = useGLTF(deathStarScene);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DeathStar001_1_0.geometry}
        material={materials.material}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DeathStar_misa001_2_0.geometry}
        material={materials.material_1}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
};

export default DeathStar;
