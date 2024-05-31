import { LoadingScreen } from "./components/LoadingScreen";
import { Suspense } from "react";
import Game from "./components/Game";
// const Game = lazy(() => import("./components/Game"));

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Game />
    </Suspense>
  );
}

export default App;
