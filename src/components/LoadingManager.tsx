import { useProgress, useGLTF } from "@react-three/drei";
import { useEffect, useMemo } from "react";
import { useLoadingStore } from "../stores/LoadingStore";

// Lazy load non-critical assets
const LAZY_ASSETS = ["/images/environment.jpg", "/exrs/blue_photo_studio_2k.exr"];

export function LoadingManager() {
  const { progress, loaded, total } = useProgress();
  const setSceneLoading = useLoadingStore((state) => state.setSceneLoading);

  // Preload the regular Draco model (simpler and more reliable)
  useEffect(() => {
    useGLTF.preload("/models/scene-draco.glb");
  }, []);

  // Memoize loading state updates to prevent excessive re-renders
  const loadingState = useMemo(
    () => ({
      isLoading: progress < 100,
      progress: Math.round(progress),
      item: `${loaded}/${total} assets`,
    }),
    [progress, loaded, total]
  );

  useEffect(() => {
    setSceneLoading(loadingState);
  }, [loadingState, setSceneLoading]);

  // Preload critical assets
  useEffect(() => {
    const preloadAssets = async () => {
      // Preload audio
      const audio = new Audio("/sound/Conoid Tone.mp3");
      audio.preload = "auto";

      // Lazy load non-critical assets after initial load
      if (progress === 100) {
        setTimeout(() => {
          LAZY_ASSETS.forEach((asset) => {
            const link = document.createElement("link");
            link.rel = "prefetch";
            link.href = asset;
            document.head.appendChild(link);
          });
        }, 1000);
      }
    };

    preloadAssets();
  }, [progress]);

  return null;
}
