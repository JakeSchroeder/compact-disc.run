import { DialogueBtn } from "./DialogueBtn";
import { DialogueText } from "./DialogueText";
import { Inventory } from "./Inventory";

export function InventoryHUD({
  pointerLockSelector,
  inventoryHUDProps,
}: {
  inventoryHUDProps: any;
  pointerLockSelector: string;
}) {
  return (
    <div>
      <DialogueBtn
        pointerLockSelector={pointerLockSelector}
        text="Exit Diary"
      />
      <DialogueText text={"This is the INVENTORY Scene"} />
      <Inventory inventoryHUDProps={inventoryHUDProps} />
    </div>
  );
}
