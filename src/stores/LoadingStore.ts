import { create } from "zustand";

export interface ILoadingStore {
  sceneLoading: any;
  setSceneLoading: (setSceneLoading: any) => void;
}

export const useLoadingStore = create<ILoadingStore>((set) => ({
  sceneLoading: {
    isLoading: true,
  },
  setSceneLoading: (setSceneLoading: any) => set(() => ({ sceneLoading: setSceneLoading })),
}));
