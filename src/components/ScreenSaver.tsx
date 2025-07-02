import { Html } from "@react-three/drei";
import { useRef, useMemo } from "react";

export function ScreenSaver() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const setPlayBack = () => {
    videoRef.current!.playbackRate = 0.5;
  };

  // Compensate for device pixel ratio differences between laptop/external monitor
  const adjustedDistanceFactor = useMemo(() => {
    const dpr = window.devicePixelRatio || 1;
    // Base factor adjusted for DPR - this may need tweaking
    return 0.32 / dpr;
  }, []);

  return (
    <Html
      transform
      distanceFactor={0.32}
      position={[-1.767, 1.22, -1.751]}
      rotation={[-0.228, 0.772, 0.16]}
      className="pointer-events-none"
    >
      <div
        className="overflow-hidden"
        style={{
          width: "780px",
          height: "550px",
          // Force consistent rendering regardless of DPR
          imageRendering: "pixelated",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
      >
        <video
          ref={videoRef}
          onCanPlay={setPlayBack}
          autoPlay
          loop
          muted
          src="./videos/screen-saver.mp4"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
      </div>
    </Html>
  );
}
