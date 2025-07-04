import { Canvas, useThree, CanvasProps } from "@react-three/fiber";
import { FC, ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  children: ReactNode;
  canvasProps?: CanvasProps;
};

const CanvasWrapper: FC<Props> = ({ children, canvasProps = {} }) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({
        width: width % 2 === 0 ? width : width - 1,
        height: height % 2 === 0 ? height : height - 1,
      });
      //   setSize({
      //     width: Math.round(width % 2 === 0 ? width - 1 : width),
      //     height: Math.round(height % 2 !== 0 ? height - 1 : height),
      //   });
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100vw",
        height: "100dvh",
        overflow: "hidden",
      }}
    >
      <Canvas style={{ width: size.width, height: size.height }} {...canvasProps}>
        <InvalidateOnResize />
        {children}
      </Canvas>
    </div>
  );
};

export { CanvasWrapper };

const InvalidateOnResize = () => {
  const { invalidate } = useThree();

  useEffect(() => {
    const handle = () => invalidate();
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, [invalidate]);

  return null;
};
