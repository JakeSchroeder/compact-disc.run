import { create } from "zustand";

export interface ISceneStore {
  currentSceneIndex: number;
  setCurrentSceneIndex: (sceneIndex: number) => void;
  isHovering: boolean;
  setIsHovering: (setIsHovering: boolean) => void;
  shouldPlaySound: boolean;
  setShouldPlaySound: (setShouldPlaySound: boolean) => void;
}

export const useSceneStore = create<ISceneStore>((set) => ({
  currentSceneIndex: 0,
  setCurrentSceneIndex: (sceneIndex: number) => set(() => ({ currentSceneIndex: sceneIndex })),
  isHovering: false,
  shouldPlaySound: false,
  setIsHovering: (setIsHovering: boolean) => set(() => ({ isHovering: setIsHovering })),
  setShouldPlaySound: (setShouldPlaySound: boolean) => set(() => ({ shouldPlaySound: setShouldPlaySound })),
}));
