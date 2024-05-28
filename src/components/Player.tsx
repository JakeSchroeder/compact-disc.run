import * as THREE from "three";
import * as RAPIER from "@dimforge/rapier3d-compat";
import { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import {
  CapsuleCollider,
  RapierRigidBody,
  RigidBody,
  useRapier,
} from "@react-three/rapier";

const SPEED = 4;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();

export function Player() {
  const ref = useRef<RapierRigidBody>(null);
  const rapier = useRapier();
  const { camera } = useThree();
  const [_, getKeyboard] = useKeyboardControls();
  useFrame(() => {
    const { forward, backward, left, right, jump } = getKeyboard();
    // Not working yet

    if (ref.current) {
      const velocity = ref.current.linvel();
      // update camera
      camera.position.set(
        ref.current.translation().x,
        ref.current.translation().y + 0.5,
        ref.current.translation().z
      );

      // movement
      frontVector.set(0, 0, (backward ? 1 : 0) - (forward ? 1 : 0));
      sideVector.set((left ? 1 : 0) - (right ? 1 : 0), 0, 0);
      direction
        .subVectors(frontVector, sideVector)
        .normalize()
        .multiplyScalar(SPEED)
        .applyEuler(camera.rotation);
      ref.current.setLinvel(
        { x: direction.x, y: velocity.y, z: direction.z },
        true
      );
      // jumping
      const world = rapier.world;
      //@ts-ignore hehe
      const ray = world.castRay(
        new RAPIER.Ray(ref.current.translation(), { x: 0, y: -1, z: 0 })
      );
      const grounded = ray && ray.collider && Math.abs(ray.toi) <= 1.75;
      if (jump && grounded) ref.current.setLinvel({ x: 0, y: 7.5, z: 0 }, true);
    }
  });
  return (
    <>
      <RigidBody
        ref={ref}
        colliders={false}
        mass={0}
        type="dynamic"
        position={[0, 2, 0]}
        enabledRotations={[false, false, false]}
      >
        <CapsuleCollider args={[0.75, 0.5]} />
      </RigidBody>
    </>
  );
}
