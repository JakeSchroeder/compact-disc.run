import { PerspectiveCamera } from "@react-three/drei";
import { useCameraProps } from "../stores/SceneStore";
import { useFrame } from "@react-three/fiber";

export function CameraController() {
  const cameraProps = useCameraProps();

  // Ensure camera matrices are always updated for HTML positioning
  // This fixes cross-browser HTML positioning issues
  useFrame(({ camera }) => {
    camera.updateMatrixWorld(true); // Force update with parents
  });

  return (
    <>
      <PerspectiveCamera
        makeDefault={cameraProps.type === "DESK"}
        fov={75}
        near={0.1}
        far={10}
        position={[-1.37, 1.45, -1.36]}
        rotation={[-0.587, 0.716, 0.406]}
      />
      <PerspectiveCamera
        makeDefault={
          cameraProps.type === "STARTSCREEN" || cameraProps.type === "INSTRUCTIONS" || cameraProps.type === "PLAYER"
        }
        fov={75}
        near={0.1}
        far={10}
        position={[0.592, 1.75, 0.7]}
        rotation={[-0.529, 0.684, 0.354]}
      />
    </>
  );
}
