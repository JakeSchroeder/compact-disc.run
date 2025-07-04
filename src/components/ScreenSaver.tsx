import { Html } from "@react-three/drei";
import { useRef } from "react";

export function ScreenSaver() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const setPlayBack = () => {
    videoRef.current!.playbackRate = 0.5;
  };

  return (
    <Html
      transform
      distanceFactor={0.32}
      position={[-1.767, 1.22, -1.751]}
      rotation={[-0.228, 0.772, 0.16]}
      className="pointer-events-none "
    >
      <div className="relative" style={{ width: 780, height: 550, backfaceVisibility: "hidden" }}>
        <video
          ref={videoRef}
          onCanPlay={setPlayBack}
          autoPlay
          loop
          muted
          src="./videos/screen-saver.mp4"
          className="absolute inset-0 w-full h-full opacity-50"
        />
      </div>
    </Html>
  );
}
