import { forwardRef, ComponentRef } from "react";
import { PointerLockControls as Base } from "@react-three/drei";

type PointerLockControlsRef = ComponentRef<typeof Base>;

interface NormalisedPointerLockControlsProps {
  [key: string]: unknown;
  selector?: string;
}

const DEFAULT_POINTER_SPEED = 0.5;
const SAFARI_POINTER_SPEED = 5;
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const pointerSpeed = isSafari ? SAFARI_POINTER_SPEED : DEFAULT_POINTER_SPEED;

export const NormalisedPointerLockControls = forwardRef<PointerLockControlsRef, NormalisedPointerLockControlsProps>(
  (props, forwardedRef) => {
    return <Base ref={forwardedRef} pointerSpeed={pointerSpeed} {...props} />;
  }
);
