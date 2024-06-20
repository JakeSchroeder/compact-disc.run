import { useProgress } from "@react-three/drei";
import { ReactNode, Suspense, useEffect } from "react";
import { useSceneStore } from "../stores/SceneStore";

export function SmartSuspense({ children, onLoaded }: { children: ReactNode; onLoaded: () => void }) {
  // const { sceneLoading, setSceneLoading } = useSceneStore((state) => state);

  const { progress, item, total, active, errors, loaded } = useProgress();

  useEffect(() => {
    // setSceneLoading({
    //   ...sceneLoading,
    //   item,
    //   progress
    // })

    console.log(active);
  }, [active]);

  return (
    <Suspense fallback={null}>
      {children}
      {/* <DoneLoading onLoaded={onLoaded} /> */}
    </Suspense>
  );
}

function DoneLoading({ onLoaded }: { onLoaded: () => void }) {
  useEffect(() => {
    onLoaded();
  }, []);

  return <></>;
}
