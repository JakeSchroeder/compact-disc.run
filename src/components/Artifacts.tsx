import { createRef, Fragment, RefObject, useMemo, useState, useCallback, memo } from "react";
import { Outline } from "@react-three/postprocessing";
import { BlendFunction, KernelSize } from "postprocessing";
import { allScenesList } from "../lib/sceneUIData";
import { MacOS } from "./MacOS";
import { ScreenSaver } from "./ScreenSaver";
import { useCurrentSceneIndex, useIsPlayer, useSceneTitle, useSetIsHovering } from "../stores/SceneStore";
import { useGLTF } from "@react-three/drei";
import { useLoadingStore } from "../stores/LoadingStore";

const htmlComponents = {
  screensaver: <ScreenSaver />,
  macos_intro: <MacOS sceneTitle="INTRO" />,
  macos_decrypt: <MacOS sceneTitle="DECRYPT" />,
};

// Memoized mesh component to prevent unnecessary re-renders
const ArtifactMesh = memo(({ node, materials, currentSceneIndex, onPointerOver, onPointerLeave }: any) => (
  <mesh
    visible={node.modelName === "diary" && currentSceneIndex > 4 ? false : true}
    ref={node.ref}
    geometry={node.geometry}
    material={materials.environment}
    onPointerOver={onPointerOver}
    onPointerLeave={onPointerLeave}
  />
));

export const Artifacts = memo(() => {
  const currentSceneTitle = useSceneTitle();
  const setIsHovering = useSetIsHovering();
  const currentSceneIndex = useCurrentSceneIndex();
  const isPlayer = useIsPlayer();
  const sceneLoading = useLoadingStore((state) => state.sceneLoading);

  const { nodes, materials } = useGLTF("/models/scene-draco.glb");

  const nodeList = useMemo(
    () =>
      allScenesList.map((scene, index) => ({
        id: `${scene.title}-${index}`, // Add stable ID
        sceneTitle: scene.title,
        modelName: scene.model,
        ref: createRef<any>(),
        //@ts-ignore
        geometry: scene.model && nodes[scene.model]?.geometry,
        //@ts-ignore
        html: scene.html && htmlComponents[scene.html],
      })),
    [nodes]
  );

  console.log(nodeList);

  const [currentHoveredArtifact, setCurrentHoveredArtifact] = useState<RefObject<any> | undefined>(undefined);

  const handlePointerOver = useCallback(
    (nodeRef: RefObject<any>, sceneTitle: string, hasHtml: boolean) => {
      if (currentSceneTitle === sceneTitle && !hasHtml) {
        setCurrentHoveredArtifact(nodeRef);
        setIsHovering(true);
      }
    },
    [currentSceneTitle, setIsHovering]
  );

  const handlePointerLeave = useCallback(() => {
    setCurrentHoveredArtifact(undefined);
    setIsHovering(false);
  }, [setIsHovering]);

  const baseMesh = useMemo(
    () => (
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.base?.geometry}
        material={materials.environment}
      />
    ),
    //@ts-ignore
    [nodes.base?.geometry, materials.environment]
  );

  const outlineSelection = useMemo(
    () => (!isPlayer ? undefined : currentHoveredArtifact),
    [isPlayer, currentHoveredArtifact]
  );

  return (
    <>
      <Outline
        selection={outlineSelection}
        blendFunction={BlendFunction.SCREEN}
        edgeStrength={20}
        pulseSpeed={0.0}
        visibleEdgeColor={0xff2400}
        kernelSize={KernelSize.LARGE}
        blur={false}
        xRay={false}
      />
      {nodeList.map((node) => (
        <Fragment key={node.id}>
          {node.html && currentSceneTitle === node.sceneTitle && !sceneLoading.isLoading && node.html}
          {node.geometry && (
            <ArtifactMesh
              node={node}
              materials={materials}
              currentSceneIndex={currentSceneIndex}
              onPointerOver={() => handlePointerOver(node.ref, node.sceneTitle, !!node.html)}
              onPointerLeave={handlePointerLeave}
            />
          )}
        </Fragment>
      ))}
      {baseMesh}
    </>
  );
});
