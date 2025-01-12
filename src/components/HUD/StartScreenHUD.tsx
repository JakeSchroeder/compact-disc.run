import { useSceneStore } from "../../stores/SceneStore";
import logo from "../../assets/svg/logo.svg";
import { useEffect, useState } from "react";
export function StartScreenHUD({ pointerLockSelector }: { pointerLockSelector: string }) {
  return (
    <div id={pointerLockSelector} className="absolute inset-0 w-full h-full z-50">
      <div className="w-[420px] flex flex-col overflow-hidden text-white bg-black bg-opacity-70 absolute left-8 top-8 bottom-8 z-10">
        <div className="p-8 bg-black">
          <img src={logo} alt="logo" className="w-full h-40" />
        </div>
        <div className="overflow-y-scroll scrollbar scrollbar-thumb-white scrollbar-track-[#ffffff10] h-full">
          {/* // TODO: need to figure out overscroll issue */}
          <div className="p-8 space-y-8">
            <div className="space-y-2">
              <h2 className="text-xl">Read me</h2>
              <p className="text-white text-opacity-70">
                It is my pleasure to inform you of your successful user candidacy. You have been selected to be the{" "}
                <span className="text-base text-white">[83th]</span> player of my game.
              </p>
            </div>
            <div className="h-px bg-white bg-opacity-30 w-full"></div>
            <div className="space-y-2">
              <h2 className="text-xl">Player Requirements</h2>
              <ul className="text-white text-opacity-70">
                <li>- Toaster / Any PC or Laptop</li>
                <li>- At least 1920 x 1080</li>
                <li>- Some outside the box thinking</li>
                <li>- Share on Twitter</li>
              </ul>
            </div>
            <div className="h-px bg-white bg-opacity-30 w-full"></div>
            <div className="space-y-2">
              <h2 className="text-xl">
                Changelog [
                <a className="underline text-base" href="/changelog.txt" target="_blank">
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
      </div>
      <div
        className={`w-[370px] right-8 text-[#666] text-right h-auto py-4 px-8  bg-black bg-opacity-70 top-8 absolute text-sm  z-10`}
      >
        <QuoteSwitcher />
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

const quotes = [
  "The mind restlessly awaits. \n Sooth thyself and cherish the day.",
  "The spirit humbly kneels.\nLift thy voice and bless Him.",
  "The vessel endures storms.\nGuide thy course and heed wisdom.",
  "The pilgrim journeys forth.\nTrust thy heart and conquer doubt.",
  "The steward awaits dawn.\nServe thy brother and find peace.",
];

const QuoteSwitcher = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setQuoteIndex((prev) => (prev + 1) % quotes.length);
        setIsVisible(true);
      }, 700);
    }, 5700);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p className={`duration-700 transition-opacity whitespace-pre-line ${isVisible ? "opacity-100" : "opacity-0"}`}>
      {quotes[quoteIndex]}
    </p>
  );
};

function PlayMenu() {
  const { setCurrentSceneIndex, setShouldPlaySound } = useSceneStore((state) => state);

  const [isSoundOn, setIsSoundOn] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isHintsOn, setIsHintsOn] = useState(true);

  return (
    <div className="flex flex-col w-[380px] absolute right-8 bottom-8  bg-black bg-opacity-70 z-10">
      <div className="p-8 text-white flex flex-col items-center space-y-4">
        <h2 className="text-xl">In game settings:</h2>
        <div className="space-y-3">
          <div className="flex">
            <input
              onChange={(e) => {
                setIsSoundOn(e.currentTarget.checked);
              }}
              checked={isSoundOn}
              type="checkbox"
              className="mr-2"
            />
            <label>Play sound? {isSoundOn ? "[Yes]" : "[No]"}</label>
          </div>
          <div className="flex">
            <input
              onChange={(e) => {
                setIsFullscreen(e.currentTarget.checked);
              }}
              checked={isFullscreen}
              type="checkbox"
              className="mr-2"
            />
            <label>Fullscreen? {isFullscreen ? "[Yes]" : "[No]"}</label>
          </div>
          <div className="flex">
            <input
              onChange={(e) => {
                setIsHintsOn(e.currentTarget.checked);
              }}
              checked={isHintsOn}
              type="checkbox"
              className="mr-2"
            />
            <label>Show hints? {isHintsOn ? "[Yes]" : "[No]"}</label>
          </div>
        </div>
      </div>
      <button
        className="border-2 border-white border-opacity-30 h-24 text-4xl text-white bg-black hover:border-opacity-100"
        onClick={() => {
          if (isFullscreen) {
            document.body.requestFullscreen();
          }
          setShouldPlaySound(isSoundOn);
          setCurrentSceneIndex(1);
        }}
      >
        PLAY
      </button>
    </div>
  );
}
