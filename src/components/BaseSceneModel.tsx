import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { KTX2Loader } from "three/examples/jsm/Addons.js";

export function BaseSceneModel() {
  const { gl } = useThree();
  const { nodes, materials } = useGLTF("/models/scene-draco-ktx.glb", true, false, (loader) => {
    const ktx2Loader = new KTX2Loader().setTranscoderPath(`/compression/`);
    //@ts-ignore
    loader.setKTX2Loader(ktx2Loader.detectSupport(gl));
  });

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
