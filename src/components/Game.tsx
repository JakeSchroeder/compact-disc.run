import { Canvas } from "@react-three/fiber";
import { BaseSceneModel } from "./BaseSceneModel";
import { Physics } from "@react-three/rapier";
import { useSceneStore } from "../stores/SceneStore";
import { Player } from "./Player";
import { PostProcessing } from "./PostProcessing";
import { Lights } from "./Lights";
import { Artifacts } from "./Artifacts";
import { EffectComposer } from "@react-three/postprocessing";
import { KeyboardControls } from "./Controls/KeyboardControls";
import { PointerControls } from "./Controls/PointerControls";
import { HUDController } from "./HUD/HUDController";
import { CameraController } from "./CameraController";
import { allScenesList } from "../lib/sceneUIData";
import { SoundController } from "./SoundController";
import { PerformanceMonitor } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import round from "lodash/round";

export default function Game() {
  const { currentSceneIndex, setIsHovering, shouldPlaySound } = useSceneStore((state) => state);
  const { hudProps, cameraProps, isPlayer, title: currentSceneTitle } = allScenesList[currentSceneIndex];

  const [viewDPR, setViewDPR] = useState(1);
  return (
    <div id="canvas-container" className="w-full h-full relative hidden lg:block">
      <KeyboardControls>
        <HUDController hudProps={hudProps} currentSceneTitle={currentSceneTitle} isPlayer={isPlayer} />
        {shouldPlaySound && <SoundController />}
        <Canvas dpr={viewDPR} frameloop="demand" className="w-full h-full relative">
          <Suspense fallback={null}>
            <PerformanceMonitor onChange={({ factor }) => setViewDPR(round(0.5 + 1.5 * factor, 1))}>
              <EffectComposer autoClear={false}>
                <PostProcessing />
                <Physics gravity={[0, -30, 0]}>
                  <CameraController cameraProps={cameraProps} />
                  <Artifacts
                    currentSceneTitle={currentSceneTitle}
                    setIsHovering={setIsHovering}
                    currentSceneIndex={currentSceneIndex}
                  />
                  <Player isPlayer={isPlayer} />
                  <BaseSceneModel />
                </Physics>
                <PointerControls isPlayer={isPlayer} pointerLockSelector={currentSceneTitle} />
                <Lights />
              </EffectComposer>
            </PerformanceMonitor>
            <DoneLoading />
          </Suspense>
        </Canvas>
      </KeyboardControls>
    </div>
  );
}

function DoneLoading() {
  useEffect(() => {
    document.getElementById("loading-screen")?.remove();
  }, []);

  return <></>;
}
