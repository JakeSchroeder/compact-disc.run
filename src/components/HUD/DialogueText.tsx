import { ReactNode } from "react";

export function DialogueText({ text }: { text: string | ReactNode }) {
  return (
    <div
      className={`text-[yellow] text-center whitespace-pre-wrap h-auto py-4 px-8  bg-black bg-opacity-70 left-1/2 -translate-x-1/2 top-8 absolute  text-sm  z-10`}
    >
      {text}
    </div>
  );
}
