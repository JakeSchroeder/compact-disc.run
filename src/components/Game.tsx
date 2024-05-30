import { Canvas } from "@react-three/fiber";
import { BaseSceneModel } from "./BaseSceneModel";
import { Physics } from "@react-three/rapier";
import { allScenesList } from "../lib/sceneUIData";
import { useSceneStore } from "../stores/SceneStore";
import { Player } from "./Player";
import { PostProcessing } from "./PostProcessing";
import { Lights } from "./Lights";
import { Artifacts } from "./Artifacts";
import { EffectComposer } from "@react-three/postprocessing";
import { Controls } from "./Controls/Controls";
import { PointerControls } from "./Controls/PointerControls";
import { HUDController } from "./HUD/HUDController";
import { CameraController } from "./CameraController";

export default function Game() {
  const { currentSceneIndex, setIsHovering } = useSceneStore((state) => state);
  const {
    hudProps,
    cameraProps,
    isPlayer,
    title: currentSceneTitle,
  } = allScenesList[currentSceneIndex];

  return (
    <div id="canvas-container" className="w-full h-full relative">
      <Controls>
        <HUDController
          hudProps={hudProps}
          currentSceneTitle={currentSceneTitle}
        />
        <Canvas className="w-full h-full relative">
          <EffectComposer autoClear={false}>
            <PostProcessing />
            <Physics gravity={[0, -30, 0]}>
              <CameraController cameraProps={cameraProps} />
              <Artifacts
                currentSceneTitle={currentSceneTitle}
                setIsHovering={setIsHovering}
                currentSceneIndex={currentSceneIndex}
              />

              {isPlayer && <Player />}
              <BaseSceneModel />
            </Physics>
            <PointerControls
              isPlayer={isPlayer}
              pointerLockSelector={currentSceneTitle}
            />
            <Lights />
          </EffectComposer>
        </Canvas>
      </Controls>
    </div>
  );
}
