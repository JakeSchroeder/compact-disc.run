import { Canvas } from "@react-three/fiber";
import { BaseSceneModel } from "./BaseSceneModel";
import {
  KeyboardControls,
  PerspectiveCamera,
  PointerLockControls,
} from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { allScenesList } from "../lib/sceneUIData";
import { useSceneStore } from "../stores/SceneStore";
import { Player } from "./Player";
import { PostProcessing } from "./PostProcessing";
import { Lights } from "./Lights";
import { CrossHair } from "./HUD/CrossHair";
import { Artifacts } from "./Artifacts";
import { EffectComposer } from "@react-three/postprocessing";

export function Game() {
  const currentSceneIndex = useSceneStore((state) => state.currentSceneIndex);
  const HUD = allScenesList[currentSceneIndex].HUD;
  // const Artifact = allScenesList[currentSceneIndex].artifact;
  return (
    <div id="canvas-container" className="w-full h-full relative">
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "w", "W"] },
          { name: "backward", keys: ["ArrowDown", "s", "S"] },
          { name: "left", keys: ["ArrowLeft", "a", "A"] },
          { name: "right", keys: ["ArrowRight", "d", "D"] },
          { name: "jump", keys: ["Space"] },
          { name: "zoom", keys: ["Keyctrl"] },
        ]}
      >
        <HUD
          pointerLockSelector={
            allScenesList[currentSceneIndex].pointerLockSelector
          }
        />
        {allScenesList[currentSceneIndex].isPlayer && <CrossHair />}
        <Canvas className="w-full h-full relative">
          <EffectComposer autoClear={false}>
            <PostProcessing />
            <Physics gravity={[0, -30, 0]}>
              <PerspectiveCamera
                {...allScenesList[currentSceneIndex].cameraProps}
              />
              <Artifacts currentSceneIndex={currentSceneIndex} />
              <BaseSceneModel />
              {allScenesList[currentSceneIndex].isPlayer && <Player />}
            </Physics>
            <PointerLockControls
              selector={
                allScenesList[currentSceneIndex].isPointerLocked === true
                  ? undefined
                  : allScenesList[currentSceneIndex].title
              }
            />
            <Lights />
          </EffectComposer>
        </Canvas>
      </KeyboardControls>
    </div>
  );
}
