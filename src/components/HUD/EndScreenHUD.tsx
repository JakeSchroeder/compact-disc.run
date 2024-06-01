import { useSceneStore } from "../../stores/SceneStore";

export function EndScreenHUD({
  pointerLockSelector,
}: {
  pointerLockSelector: string;
}) {
  const { setCurrentSceneIndex } = useSceneStore((state) => state);

  return (
    <div
      id={pointerLockSelector}
      className="w-full h-full absolute z-10 inset-0 bg-black text-white flex justify-center items-center"
    >
      <div className="space-y-8">
        <h1>Congrats, you got out!</h1>
        <p className="max-w-prose">
          I hope you enjoyed that experience and what my initiative is all about
          with making the web weird again. Thanks for the support!
        </p>
        <ul>
          <li>Created by Jake Schroeder</li>
          <li>Models by Jake Schroeder</li>
          <li>Textures by Jake Schroeder</li>
          <li>Programming by Jake Schroeder</li>
          <li>Writing by Jake Schroeder</li>
          <li>Music by Higher Intelligence Agency (HIA)</li>
        </ul>
        <div className="flex space-x-8 items-center">
          <a href="https://google.com" className="underline">
            GO BACK TO YOUR INTERNET
          </a>
          <div>or</div>
          <button
            className="py-2 px-4 border border-white"
            onClick={() => {
              setCurrentSceneIndex(0);
            }}
          >
            PLAY AGAIN?
          </button>
        </div>
      </div>
    </div>
  );
}
