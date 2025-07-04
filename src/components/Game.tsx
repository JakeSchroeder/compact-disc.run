import { Canvas } from "@react-three/fiber";
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
import { Suspense, useEffect, useState, useCallback, useMemo, memo } from "react";
import { LoadingManager } from "./LoadingManager";
import { useLoadingStore } from "../stores/LoadingStore";
import { Perf } from "r3f-perf";
import { CanvasWrapper } from "./CanvasWrapper";

const ENV_SETTING: "PROD" | "DEBUG" = "PROD";

// Memoized loading completion component
const DoneLoading = memo(() => {
  const setSceneLoading = useLoadingStore((state) => state.setSceneLoading);

  useEffect(() => {
    // Set loading to false immediately once assets are loaded
    setSceneLoading({
      isLoading: false,
    });
  }, [setSceneLoading]);

  return null;
});

// Memoized scene content to prevent unnecessary re-renders
const SceneContent = memo(() => (
  <>
    <DoneLoading />
    <CameraController />
    <Artifacts />
    <Player />
    <PointerControls />
    <Lights />
    {(ENV_SETTING as string) === "DEBUG" && <Perf />}
  </>
));

export function Game() {
  const [viewDPR, setViewDPR] = useState(() => {
    // Initialize DPR based on device capabilities
    const devicePixelRatio = window.devicePixelRatio || 1;
    return Math.min(devicePixelRatio, 2); // Cap at 2 for performance
  });

  // Memoize performance monitor callback
  const handlePerformanceChange = useCallback(({ factor }: { factor: number }) => {
    // More aggressive DPR scaling for better performance
    const newDPR = Math.max(0.5, Math.min(2, 0.5 + 1.5 * factor));
    setViewDPR(Math.round(newDPR * 10) / 10); // Round to 1 decimal
  }, []);

  // Memoized Canvas props to prevent recreation
  const canvasProps = useMemo(
    () => ({
      dpr: viewDPR,
      frameloop: "always" as const,
      className: "w-full h-full relative",
      gl: {
        antialias: false, // Disable antialiasing for better performance
        alpha: false,
        powerPreference: "high-performance" as const,
        stencil: false,
        depth: true,
      },
      shadows: true, // Enable shadows with default settings
    }),
    [viewDPR]
  );

  return (
    <div id="canvas-container" className="w-full h-full relative hidden lg:block">
      <KeyboardControls>
        <HUDController />
        <SoundController />
        <CanvasWrapper {...canvasProps}>
          <LoadingManager />
          <Suspense fallback={null}>
            <PerformanceMonitor onChange={handlePerformanceChange}>
              <EffectComposer autoClear={false}>
                <PostProcessing />
                <SceneContent />
              </EffectComposer>
            </PerformanceMonitor>
          </Suspense>
        </CanvasWrapper>
      </KeyboardControls>
    </div>
  );
}
