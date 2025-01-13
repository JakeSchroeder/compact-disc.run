import { createRef, Fragment, RefObject, useMemo, useRef, useState } from "react";
import { Outline } from "@react-three/postprocessing";
import { BlendFunction, KernelSize } from "postprocessing";
import { allScenesList } from "../lib/sceneUIData";
import { MacOS } from "./MacOS";
import { ScreenSaver } from "./ScreenSaver";
import { useCurrentSceneIndex, useSceneTitle, useSetIsHovering } from "../stores/SceneStore";
import { useBaseSceneModel } from "./useBaseSceneModel";

const htmlComponents = {
  screensaver: <ScreenSaver />,
  macos_intro: <MacOS sceneTitle="INTRO" />,
  macos_decrypt: <MacOS sceneTitle="DECRYPT" />,
};

export function Artifacts() {
  const currentSceneTitle = useSceneTitle();
  const setIsHovering = useSetIsHovering();
  const currentSceneIndex = useCurrentSceneIndex();

  const { nodes, materials } = useBaseSceneModel();

  const nodeList = useMemo(
    () =>
      allScenesList.map((scene) => ({
        sceneTitle: scene.title,
        modelName: scene.model,
        ref: createRef<any>(), // Create stable refs
        //@ts-ignore
        geometry: scene.model && nodes[scene.model].geometry,
        //@ts-ignore
        html: scene.html && htmlComponents[scene.html],
      })),
    [nodes, htmlComponents]
  );

  const [currentHoveredArtifact, setCurrentHoveredArtifact] = useState<RefObject<any> | undefined>(undefined);

  return (
    <>
      <Outline
        selection={currentHoveredArtifact}
        blendFunction={BlendFunction.SCREEN}
        edgeStrength={20} // the edge strength
        pulseSpeed={0.0} // a pulse speed. A value of zero disables the pulse effect
        visibleEdgeColor={0xff2400} // the color of visible edges
        kernelSize={KernelSize.LARGE} // blur kernel size
        blur={false} // whether the outline should be blurred
        xRay={false} // indicates whether X-Ray outlines are enabled
      />
      {nodeList.map((node, index) => (
        <Fragment key={index}>
          {node.html && currentSceneTitle === node.sceneTitle && node.html}
          {node.geometry && (
            <mesh
              visible={node.modelName === "diary" && currentSceneIndex > 2 ? false : true}
              ref={node.ref}
              //@ts-ignore
              geometry={node.geometry}
              material={materials.environment}
              onPointerOver={() => {
                if (currentSceneTitle === node.sceneTitle && !node.html) {
                  setCurrentHoveredArtifact(node.ref);
                  setIsHovering(true);
                }
              }}
              onPointerLeave={() => {
                setCurrentHoveredArtifact(undefined);
                setIsHovering(false);
              }}
            />
          )}
        </Fragment>
      ))}
    </>
  );
}
