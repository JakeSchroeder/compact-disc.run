import { useProgress } from "@react-three/drei";
import { useEffect } from "react";
import { useLoadingStore } from "../stores/LoadingStore";

export function LoadingManager() {
  const { sceneLoading, setSceneLoading } = useLoadingStore((state) => state);
  const { progress, item } = useProgress();

  useEffect(() => {
    setSceneLoading({
      ...sceneLoading,
      item,
      progress: Math.round(progress),
    });
  }, [item, progress]);

  return <></>;
}
