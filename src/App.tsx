import { lazy } from "react";
import { Analytics } from "@vercel/analytics/react";
import { LoadingScreen } from "./components/LoadingScreen";
import { useSceneStore } from "./stores/SceneStore";

const Game = lazy(() => import("./components/Game"));

function App() {
  const isSceneLoading = useSceneStore((state) => state.isSceneLoading);

  return (
    <>
      <div className="lg:hidden text-center p-4 text-white flex items-center justify-center w-full h-full">
        Get on a laptop or desktop and try again.
      </div>
      <div className="hidden lg:block w-full h-full">
        {isSceneLoading && <LoadingScreen />}
        <Game />
      </div>
      <Analytics />
    </>
  );
}

export default App;
