import { Vignette } from "@react-three/postprocessing";

export function PostProcessing() {
  return (
    <>
      <Vignette eskil={false} offset={0.0005} darkness={1.1} />
    </>
  );
}
