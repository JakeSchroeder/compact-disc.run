import { useRef, useCallback } from "react";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import * as THREE from "three";
import { useIsPlayer } from "../stores/SceneStore";

const SPEED = 2.3;
const PLAYER_HEIGHT = 1.15;
const JUMP_FORCE = 0.1;
const GRAVITY = 0.005;
const BOUNDS = {
  minX: -2,
  maxX: 2,
  minZ: -2,
  maxZ: 2,
};

// Pre-allocate vectors to avoid GC pressure
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();
const newPosition = new THREE.Vector3();

let frameCount = 0;
const UPDATE_FREQUENCY = 2; // Update every 2nd frame for 30fps physics

export function Player() {
  const isPlayer = useIsPlayer();

  const position = useRef<THREE.Vector3>(new THREE.Vector3(0.592, PLAYER_HEIGHT / 1.75, 0.7));
  const velocity = useRef<number>(0);
  const isJumping = useRef<boolean>(false);
  const lastCameraUpdate = useRef<THREE.Vector3>(new THREE.Vector3());
  const [_, getKeyboard] = useKeyboardControls();

  // Memoize the frame update to prevent recreation
  const updatePlayer = useCallback(
    (camera: THREE.Camera) => {
      frameCount++;

      // Throttle physics updates for better performance
      if (frameCount % UPDATE_FREQUENCY !== 0) return;

      const { forward, backward, left, right, jump } = getKeyboard();

      // Jump logic
      if (jump && !isJumping.current) {
        velocity.current = JUMP_FORCE;
        isJumping.current = true;
      }

      // Gravity and vertical movement
      velocity.current -= GRAVITY;
      position.current.y += velocity.current;

      // Ground collision
      if (position.current.y <= PLAYER_HEIGHT / 2) {
        position.current.y = PLAYER_HEIGHT / 2;
        velocity.current = 0;
        isJumping.current = false;
      }

      // Only calculate movement if keys are pressed
      const hasMovement = forward || backward || left || right;
      if (hasMovement) {
        frontVector.set(0, 0, (backward ? 1 : 0) - (forward ? 1 : 0));
        sideVector.set((left ? 1 : 0) - (right ? 1 : 0), 0, 0);
        direction
          .subVectors(frontVector, sideVector)
          .normalize()
          .multiplyScalar(SPEED / 60)
          .applyEuler(camera.rotation);

        direction.y = 0;

        // Apply bounds clamping
        const newX = THREE.MathUtils.clamp(position.current.x + direction.x, BOUNDS.minX, BOUNDS.maxX);
        const newZ = THREE.MathUtils.clamp(position.current.z + direction.z, BOUNDS.minZ, BOUNDS.maxZ);

        position.current.setX(newX);
        position.current.setZ(newZ);
      }

      // Update camera position
      newPosition.set(position.current.x, position.current.y + PLAYER_HEIGHT, position.current.z);
      camera.position.copy(newPosition);
      lastCameraUpdate.current.copy(newPosition);
    },
    [getKeyboard]
  );

  useFrame(({ camera }) => {
    if (!isPlayer) return;
    updatePlayer(camera);
  });

  return null;
}
