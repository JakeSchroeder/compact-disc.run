import { Canvas } from "@react-three/fiber";
import { BaseSceneModel } from "./BaseSceneModel";
import { Player } from "./Player";
import { PostProcessing } from "./PostProcessing";
import { Lights } from "./Lights";
import { Artifacts } from "./Artifacts";
import { EffectComposer } from "@react-three/postprocessing";
import { KeyboardControls } from "./Controls/KeyboardControls";
import { PointerControls } from "./Controls/PointerControls";
import { HUDController } from "./HUD/HUDController";
import { CameraController } from "./CameraController";
import { SoundController } from "./SoundController";
import { PerformanceMonitor } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { LoadingManager } from "./LoadingManager";
import { useLoadingStore } from "../stores/LoadingStore";
import { Perf } from "r3f-perf";

const ENV_SETTING: "PROD" | "DEBUG" = "PROD";

export function Game() {
  const [viewDPR, setViewDPR] = useState(1);
  return (
    <div id="canvas-container" className="w-full h-full relative hidden lg:block">
      <KeyboardControls>
        <HUDController />
        <SoundController />
        <Canvas dpr={viewDPR} frameloop="demand" className="w-full h-full relative">
          <LoadingManager />
          <Suspense fallback={null}>
            <DoneLoading />
            <PerformanceMonitor onChange={({ factor }) => setViewDPR(Math.round(0.5 + 1.5 * factor))}>
              <EffectComposer autoClear={false}>
                <PostProcessing />
                <CameraController />
                <Artifacts />
                <Player />
                <BaseSceneModel />
                <PointerControls />
                <Lights />
                {ENV_SETTING === "DEBUG" ? <Perf /> : <></>}
              </EffectComposer>
            </PerformanceMonitor>
          </Suspense>
        </Canvas>
      </KeyboardControls>
    </div>
  );
}

function DoneLoading() {
  const setSceneLoading = useLoadingStore((state) => state.setSceneLoading);

  useEffect(() => {
    setTimeout(() => {
      setSceneLoading({
        isLoading: false,
      });
    }, 2000);
  }, [setSceneLoading]);
  return <></>;
}
