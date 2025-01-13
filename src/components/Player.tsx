import { useRef } from "react";
import { invalidate, useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import * as THREE from "three";
import { useIsPlayer } from "../stores/SceneStore";

const SPEED = 2.3;
const PLAYER_HEIGHT = 1.1;
const JUMP_FORCE = 0.1;
const GRAVITY = 0.003;
const BOUNDS = {
  minX: -2,
  maxX: 2,
  minZ: -2,
  maxZ: 2,
};

const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();

export function Player() {
  const isPlayer = useIsPlayer();

  const position = useRef<THREE.Vector3>(new THREE.Vector3(0, PLAYER_HEIGHT / 2, 0));
  const velocity = useRef<number>(0);
  const isJumping = useRef<boolean>(false);
  const [_, getKeyboard] = useKeyboardControls();

  useFrame(({ camera }) => {
    if (!isPlayer) return;
    const { forward, backward, left, right, jump } = getKeyboard();

    if (jump && !isJumping.current) {
      velocity.current = JUMP_FORCE;
      isJumping.current = true;
    }

    velocity.current -= GRAVITY;
    position.current.y += velocity.current;

    if (position.current.y <= PLAYER_HEIGHT / 2) {
      position.current.y = PLAYER_HEIGHT / 2;
      velocity.current = 0;
      isJumping.current = false;
    }

    frontVector.set(0, 0, (backward ? 1 : 0) - (forward ? 1 : 0));
    sideVector.set((left ? 1 : 0) - (right ? 1 : 0), 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED / 60)
      .applyEuler(camera.rotation);

    direction.y = 0;

    const newX = THREE.MathUtils.clamp(position.current.x + direction.x, BOUNDS.minX, BOUNDS.maxX);
    const newZ = THREE.MathUtils.clamp(position.current.z + direction.z, BOUNDS.minZ, BOUNDS.maxZ);

    position.current.setX(newX);
    position.current.setZ(newZ);

    camera.position.set(position.current.x, position.current.y + PLAYER_HEIGHT, position.current.z);

    invalidate();
  });

  return null;
}
