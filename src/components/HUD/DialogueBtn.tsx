import { useCurrentSceneIndex, useSetCurrentSceneIndex } from "../../stores/SceneStore";
import backIcon from "../../assets/svg/back.svg";

export function DialogueBtn({
  text,
  pointerLockSelector,
}: {
  pointerLockSelector?: string | undefined;
  text: string | undefined;
}) {
  const currentSceneIndex = useCurrentSceneIndex();
  const setCurrentSceneIndex = useSetCurrentSceneIndex();
  return (
    <div id={pointerLockSelector} className="absolute bottom-16 right-16  text-white z-50">
      <button
        className="text-sm py-4 px-8 bg-red-700 bg-opacity-70 flex items-center space-x-4"
        onClick={() => {
          setCurrentSceneIndex(currentSceneIndex + 1);
        }}
      >
        <img src={backIcon} alt="Back to room" className="w-5 h-5" />
        <span>{text}</span>
      </button>
    </div>
  );
}
