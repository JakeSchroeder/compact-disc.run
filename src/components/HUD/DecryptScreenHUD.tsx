import { DialogueBtn } from "./DialogueBtn";
import { DialogueText } from "./DialogueText";

export function DecryptScreenHUD({
  pointerLockSelector,
}: {
  pointerLockSelector: string;
}) {
  return (
    <div>
      <DialogueText text={"This is the Decrypt Scene"} />
      <DialogueBtn pointerLockSelector={pointerLockSelector} text="EXIT" />
    </div>
  );
}
