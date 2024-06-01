import { LoadingScreen } from "./components/LoadingScreen";
import { Suspense, lazy } from "react";

const Game = lazy(() => import("./components/Game"));

function App() {
  return (
    <>
      <div className="lg:hidden text-center p-4 text-white flex items-center justify-center w-full h-full">
        Get on a laptop or desktop and try again.
      </div>
      <div className="hidden lg:block w-full h-full">
        <Suspense fallback={<LoadingScreen />}>
          <Game />
        </Suspense>
      </div>
    </>
  );
}

export default App;
