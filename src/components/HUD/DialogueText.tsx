export function DialogueText({ text }: { text: string }) {
  return (
    <div
      className={`text-[yellow] whitespace-pre-wrap h-auto py-4 px-8  bg-black bg-opacity-70 right-8 top-8 absolute  text-sm  z-10`}
    >
      {text}
    </div>
  );
}
