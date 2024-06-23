import { useEffect } from "react";
import { useSceneStore } from "../stores/SceneStore";

export function LoadingScreen() {
  const sceneLoading = useSceneStore((state) => state.sceneLoading);
  //When the JS is parsed and exec'd this will
  //mount so we need to remove the index.html SSR'd loading screen
  useEffect(() => {
    const loadingScreenEl = document.getElementById("loading-screen");
    if (loadingScreenEl) {
      loadingScreenEl.remove();
    }
  }, []);

  return (
    <>
      {sceneLoading.isLoading ? (
        <div className="font-sans text-white relative w-full h-full flex flex-col justify-center items-center space-y-6">
          <div className="flex flex-col items-center">
            <blockquote className="m-[28px_40px] text-[28px] text-center leading-[44px] max-w-[52ch]">
              “Humans on planet earth used to enjoy walking up to their desks.
              Sitting down for prolonged periods of time. Surfing the so-called
              inter-webs. However, around the mid 2000s the enjoyment turned to
              stress and fatigue. Historians chalk it up to many tangentially
              related things.”
            </blockquote>
            <div className="text-[20px] text-white text-opacity-70">
              - Tired Magazine (2024)
            </div>
          </div>
          <div className="w-full text-xs max-w-lg space-y-3 pt-20">
            <div className="flex justify-between items-center">
              <div className="text-white text-opacity-70">Loading...</div>
              <div className="text-white text-opacity-35">
                {sceneLoading.item}
              </div>
            </div>
            <div className="relative w-full h-8 p-1 border-2 border-white border-opacity-55 rouned-sm flex items-center space-x-2">
              <div
                style={{
                  width: `${sceneLoading.progress}%`,
                }}
                className="h-full bg-white flex items-center justify-end"
              ></div>
              <div className="text-sm font-bold text-white">
                {sceneLoading.progress ? sceneLoading.progress : 1}%
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
