import { useSceneStore } from "../../stores/SceneStore";

export const DialogueHoverText = ({ text }: { text: string | undefined }) => {
  const { isHovering } = useSceneStore((state) => state);

  return (
    <>
      {isHovering ? (
        <div className="absolute z-10  text-white bottom-8 left-1/2 -translate-x-1/2">
          {<h3>{text}</h3>}
        </div>
      ) : null}
    </>
  );
};
