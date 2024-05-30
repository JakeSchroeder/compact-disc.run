import { PerspectiveCamera } from "@react-three/drei";

export function CameraController({ cameraProps }: { cameraProps: any }) {
  return (
    <>
      {cameraProps.type === "STARTSCREEN" && (
        <PerspectiveCamera
          makeDefault
          fov={90}
          position={[0.592, 1.746, 0.7]}
          rotation={[-0.529, 0.684, 0.354]}
        />
      )}
      {cameraProps.type === "DESK" && (
        <PerspectiveCamera
          makeDefault
          fov={75}
          position={[-1.37, 1.45, -1.36]}
          rotation={[-0.587, 0.716, 0.406]}
        />
      )}
      {cameraProps.type === "PLAYER" && (
        <PerspectiveCamera makeDefault fov={90} />
      )}
    </>
  );
}
