import { DialogueBtn } from "./DialogueBtn";
import { DialogueText } from "./DialogueText";
import { Inventory } from "./Inventory";

export function InventoryHUD({
  pointerLockSelector,
  hudProps,
}: {
  pointerLockSelector: string;
  hudProps: any;
}) {
  return (
    <div>
      <DialogueBtn
        pointerLockSelector={pointerLockSelector}
        text={hudProps.dialogueBtnText}
      />
      <DialogueText text={"Read the Diary and the next clue."} />
      <Inventory hudProps={hudProps} />
    </div>
  );
}
