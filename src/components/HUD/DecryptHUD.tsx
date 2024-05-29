import { DialogueHoverText } from "./DialogueHoverText";
import { DialogueText } from "./DialogueText";

export function DecryptHUD({
  pointerLockSelector,
}: {
  pointerLockSelector: string;
}) {
  return (
    <div>
      <DialogueText text={"This is the Decrypt Scene"} />
      <DialogueHoverText text="Press F to Interact" />
    </div>
  );
}
