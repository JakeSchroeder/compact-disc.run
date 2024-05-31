import { useSceneStore } from "../../stores/SceneStore";
import backIcon from "../../assets/svg/back.svg";

export function DialogueBtn({
  text,
  pointerLockSelector,
}: {
  pointerLockSelector?: string | undefined;
  text: string | undefined;
}) {
  const { currentSceneIndex, setCurrentSceneIndex } = useSceneStore(
    (state) => state
  );
  return (
    <div
      id={pointerLockSelector}
      className="absolute top-8 left-8 z-10 text-white"
    >
      <button
        className="text-sm py-4 px-8 bg-black bg-opacity-70 flex items-center space-x-4"
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
