import { useEffect, useRef } from "react";
import { useIsPlayer, useSceneTitle } from "../../stores/SceneStore";
import { PointerLockControls } from "@react-three/drei";

const SAFARI_POINTER_SPEED = 5;
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

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
        pointerSpeed={isSafari ? SAFARI_POINTER_SPEED : 1}
        selector={!isPlayer && currentSceneTitle ? currentSceneTitle : undefined}
      />
    </>
  );
}
