import { PointerLockControls } from "@react-three/drei";
import { useEffect, useRef } from "react";

export function PointerControls({
  isPlayer,
  pointerLockSelector,
}: {
  isPlayer: boolean | undefined;
  pointerLockSelector: string | undefined;
}) {
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
        selector={!isPlayer && pointerLockSelector ? pointerLockSelector : undefined}
      />
    </>
  );
}
