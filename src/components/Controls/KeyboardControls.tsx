import { KeyboardControls as KeyBoardControls } from "@react-three/drei";
import { useEffect } from "react";
import { useSceneStore } from "../../stores/SceneStore";
import { allScenesList } from "../../lib/sceneUIData";

export function KeyboardControls({ children }: { children: React.ReactNode }) {
  return (
    <KeyBoardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "w", "W"] },
        { name: "backward", keys: ["ArrowDown", "s", "S"] },
        { name: "left", keys: ["ArrowLeft", "a", "A"] },
        { name: "right", keys: ["ArrowRight", "d", "D"] },
        { name: "jump", keys: ["Space"] },
        { name: "zoom", keys: ["Keyctrl"] },
      ]}
    >
      <FKeyPressed />
      {children}
    </KeyBoardControls>
  );
}

function FKeyPressed() {
  const { setCurrentSceneIndex, currentSceneIndex, isHovering } = useSceneStore(
    (state) => state
  );

  const isPlayer = allScenesList[currentSceneIndex].isPlayer;

  function handleKeyPress(e: KeyboardEvent) {
    if ((e.key === "f" || e.key === "F") && isPlayer && isHovering) {
      setCurrentSceneIndex(currentSceneIndex + 1);
    }
  }
  useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [currentSceneIndex, isPlayer, isHovering]);

  return null;
}
