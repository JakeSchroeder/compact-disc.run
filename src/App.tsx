import { Game } from "./components/Game";
import { LoadingScreen } from "./components/LoadingScreen";
import { Suspense } from "react";

// const Game = lazy(() => import("./components/Game"));

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Game />
    </Suspense>
  );
}

export default App;
