import { useEffect, useState } from "react";
import { useSceneStore } from "../../stores/SceneStore";

export function KeypadHUD({
  pointerLockSelector,
}: {
  pointerLockSelector: string;
}) {
  const [code, setCode] = useState("");
  const [currentSceneIndex, setCureentSceneIndex] = useSceneStore((state) => [
    state.currentSceneIndex,
    state.setCurrentSceneIndex,
  ]);

  useEffect(() => {
    if (code === "1999") {
      setCureentSceneIndex(currentSceneIndex + 1);
    }
  }, [code]);

  return (
    <div
      id={pointerLockSelector}
      className="absolute w-[450px] h-[500px] bg-black bg-opacity-80 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
    >
      <input
        className="w-full border h-32 text-5xl border-white bg-black text-white text-center tracking-widest"
        type="number"
        value={code.length > 4 ? code.slice(0, 4) : code}
        onChange={(e) => {
          setCode(e.target.value);
        }}
      ></input>
      <div className="h-full grid grid-cols-3">
        {Array.from({ length: 9 }, (_, i) => (
          <button
            onClick={() => {
              setCode(`${code}${i + 1}`);
            }}
            key={i}
            className="bg-black text-white text-5xl border border-white"
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
