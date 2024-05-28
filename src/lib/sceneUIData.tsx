import { StartScreenHUD } from "../components/HUD/StartScreenHUD";
import { IntroHUD } from "../components/HUD/IntroHUD";
import { MacOS } from "../components/MacOS";
import { ScreenSaver } from "../components/ScreenSaver";
import { PhotoHUD } from "../components/HUD/PhotoHUD";
import { Fragment } from "react/jsx-runtime";

export type TScene = {
  title: string;
  HUD: any;
  pointerLockSelector?: string;
  artifact: any;
  camera?: JSX.Element;
  cameraProps?: any;
  isPlayer?: boolean;
  isPointerLocked?: boolean;
};

export const allScenesList: TScene[] = [
  {
    title: "STARTSCREEN",
    HUD: StartScreenHUD,
    pointerLockSelector: "STARTSCREEN",
    cameraProps: {
      makeDefault: true,
      fov: 90,
      position: [0.592, 1.746, 0.7],
      rotation: [-0.529, 0.684, 0.354],
    },
    artifact: "ScreenSaver",
  },
  {
    title: "INTRO",
    HUD: IntroHUD,
    pointerLockSelector: "INTRO",
    cameraProps: {
      makeDefault: true,
      fov: 75,
      position: [-1.37, 1.45, -1.36],
      rotation: [-0.587, 0.716, 0.406],
    },
    artifact: "MacOS",
  },
  {
    title: "PHOTO",
    HUD: PhotoHUD,
    cameraProps: {
      makeDefault: true,
      fov: 90,
      position: [0.592, 1.746, 0.7],
      rotation: [-0.529, 0.684, 0.354],
    },
    isPlayer: true,
    isPointerLocked: true,
    artifact: "picture_frame",
  },
];
