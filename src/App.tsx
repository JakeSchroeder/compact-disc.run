import { lazy } from "react";
import { Analytics } from "@vercel/analytics/react";

const Game = lazy(() => import("./components/Game"));
// const LoadingScreen = lazy(() => import("./components/LoadingScreen"));

function App() {
  return (
    <>
      <div className="lg:hidden text-center p-4 text-white flex items-center justify-center w-full h-full">
        Get on a laptop or desktop and try again.
      </div>
      <div className="hidden lg:block w-full h-full">
        {/* <LoadingScreen /> */}
        <Game />
      </div>
      <Analytics />
    </>
  );
}

export default App;
