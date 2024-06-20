import { useProgress } from "@react-three/drei";
import { useEffect } from "react";
import { useSceneStore } from "../stores/SceneStore";

export function LoadingManager() {
  const { sceneLoading, setSceneLoading } = useSceneStore((state) => state);
  const { progress, item, total, active, errors, loaded } = useProgress();

  useEffect(() => {
    setSceneLoading({
      ...sceneLoading,
      item,
      progress,
    });
    console.log(item);
    console.log(progress);
  }, [item, progress]);

  return <></>;
}
