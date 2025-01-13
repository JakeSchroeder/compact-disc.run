import { useHudProps, useIsPlayer, useSceneTitle } from "../../stores/SceneStore";
import { CrossHair } from "./CrossHair";
import { EndScreenHUD } from "./EndScreenHUD";
import { InventoryHUD } from "./InventoryHUD";
import { KeypadHUD } from "./KeypadHUD";
import { PlayerHUD } from "./PlayerHUD";
import { StartScreenHUD } from "./StartScreenHUD";
import { WASDInstructions } from "./WASDInstructions";

export function HUDController() {
  const hudProps = useHudProps();
  const currentSceneTitle = useSceneTitle();
  const isPlayer = useIsPlayer();

  return (
    <>
      {hudProps.type === "StartScreenHUD" && <StartScreenHUD {...hudProps} pointerLockSelector={currentSceneTitle} />}
      {hudProps.type === "PlayerHUD" && (
        <>
          <PlayerHUD {...hudProps} pointerLockSelector={currentSceneTitle} />
          {hudProps.dialogueHoverText && <CrossHair />}
          {isPlayer && <WASDInstructions />}
        </>
      )}
      {hudProps.type === "InventoryHUD" && <InventoryHUD hudProps={hudProps} pointerLockSelector={currentSceneTitle} />}
      {hudProps.type === "KeypadHUD" && <KeypadHUD pointerLockSelector={currentSceneTitle} />}
      {hudProps.type === "EndScreenHUD" && <EndScreenHUD pointerLockSelector={currentSceneTitle} />}
    </>
  );
}
