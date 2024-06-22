import { PerspectiveCamera } from "@react-three/drei";
import { useSceneStore } from "../stores/SceneStore";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function CameraController({ cameraProps }: { cameraProps: any }) {
  const shouldZoomCamera = useSceneStore((scene) => scene.shouldZoomCamera);

  const vec = new THREE.Vector3(-1.37, 1.45, -1.36);
  const rot = new THREE.Euler(-0.587, 0.716, 0.406);
  useFrame((state) => {
    if (shouldZoomCamera) {
      state.camera.position.lerp(vec, 0.1);
      state.camera.setRotationFromEuler(rot);
    }
    // else if (shouldZoomCamera == false) {
    // }
  });
  return (
    <>
      <PerspectiveCamera
        makeDefault={cameraProps.type === "STARTSCREEN"}
        fov={90}
        position={[0.592, 1.746, 0.7]}
        rotation={[-0.529, 0.684, 0.354]}
      />

      <PerspectiveCamera
        makeDefault={cameraProps.type === "DESK"}
        fov={75}
        position={[-1.37, 1.45, -1.36]}
        rotation={[-0.587, 0.716, 0.406]}
      />
      <PerspectiveCamera makeDefault={cameraProps.type === "PLAYER"} fov={90} />
    </>
  );
}
