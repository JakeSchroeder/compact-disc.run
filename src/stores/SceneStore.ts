import { create } from "zustand";
import { allScenesList, TScene } from "../lib/sceneUIData";
import { useMemo } from "react";

interface ISceneState {
  currentSceneIndex: number;
  isHovering: boolean;
  shouldPlaySound: boolean;
}

interface ISceneActions {
  setCurrentSceneIndex: (sceneIndex: number) => void;
  setIsHovering: (isHovering: boolean) => void;
  setShouldPlaySound: (shouldPlaySound: boolean) => void;
}

type ISceneStore = ISceneState & ISceneActions;

const useSceneStore = create<ISceneStore>((set) => ({
  currentSceneIndex: 0,
  isHovering: false,
  shouldPlaySound: false,

  setCurrentSceneIndex: (sceneIndex: number) => set({ currentSceneIndex: sceneIndex }),
  setIsHovering: (isHovering: boolean) => set({ isHovering }),
  setShouldPlaySound: (shouldPlaySound: boolean) => set({ shouldPlaySound }),
}));

// Atomic selectors
export const useCurrentSceneIndex = () => useSceneStore((state) => state.currentSceneIndex);
export const useIsHovering = () => useSceneStore((state) => state.isHovering);
export const useShouldPlaySound = () => useSceneStore((state) => state.shouldPlaySound);
export const useSetCurrentSceneIndex = () => useSceneStore((state) => state.setCurrentSceneIndex);
export const useSetIsHovering = () => useSceneStore((state) => state.setIsHovering);
export const useSetShouldPlaySound = () => useSceneStore((state) => state.setShouldPlaySound);

// Memoized computed selectors
export const useCurrentScene = () => {
  const currentSceneIndex = useCurrentSceneIndex();
  return useMemo(() => allScenesList[currentSceneIndex], [currentSceneIndex]);
};

export const useHudProps = () => {
  const currentScene = useCurrentScene();
  return useMemo(() => currentScene.hudProps, [currentScene]);
};

export const useCameraProps = () => {
  const currentScene = useCurrentScene();
  return useMemo(() => currentScene.cameraProps, [currentScene]);
};

export const useIsPlayer = () => {
  const currentScene = useCurrentScene();
  return useMemo(() => currentScene.isPlayer ?? false, [currentScene]);
};

export const useSceneTitle = () => {
  const currentScene = useCurrentScene();
  return useMemo(() => currentScene.title, [currentScene]);
};

export { useSceneStore };
