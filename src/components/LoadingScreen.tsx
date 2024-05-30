import { useEffect } from "react";
import { useSceneStore } from "../stores/SceneStore";

export function LoadingScreen() {
  // const setCurrentSceneIndex = useSceneStore(
  //   (state) => state.setCurrentSceneIndex
  // );

  // useEffect(() => {
  //   return () => {
  //     setCurrentSceneIndex(0);
  //   };
  // }, []);

  return (
    <div className="text-white relative space-y-40 w-full h-full flex flex-col justify-center items-center">
      <div className="flex flex-col items-center space-y-6 text-xl">
        <blockquote className="text-center leading-loose max-w-prose">
          “Humans on planet earth used to enjoy walking up to their desks.
          Sitting down for prolonged periods of time. Surfacing the so-called
          inter-webs. However, around the mid 2000s the enjoyment turned to
          stress and fatigue. Historians chalk it up to many tangentially
          related things.”
        </blockquote>
        <div className="h-px w-8 bg-white bg-opacity-30"></div>
        <div className="text-white text-opacity-70">
          - Tired Magazine (2024)
        </div>
      </div>
      <div className="w-full text-xs max-w-lg space-y-3">
        <div className="flex justify-between items-center">
          <div className="text-white text-opacity-70">Loading...</div>
          <div className="text-white text-opacity-35">
            /path/to/path/to/that-one-really-cool-asset.zip
          </div>
        </div>
        <div className="relative w-full h-8 p-1 border-2 border-white border-opacity-55 rouned-sm flex items-center space-x-2">
          <div
            style={{
              width: `10%`,
              transition: "width 1s",
            }}
            className="h-full bg-white flex items-center justify-end"
          ></div>
          <div className="text-sm font-bold">10%</div>
        </div>
      </div>
    </div>
  );
}
