import { StartScreenHUD } from "../components/HUD/StartScreenHUD";
import { IntroHUD } from "../components/HUD/IntroHUD";
import { PhotoHUD } from "../components/HUD/PhotoHUD";
import { KeypadHUD } from "../components/HUD/KeypadHUD";
import { InventoryHUD } from "../components/HUD/InventoryHUD";
import { KeypadScreenHUD } from "../components/HUD/KeypadScreenHUD";
import { DecryptHUD } from "../components/HUD/DecryptHUD";
import { DecryptScreenHUD } from "../components/HUD/DecryptScreenHUD";
import { EndScreenHUD } from "../components/HUD/EndScreenHUD";

export type TScene = {
  title: string;
  HUD: any;
  pointerLockSelector?: string;
  cameraProps?: any;
  isPlayer?: boolean;
  isPointerLocked?: boolean;
  html?: string;
  model?: string;
  inventoryHUDProps?: any;
};

export const allScenesList: TScene[] = [
  {
    title: "STARTSCREEN",
    HUD: StartScreenHUD,
    pointerLockSelector: "STARTSCREEN",
    cameraProps: {
      fov: 90,
      position: [0.592, 1.746, 0.7],
      rotation: [-0.529, 0.684, 0.354],
    },
    html: "screensaver",
  },
  {
    title: "INTRO",
    HUD: IntroHUD,
    pointerLockSelector: "INTRO",
    cameraProps: {
      fov: 75,
      position: [-1.37, 1.45, -1.36],
      rotation: [-0.587, 0.716, 0.406],
    },
    html: "macos",
  },
  {
    title: "PHOTO",
    HUD: PhotoHUD,
    cameraProps: {
      fov: 90,
    },
    isPlayer: true,
    model: "picture_frame",
  },
  {
    title: "PHOTO_INVENTORY",
    pointerLockSelector: "INVENTORY",
    HUD: InventoryHUD,
    inventoryHUDProps: {
      title: "Family Photo",
      year: "2003",
      place: "Benihana's",
      description: "A photo of my family",
    },
    cameraProps: {
      fov: 90,
    },
  },
  {
    title: "DECRYPT",
    HUD: DecryptHUD,
    cameraProps: {
      fov: 90,
    },
    isPlayer: true,
    model: "pc",
  },
  {
    title: "DECRYPTSCREEN",
    HUD: DecryptScreenHUD,
    pointerLockSelector: "DECRYPTSCREEN",
    cameraProps: {
      fov: 75,
      position: [-1.37, 1.45, -1.36],
      rotation: [-0.587, 0.716, 0.406],
    },
    model: "pc",
    html: "macos",
  },
  {
    title: "KEYPAD",
    HUD: KeypadHUD,
    cameraProps: {
      fov: 90,
    },
    isPlayer: true,
    model: "keypad",
  },
  {
    title: "KEYPADSCREEN",
    pointerLockSelector: "KEYPADSCREEN",
    HUD: KeypadScreenHUD,
    cameraProps: {
      fov: 90,
    },
  },

  {
    title: "ENDSCREEN",
    HUD: EndScreenHUD,
    pointerLockSelector: "ENDSCREEN",
    cameraProps: {
      fov: 90,
    },
    html: "screensaver",
  },
];
