import { useBaseSceneModel } from "./useBaseSceneModel";

export function BaseSceneModel() {
  const { nodes, materials } = useBaseSceneModel();

  return (
    <mesh
      castShadow
      receiveShadow
      //@ts-ignore
      geometry={nodes.base.geometry}
      material={materials.environment}
    />
  );
}
