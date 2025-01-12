import { useEffect } from "react";
import { useLoadingStore } from "../stores/LoadingStore";

export function LoadingScreen() {
  const sceneLoading = useLoadingStore((state) => state.sceneLoading);
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
            <img src="/images/cd-loading.png" width="400px" height="270.64px" />
          </div>
          <div className="w-full text-xs max-w-lg space-y-3 pt-20">
            <h1 className="text-lg text-center">Jake's Compact Disc</h1>
            <div className="flex justify-between items-center">
              <div className="text-white text-opacity-70">Loading...</div>
              <div className="text-white text-opacity-35">{sceneLoading.item}</div>
            </div>
            <div className="relative w-full h-8 p-1 border-2 border-white border-opacity-55 rouned-sm flex items-center space-x-2">
              <div
                style={{
                  width: `${sceneLoading.progress}%`,
                }}
                className="h-full bg-white flex items-center justify-end"
              ></div>
              <div className="text-sm font-bold text-white">{sceneLoading.progress ? sceneLoading.progress : 1}%</div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
