import { useCurrentSceneIndex, useSetCurrentSceneIndex } from "../../stores/SceneStore";

export function InstructionsHUD({ pointerLockSelector }: { pointerLockSelector: string; hudProps?: any }) {
  const currentSceneIndex = useCurrentSceneIndex();
  const setCurrentSceneIndex = useSetCurrentSceneIndex();

  return (
    <div className="absolute inset-0 w-full h-full z-50 flex justify-center items-center">
      <div className="relative">
        <button
          id={pointerLockSelector}
          className="w-8 h-8 bg-red-700 text-white flex items-center justify-center absolute -top-4 -right-4 border border-red-950"
          onClick={() => {
            setCurrentSceneIndex(currentSceneIndex + 1);
          }}
        >
          x
        </button>
        <img className="select-none pointer-events-none" src="/images/folder.png" width={578.4} height={724.8} />
      </div>
    </div>
  );
}
