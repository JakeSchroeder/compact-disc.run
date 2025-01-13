import { useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { WebGLRenderer } from "three";
import { KTX2Loader } from "three/examples/jsm/Addons.js";

const SCENE_URL = "/models/scene-draco-ktx.glb";

// Configure the loader once at module level
let isLoaderConfigured = false;
const configureLoader = (gl: WebGLRenderer) => {
  if (!isLoaderConfigured) {
    const ktx2Loader = new KTX2Loader().setTranscoderPath(`/compression/`).detectSupport(gl);

    // Configure the global GLTF loader
    useGLTF.preload(SCENE_URL, true, false, (loader) => {
      //@ts-ignore
      loader.setKTX2Loader(ktx2Loader);
    });

    isLoaderConfigured = true;
  }
};

export function useBaseSceneModel() {
  const { gl } = useThree();

  // Configure loader before attempting to use it
  useMemo(() => configureLoader(gl), [gl]);

  const result = useGLTF(SCENE_URL);

  return useMemo(() => {
    const { nodes, materials } = result;
    return { nodes, materials };
  }, [result]);
}
