import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { KTX2Loader } from "three/examples/jsm/Addons.js";
import { Fragment, useRef, useState } from "react";
import { Outline } from "@react-three/postprocessing";
import { BlendFunction, KernelSize } from "postprocessing";
import { allScenesList } from "../lib/sceneUIData";
import { MacOS } from "./MacOS";
import { ScreenSaver } from "./ScreenSaver";

export function Artifacts({
  currentSceneTitle,
  setIsHovering,
  currentSceneIndex,
}: {
  currentSceneTitle: string;
  currentSceneIndex: number;
  setIsHovering: (setIsHovering: boolean) => void;
}) {
  const { gl } = useThree();

  const { nodes, materials } = useGLTF("/models/scene-draco-ktx.glb", true, false, (loader) => {
    const ktx2Loader = new KTX2Loader().setTranscoderPath(`/compression/`);
    //@ts-ignore
    loader.setKTX2Loader(ktx2Loader.detectSupport(gl));
  });

  const htmlComponents = {
    screensaver: <ScreenSaver />,
    macos_intro: <MacOS sceneTitle="INTRO" />,
    macos_decrypt: <MacOS sceneTitle="DECRYPT" />,
  };

  const nodeListRef = useRef<any[]>([]);

  nodeListRef.current = [];

  allScenesList.forEach((scene) => {
    nodeListRef.current.push({
      sceneTitle: scene.title,
      modelName: scene.model,
      ref: useRef<any>(null), //TODO: fix this lol...
      //@ts-ignore
      geometry: scene.model && nodes[scene.model].geometry,
      //@ts-ignore
      html: scene.html && htmlComponents[scene.html],
    });
  });

  const [currentHoveredArtifact, setCurrentHoveredArtifact] = useState();

  return (
    <>
      <Outline
        selection={currentHoveredArtifact}
        blendFunction={BlendFunction.SCREEN} // set this to BlendFunction.ALPHA for dark outlines
        edgeStrength={20} // the edge strength
        pulseSpeed={0.0} // a pulse speed. A value of zero disables the pulse effect
        visibleEdgeColor={0xff2400} // the color of visible edges
        kernelSize={KernelSize.LARGE} // blur kernel size
        blur={false} // whether the outline should be blurred
        xRay={false} // indicates whether X-Ray outlines are enabled
      />
      {nodeListRef.current.map((node, index) => (
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
