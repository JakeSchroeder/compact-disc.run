// import { useGLTF } from "@react-three/drei";
// import { useThree } from "@react-three/fiber";
// import { KTX2Loader } from "three/examples/jsm/Addons.js";
// import { Mesh } from "three";
// import { useRef, useState } from "react";
// import { Outline } from "@react-three/postprocessing";
// import { BlendFunction, KernelSize } from "postprocessing";

// export function Artifacts({
//   currentSceneIndex,
// }: {
//   currentSceneIndex: number;
// }) {
//   const { gl } = useThree();
//   const { nodes, materials } = useGLTF(
//     "/models/scene.glb",
//     false,
//     false,
//     (loader) => {
//       const ktx2Loader = new KTX2Loader().setTranscoderPath(`/compression/`);
//       //@ts-ignore
//       loader.setKTX2Loader(ktx2Loader.detectSupport(gl));
//     }
//   );

//   //Temporary
//   let artifactNodeList = Object.keys(nodes).filter(
//     (node) =>
//       node === "picture_frame" ||
//       node === "skateboard" ||
//       node === "pc" ||
//       node === "keypad"
//   );

//   const allArtifactRefs = useRef(
//     Object.keys(artifactNodeList).map((_) => useRef<Mesh>(null))
//   );
//   const [currentArtifactRef, setCurrentArtifactRef] = useState<any>();

//   console.log(allArtifactRefs.current[currentSceneIndex]);
//   return (
//     <>
//       <Outline
//         selection={currentArtifactRef}
//         selectionLayer={10} // selection layer
//         blendFunction={BlendFunction.SCREEN} // set this to BlendFunction.ALPHA for dark outlines
//         edgeStrength={20} // the edge strength
//         pulseSpeed={0.0} // a pulse speed. A value of zero disables the pulse effect
//         visibleEdgeColor={0xff2400} // the color of visible edges
//         kernelSize={KernelSize.LARGE} // blur kernel size
//         blur={false} // whether the outline should be blurred
//         xRay={false} // indicates whether X-Ray outlines are enabled
//       />
//       {artifactNodeList.map((node, index) => (
//         <mesh
//           ref={allArtifactRefs.current[currentSceneIndex]}
//           key={index}
//           castShadow
//           receiveShadow
//           //@ts-ignore
//           geometry={nodes[node].geometry}
//           material={materials.environment}
//           onPointerOver={() => {
//             setCurrentArtifactRef(allArtifactRefs.current[currentSceneIndex]);
//           }}
//           onPointerLeave={() => {
//             setCurrentArtifactRef(undefined);
//           }}
//         />
//       ))}
//     </>
//   );
// }

import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader.js";
import { useRef, useState, useEffect, createRef } from "react";
import { Outline } from "@react-three/postprocessing";
import { BlendFunction, KernelSize } from "postprocessing";

export function Artifacts() {
  const { gl } = useThree();
  const { nodes, materials } = useGLTF(
    "/models/scene.glb",
    false,
    false,
    (loader) => {
      const ktx2Loader = new KTX2Loader().setTranscoderPath("/compression/");
      // @ts-ignore
      loader.setKTX2Loader(ktx2Loader.detectSupport(gl));
    }
  );

  // List of nodes to create refs for
  const artifactNames = ["picture_frame", "skateboard", "pc", "keypad"];

  // Create refs for each artifact
  const refs = useRef(
    artifactNames.reduce((acc, name) => {
      acc[name] = createRef();
      return acc;
    }, {})
  );

  // State to hold the current ref to be outlined
  const [currentArtifactRef, setCurrentArtifactRef] = useState(null);

  // Set the initial ref to the picture_frame on load
  useEffect(() => {
    setCurrentArtifactRef(refs.current["picture_frame"]);
  }, []); // Empty dependency array ensures this runs only once after initial render

  return (
    <>
      <Outline
        selection={currentArtifactRef ? currentArtifactRef : null}
        selectionLayer={10}
        blendFunction={BlendFunction.SCREEN}
        edgeStrength={20}
        pulseSpeed={0.0}
        visibleEdgeColor={0xff2400}
        kernelSize={KernelSize.LARGE}
        blur={false}
        xRay={false}
      />
      {artifactNames.map(
        (name) =>
          nodes[name] && (
            <mesh
              ref={refs.current[name]}
              key={name}
              castShadow
              receiveShadow
              geometry={nodes[name].geometry}
              material={materials.environment}
              onPointerOver={() => setCurrentArtifactRef(refs.current[name])}
              onPointerLeave={() => setCurrentArtifactRef(null)}
            />
          )
      )}
    </>
  );
}
