import { PointerLockControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useIsPlayer, useSceneTitle } from "../../stores/SceneStore";

export function PointerControls() {
  const isPlayer = useIsPlayer();
  const currentSceneTitle = useSceneTitle();

  const pointerControlsRef = useRef<any>(null);
  useEffect(() => {
    if (pointerControlsRef.current) {
      if (isPlayer) {
        pointerControlsRef.current.lock();
      }
      if (!isPlayer) {
        pointerControlsRef.current.unlock();
      }
    }
  }, [isPlayer]);

  return (
    <>
      <PointerLockControls
        ref={pointerControlsRef}
        selector={!isPlayer && currentSceneTitle ? currentSceneTitle : undefined}
      />
    </>
  );
}
