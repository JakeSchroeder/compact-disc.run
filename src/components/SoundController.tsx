import { Howl } from "howler";
import { useEffect, useRef } from "react";
import { useShouldPlaySound } from "../stores/SceneStore";

export function SoundController() {
  const shouldPlaySound = useShouldPlaySound();
  const howler = useRef<Howl | null>(null);

  useEffect(() => {
    if (shouldPlaySound === true) {
      if (!howler.current) {
        howler.current = new Howl({
          src: ["/sound/Conoid Tone.mp3"],
          html5: true,
          loop: true,
        });
      }

      howler.current.play();

      return () => {
        if (howler.current) {
          howler.current.stop();
          howler.current.unload();
          howler.current = null;
        }
      };
    }
  }, [shouldPlaySound]);

  return null;
}
