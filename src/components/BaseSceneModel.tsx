import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { KTX2Loader } from "three/examples/jsm/Addons.js";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

export function BaseSceneModel() {
  const { gl } = useThree();
  //I think the above fallback in suspense works
  //because useGLTF is a hook that throws a promise
  const { nodes, materials } = useGLTF(
    "/models/scene.glb",
    false,
    false,
    (loader) => {
      const ktx2Loader = new KTX2Loader().setTranscoderPath(`/compression/`);
      //@ts-ignore
      loader.setKTX2Loader(ktx2Loader.detectSupport(gl));
    }
  );

  return (
    <>
      <RigidBody type="fixed" colliders={false}>
        <CuboidCollider args={[10, 1, 10]} position={[0, -1, 0]} />
      </RigidBody>
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.base.geometry}
        material={materials.environment}
      />
    </>
  );
}
