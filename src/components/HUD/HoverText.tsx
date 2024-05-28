export const HoverText = ({
  isHovering,
  text,
}: {
  isHovering: boolean;
  text: string | undefined;
}) => {
  return (
    <div className="bottom-8 left-1/2 -translate-x-1/2">
      {isHovering && <h3>{text}</h3>}
    </div>
  );
};
