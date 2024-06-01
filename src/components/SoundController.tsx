import { Howl } from "howler";
import { useEffect, useRef } from "react";

export function SoundController({}: {}) {
  const howler = useRef<Howl | null>(null);

  useEffect(() => {
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
  }, []); // React only to changes in currentSceneTitle

  return null; // This component does not render anything
}
