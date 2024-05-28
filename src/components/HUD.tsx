import { useSceneStore } from "../stores/SceneStore";
import { TScene, allScenesList } from "../lib/sceneUIData";
import { ReadMe } from "./HUD/ReadMe";

export function HUD() {
  const { currentSceneIndex } = useSceneStore((state) => state);
  return (
    <>
      {allScenesList.map((scene, index) => (
        <>{currentSceneIndex === index && <HUDScene scene={scene} />}</>
      ))}
    </>
  );
}

function HUDScene({ scene }: { scene: TScene }) {
  return (
    <div className="w-full h-full relative">{scene.readme && <ReadMe />}</div>
  );
}
