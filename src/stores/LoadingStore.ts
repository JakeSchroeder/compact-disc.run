import { create } from "zustand";

interface ISceneLoading {
  isLoading: boolean;
  progress?: number;
  item?: string;
}

export interface ILoadingStore {
  sceneLoading: ISceneLoading;
  setSceneLoading: (sceneLoading: ISceneLoading) => void;
}

export const useLoadingStore = create<ILoadingStore>((set) => ({
  sceneLoading: {
    isLoading: true,
    progress: 0,
    item: "Initializing...",
  },
  setSceneLoading: (sceneLoading: ISceneLoading) =>
    set((state) => ({
      sceneLoading: { ...state.sceneLoading, ...sceneLoading },
    })),
}));
