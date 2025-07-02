import { Howl } from "howler";
import { useEffect, useRef, useCallback } from "react";
import { useShouldPlaySound } from "../stores/SceneStore";

// Global audio pool to reuse Howl instances
const audioPool = new Map<string, Howl>();

const getOrCreateHowl = (src: string): Howl => {
  if (!audioPool.has(src)) {
    audioPool.set(
      src,
      new Howl({
        src: [src],
        html5: false, // Use Web Audio for better performance
        loop: true,
        preload: true,
        volume: 0.5, // Default volume
      })
    );
  }
  return audioPool.get(src)!;
};

export function SoundController() {
  const shouldPlaySound = useShouldPlaySound();
  const currentSound = useRef<Howl | null>(null);
  const fadeTimeout = useRef<number | null>(null);

  // Memoized play handler
  const playSound = useCallback(() => {
    if (currentSound.current) return; // Already playing

    const howl = getOrCreateHowl("/sound/Conoid Tone.mp3");
    currentSound.current = howl;

    // Fade in for smoother start
    howl.volume(0);
    howl.play();
    howl.fade(0, 0.5, 500); // Fade in over 500ms
  }, []);

  // Memoized stop handler
  const stopSound = useCallback(() => {
    if (!currentSound.current) return;

    const howl = currentSound.current;

    // Clear any existing fade timeout
    if (fadeTimeout.current) {
      clearTimeout(fadeTimeout.current);
      fadeTimeout.current = null;
    }

    // Fade out for smoother stop
    howl.fade(howl.volume(), 0, 300); // Fade out over 300ms

    fadeTimeout.current = setTimeout(() => {
      howl.stop();
      currentSound.current = null;
    }, 300);
  }, []);

  useEffect(() => {
    if (shouldPlaySound) {
      playSound();
    } else {
      stopSound();
    }

    // Cleanup on unmount
    return () => {
      if (fadeTimeout.current) {
        clearTimeout(fadeTimeout.current);
      }
      if (currentSound.current) {
        currentSound.current.stop();
        currentSound.current = null;
      }
    };
  }, [shouldPlaySound, playSound, stopSound]);

  return null;
}
