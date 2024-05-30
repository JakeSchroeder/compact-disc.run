import { CrossHair } from "./CrossHair";
import { InventoryHUD } from "./InventoryHUD";
import { KeypadHUD } from "./KeypadHUD";
import { PlayerHUD } from "./PlayerHUD";
import { StartScreenHUD } from "./StartScreenHUD";

export function HUDController({
  hudProps,
  currentSceneTitle,
}: {
  hudProps: any;
  currentSceneTitle: string;
}) {
  return (
    <>
      {hudProps.type === "StartScreenHUD" && (
        <StartScreenHUD {...hudProps} pointerLockSelector={currentSceneTitle} />
      )}
      {hudProps.type === "PlayerHUD" && (
        <>
          <PlayerHUD {...hudProps} pointerLockSelector={currentSceneTitle} />
          {hudProps.dialogueHoverText && <CrossHair />}
        </>
      )}
      {hudProps.type === "InventoryHUD" && (
        <InventoryHUD
          hudProps={hudProps}
          pointerLockSelector={currentSceneTitle}
        />
      )}
      {hudProps.type === "KeypadHUD" && (
        <KeypadHUD pointerLockSelector={currentSceneTitle} />
      )}
    </>
  );
}
