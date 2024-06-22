import { useProgress } from "@react-three/drei";
import { useEffect } from "react";
import { useSceneStore } from "../stores/SceneStore";
import round from "lodash/round";

export function LoadingManager() {
  //This seems very gross to me, like we should probably
  //tie this in somewhere else for better seperation of concerns.
  //The issue is we need to seperately control the callback for when
  //The suspense is done mounting.
  const { sceneLoading, setSceneLoading } = useSceneStore((state) => state);
  const { progress, item } = useProgress();

  useEffect(() => {
    console.log("progress", progress);
    setSceneLoading({
      ...sceneLoading,
      item,
      progress: round(progress),
    });
  }, [item, progress]);

  return <></>;
}
