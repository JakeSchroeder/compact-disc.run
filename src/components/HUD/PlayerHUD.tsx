import { DialogueBtn } from "./DialogueBtn";
import { DialogueHoverText } from "./DialogueHoverText";
import { DialogueText } from "./DialogueText";

export function PlayerHUD({
  dialogueHoverText,
  dialogueText,
  dialogueBtnText,
  pointerLockSelector,
}: {
  dialogueHoverText?: string;
  dialogueText?: string;
  dialogueBtnText?: string;
  pointerLockSelector?: string;
}) {
  return (
    <div>
      <DialogueHoverText text={dialogueHoverText} />
      <DialogueText text={dialogueText} />
      {dialogueBtnText && (
        <DialogueBtn
          text={dialogueBtnText}
          pointerLockSelector={pointerLockSelector}
        />
      )}
    </div>
  );
}
