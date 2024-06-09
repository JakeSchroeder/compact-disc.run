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
      {/* <div className="absoulte inset-0 w-full h-full z-[999]" id="player-overlay" /> */}
      <DialogueHoverText text={dialogueHoverText} />
      <DialogueText text={dialogueText} />
      {dialogueBtnText && <DialogueBtn text={dialogueBtnText} pointerLockSelector={pointerLockSelector} />}
    </div>
  );
}
