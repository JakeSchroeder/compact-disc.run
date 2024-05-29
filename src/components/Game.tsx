import { Canvas } from "@react-three/fiber";
import { BaseSceneModel } from "./BaseSceneModel";
import { PerspectiveCamera } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { allScenesList } from "../lib/sceneUIData";
import { useSceneStore } from "../stores/SceneStore";
import { Player } from "./Player";
import { PostProcessing } from "./PostProcessing";
import { Lights } from "./Lights";
import { CrossHair } from "./HUD/CrossHair";
import { Artifacts } from "./Artifacts";
import { EffectComposer } from "@react-three/postprocessing";
import { Controls } from "./Controls/Controls";
import { PointerControls } from "./Controls/PointerControls";

export function Game() {
  const { currentSceneIndex, setIsHovering } = useSceneStore((state) => state);
  const { HUD, inventoryHUDProps, pointerLockSelector, cameraProps, isPlayer } =
    allScenesList[currentSceneIndex];

  return (
    <div id="canvas-container" className="w-full h-full relative">
      <Controls>
        <HUD
          inventoryHUDProps={inventoryHUDProps}
          pointerLockSelector={pointerLockSelector}
        />
        {isPlayer && <CrossHair />}
        <Canvas className="w-full h-full relative">
          <EffectComposer autoClear={false}>
            <PostProcessing />
            <Physics gravity={[0, -30, 0]}>
              <PerspectiveCamera makeDefault {...cameraProps} />
              <Artifacts
                setIsHovering={setIsHovering}
                currentSceneIndex={currentSceneIndex}
              />

              {isPlayer && <Player />}
              <BaseSceneModel />
            </Physics>
            <PointerControls
              isPlayer={isPlayer}
              pointerLockSelector={pointerLockSelector}
            />
            <Lights />
          </EffectComposer>
        </Canvas>
      </Controls>
    </div>
  );
}
