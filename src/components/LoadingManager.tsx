import { useProgress } from "@react-three/drei";
import { useEffect } from "react";
import { useSceneStore } from "../stores/SceneStore";

export function LoadingManager() {
  //This seems very gross to me, like we should probably
  //tie this in somewhere else for better seperation of concerns.
  //The issue is we need to seperately control the callback for when
  //The suspense is done mounting.
  const { sceneLoading, setSceneLoading } = useSceneStore((state) => state);
  const { progress, item } = useProgress();

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
