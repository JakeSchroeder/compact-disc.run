import { DialogueText } from "./DialogueText";
import { CTAButton } from "./CTAButton";

export function IntroHUD({
  pointerLockSelector,
}: {
  pointerLockSelector: string;
}) {
  return (
    <div id={pointerLockSelector}>
      <DialogueText text={"This is the first Scene"} />
      <CTAButton pointerLockId="intro-screen" text="EXIT" />
    </div>
  );
}
