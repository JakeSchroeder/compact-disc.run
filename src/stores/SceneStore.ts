import { create } from "zustand";

export interface ISceneStore {
  currentSceneIndex: number;
  setCurrentSceneIndex: (sceneIndex: number) => void;
  isHovering: boolean;
  setIsHovering: (setIsHovering: boolean) => void;
  shouldPlaySound: boolean;
  setShouldPlaySound: (setShouldPlaySound: boolean) => void;
  sceneLoading: any;
  setSceneLoading: (setSceneLoading: any) => void;
}

export const useSceneStore = create<ISceneStore>((set) => ({
  currentSceneIndex: 0,
  setCurrentSceneIndex: (sceneIndex: number) => set(() => ({ currentSceneIndex: sceneIndex })),
  isHovering: false,
  shouldPlaySound: false,
  setIsHovering: (setIsHovering: boolean) => set(() => ({ isHovering: setIsHovering })),
  setShouldPlaySound: (setShouldPlaySound: boolean) => set(() => ({ shouldPlaySound: setShouldPlaySound })),
  sceneLoading: {
    isLoading: true,
  },
  setSceneLoading: (setSceneLoading: any) => set(() => ({ sceneLoading: setSceneLoading })),
}));
