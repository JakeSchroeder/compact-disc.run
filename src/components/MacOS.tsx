import { Html } from "@react-three/drei";
import { CSSProperties, Fragment, useState } from "react";

//FUTURE: add current date time subtract by 10 minutes.
const readme = (
  <p className="">
    If you are reading this... well by god, the inter dimensional load balancer worked! <br />
    <br />
    Or shall I say, sort of worked... It seems, you are stuck in here and I don't have anyway to reboot the servers and
    get you out. There is a door in the back but its locked and needs a pin.
    <br />
    <br />
    There's gotta be a way to get that pin...
  </p>
);

const decryptReadme = (
  <p className="">
    Good news, I ran some AI event prediction models and it seems like the door pin is hidden in the encrypted file.{" "}
    <br /> <br />
    We just need to figure out a way to get into it. <br /> <br />
    Also, worth noting the AI model decided to take a nap halfway through the prediction. And so we had to do a dump of
    the token state... unfort you will have to manually look for any patterns associated with the data. See if theres
    any patterns of numbers etc. Who knows these DARPA guys always leave a back door.
  </p>
);

const keypadPinReadme = <p>Heres the pin: 1999</p>;

export function MacOS({ sceneTitle }: { sceneTitle: string }) {
  const [currentPopover, setCurrentPopover] = useState({
    title: "",
    show: false,
  });

  const [isDecrypt, setIsDecrypt] = useState(false);
  const [showDecryptPopup, setShowDecryptPopup] = useState(false);
  const [showKeyPadPin, setShowKeyPadPin] = useState(false);

  const surfaceClassNames =
    "bg-[--surface] border-t border-t-white border-b border-b-black shadow-[inset_0_-1px_0_#999999]";

  return (
    <>
      <Html
        transform
        distanceFactor={0.32}
        position={[-1.767, 1.22, -1.751]}
        rotation={[-0.228, 0.772, 0.16]}
        className={`relative w-full h-full`}
      >
        <div className="w-[780px] h-[550px] overflow-hidden">
          <div
            className={`macos bg-[url('/os/project-x-os-wallpaper.jpg')] bg-cover w-full h-full relative`}
            style={
              {
                "--surface": "#dddddd",
                "--border": "#999999",
                "--shadow": "#222222",
              } as CSSProperties
            }
          >
            <div className="bg-[url(/os/shadow.png)] opacity-70 bg-cover absolute inset-0 w-full h-full z-50 pointer-events-none"></div>
            <header className={`${surfaceClassNames} -mt-px px-2 h-6 w-full text-sm`}>
              <div className="relative h-full w-full flex items-center justify-between ">
                <div className="flex items-center space-x-4 h-full">
                  {[
                    {
                      title: "Apple",
                    },
                    {
                      title: "File",
                    },
                    {
                      title: "Edit",
                    },
                    {
                      title: "View",
                    },
                    {
                      title: "Special",
                    },
                    {
                      title: "Help",
                    },
                  ].map((item, index) => (
                    <Fragment key={index}>
                      {item.title === "Apple" ? (
                        <button
                          className="w-8 h-full hover:bg-[#333399] flex items-center justify-center -mr-2"
                          onMouseEnter={() => {
                            setCurrentPopover({
                              title: item.title,
                              show: true,
                            });
                          }}
                          onMouseLeave={() => {
                            setTimeout(() => {
                              setCurrentPopover({
                                title: item.title,
                                show: false,
                              });
                            }, 5000);
                          }}
                        >
                          <img className="w-5 h-5 -ml-1" src="/os/apple-pixel.png" />
                        </button>
                      ) : (
                        <button
                          className="h-full"
                          onMouseEnter={() => {
                            setCurrentPopover({
                              title: item.title,
                              show: true,
                            });
                          }}
                          onMouseLeave={() => {
                            setTimeout(() => {
                              setCurrentPopover({
                                title: item.title,
                                show: false,
                              });
                            }, 5000);
                          }}
                        >
                          {item.title}
                        </button>
                      )}
                    </Fragment>
                  ))}
                </div>
                <div className="flex items-center space-x-4 h-full">
                  <button>5:33</button>
                  <button>U.S.</button>
                  <div className="w-2 h-5 border-l border-l-white border-r border-r-[--border] bg-[--surface]"></div>
                  <button>Finder</button>
                </div>
                {[
                  {
                    title: "Apple",
                    items: ["About This Computer"],
                  },
                  {
                    title: "File",
                    items: ["New Document", "Open Document"],
                  },
                  {
                    title: "Edit",
                    items: ["About This Computer"],
                  },
                  {
                    title: "View",
                    items: ["About This Computer"],
                  },
                  {
                    title: "Special",
                    items: ["About This Computer"],
                  },
                  {
                    title: "Help",
                    items: ["About This Computer"],
                  },
                ].map((item, index) => (
                  <ul
                    key={index}
                    style={{
                      left: index * 32,
                    }}
                    className={`${
                      currentPopover.title === item.title && currentPopover.show === true ? "block" : "hidden"
                    } ${surfaceClassNames} min-w-16 min-h-full absolute top-[24px] z-10 left-0 bg-[--surface] border-r border-black shadow-[3px_0px_0_#222222]`}
                  >
                    {item.items.map((item, index) => (
                      <li key={index} className="p-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </header>
            <main className="w-full h-full relative p-4">
              {/* Window */}
              {showDecryptPopup === true && (
                <div
                  className={`flex flex-col space-y-4 opacity-100 p-2 transition-all duration-1000 ease-in  bg-[--surface] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 w-[400px] border border-black`}
                >
                  <label>Enter Password (numbers only)</label>
                  <input
                    type="text"
                    className="w-full h-10 border border-dotted border-black"
                    onChange={(e) => {
                      if (e.target.value === "2001200220042008200920102013201420152016201720182022") {
                        setIsDecrypt(true);
                      }
                    }}
                  />
                  <div className="flex justify-between">
                    <div>Hint (Password Length: 4 * 15)</div>
                    <button
                      className="border border-black px-2 h-8 bg-gray-100"
                      onClick={() => {
                        if (isDecrypt) {
                          setShowDecryptPopup(false);
                          setShowKeyPadPin(true);
                        }
                      }}
                    >
                      Unlock .zip
                    </button>
                  </div>
                </div>
              )}
              <div
                className={`opacity-100 transition-all duration-1000 ease-in  bg-[--surface] absolute top-4 left-4 w-[520px] border border-black`}
              >
                <div
                  className={`px-2 pb-2 border-t w-full   border-white border-l border-r border-r-[--border] border-b border-b-[--border]`}
                >
                  <header className="flex items-center space-x-2 text-sm">
                    <div className="w-full flex flex-col">
                      {Array(6)
                        .fill(0)
                        .map((_, index) => (
                          <div key={index} className="border-t border-t-white h-px border-b border-b-[--border]"></div>
                        ))}
                    </div>
                    <div>Readme.txt</div>
                    <div className="w-full flex flex-col">
                      {Array(6)
                        .fill(0)
                        .map((_, index) => (
                          <div key={index} className="border-t border-t-white h-px border-b border-b-[--border]"></div>
                        ))}
                    </div>
                  </header>
                  <div className="border border-[--border] w-full h-full ">
                    <div className="border border-black w-full">
                      <div className="bg-white w-full text-2xl h-[400px] whitespace-pre-wrap p-4 overflow-auto">
                        {!showKeyPadPin ? (
                          <>
                            {sceneTitle === "DECRYPT" && decryptReadme}
                            {sceneTitle === "INTRO" && readme}
                          </>
                        ) : (
                          keypadPinReadme
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Macintosh HD desktop file */}
              <div className="absolute top-5 right-10 flex space-y-1 flex-col items-center cursor-not-allowed">
                <img src="/os/hd.png" className="w-10" />
                <div className="bg-white bg-opacity-35 px-1 text-sm">Macintosh HD</div>
              </div>
              {/* Readme desktop file */}
              <div className="absolute top-32 right-10 flex space-y-1 flex-col items-center cursor-pointer">
                <img src="/os/document.png" className="w-10" />
                <div className="bg-white bg-opacity-90 border border-black px-1 text-sm">Readme.txt</div>
              </div>
              {/* Readme desktop file */}
              <div
                className={`absolute top-56 right-10 flex space-y-1 flex-col items-center ${
                  sceneTitle === "DECRYPT" ? "cursor-pointer" : "cursor-not-allowed "
                }`}
                onClick={() => {
                  if (sceneTitle === "DECRYPT") setShowDecryptPopup(!showDecryptPopup);
                }}
              >
                <img src="/os/27.png" className="w-10" />
                <div
                  className={`bg-white ${sceneTitle === "DECRYPT" ? "bg-opacity-90" : "bg-opacity-35"} px-1 text-sm`}
                >
                  Encrypted_Keypad_Stuff.zip
                </div>
              </div>
              {/* Trash desktop file */}
              <div className="absolute bottom-10 right-10 flex space-y-1 flex-col items-center cursor-not-allowed">
                <img src="/os/trash.png" className="w-10" />
                <div className="bg-white bg-opacity-35 px-1 text-sm">Trash</div>
              </div>
            </main>
          </div>
        </div>
      </Html>
    </>
  );
}
