import { useSceneStore } from "../stores/SceneStore";
import logo from "../assets/svg/logo.svg";

export function StartScreen() {
  return (
    <div id="start-screen" className="absolute inset-0 w-full h-full z-50">
      <div className="w-[420px] overflow-hidden text-white bg-black bg-opacity-70 absolute left-8 top-8 bottom-8 z-10">
        <div className="p-8 bg-black">
          <img src={logo} alt="logo" className="w-full h-40" />
        </div>
        <div className="p-8 space-y-8 overflow-y-auto h-full">
          <div className="space-y-2">
            <h2 className="text-xl">Read me</h2>
            <p className="text-white text-opacity-70">
              It is my pleasure to inform you of your successful user candidacy.
              You have been selected to be the{" "}
              <span className="text-base text-white">[83th]</span> player of my
              game.
            </p>
          </div>
          <div className="h-px bg-white bg-opacity-30 w-full"></div>
          <div className="space-y-2">
            <h2 className="text-xl">Player Requirements</h2>
            <ul className="text-white text-opacity-70">
              <li>- Toaster / Any PC or Laptop</li>
              <li>- 10 minutes to spare</li>
              <li>- Open mind</li>
              <li>- Share on Twitter plz 0_o</li>
            </ul>
          </div>
          <div className="h-px bg-white bg-opacity-30 w-full"></div>
          <div className="space-y-2">
            <h2 className="text-xl">
              Changelog [
              <a
                className="underline text-base"
                href="/changelog.txt"
                target="_blank"
              >
                Read all
              </a>
              ]
            </h2>
            <ul className="text-white text-opacity-70">
              <li>- 06-01-24 Launched!</li>
              <li>- Before that... dev.</li>
              <li>- Before that... birth.</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`right-8 text-[#666] text-right whitespace-pre-wrap h-auto py-4 px-8  bg-black bg-opacity-70 top-8 absolute  text-sm  z-10`}
      >
        {`The mind restlessly awaits. \n Sooth thyself and cherish the day.`}
      </div>

      <PlayMenu />
      <p className="text-center absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-white text-opacity-30">
        Version 1.111111111111111 (random-hash-thing-token-build-id)
        <br />
        Copyright © 2024 Jake Schroeder. All rights reserved.
      </p>
    </div>
  );
}

function PlayMenu() {
  const setCurrentSceneIndex = useSceneStore(
    (state) => state.setCurrentSceneIndex
  );
  return (
    <div className="flex flex-col w-[380px] absolute right-8 bottom-8  bg-black bg-opacity-70 z-10">
      <div className="p-8 text-white flex flex-col items-center space-y-4">
        <h2 className="text-xl">
          {/* <h2 className="text-xl before:content-[''] before:absolute before:h-px before:w-8 before:bg-white before:-left-12 before:top-1/2 after:content-[''] after:absolute after:h-px after:w-8 after:bg-white after:-right-12 after:top-1/2 relative"> */}
          In game settings:
        </h2>
        <div className="space-y-3">
          <div className="flex">
            <input
              onChange={() => {}}
              checked
              value="1"
              type="checkbox"
              className="mr-2"
            />
            <label>Play sound? [Yes]</label>
          </div>
          <div className="flex">
            <input
              onChange={() => {}}
              checked
              value="1"
              type="checkbox"
              className="mr-2"
            />
            <label>Fullscreen? [Yes]</label>
          </div>
          <div className="flex">
            <input
              onChange={() => {}}
              checked
              value="1"
              type="checkbox"
              className="mr-2"
            />
            <label>Show credits? [Yes]</label>
          </div>
        </div>
      </div>
      <button
        className="border-2 border-white h-24 text-4xl text-white bg-black"
        onClick={() => {
          document.body.requestFullscreen();
          setCurrentSceneIndex(1);
        }}
      >
        PLAY
      </button>
    </div>
  );
}
