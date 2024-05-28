import { Html } from "@react-three/drei";
import { CSSProperties, Fragment, useRef, useState } from "react";

//FUTURE: add current date time subtract by 10 minutes.
const readme = `
  - If you are reading this then... the Internet Wormhole Experiment worked! Atleast partly, it seems you will be stuck in there forever if we cant find a way out... uh oh! \n\n Take a look around and see what you can find out, maybe theres a code to that door? 
 `;

export function MacOS() {
  const [currentPopover, setCurrentPopover] = useState({
    title: "",
    show: false,
  });

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
            {/* <div className="bg-[url(/os/dust.png)] bg-opacity-15 bg-cover absolute inset-0 w-full h-full z-40 pointer-events-none"></div> */}
            <header
              className={`${surfaceClassNames} -mt-px px-2 h-6 w-full text-sm`}
            >
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
                          <img
                            className="w-5 h-5 -ml-1"
                            src="/os/apple-pixel.png"
                          />
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
                      currentPopover.title === item.title &&
                      currentPopover.show === true
                        ? "block"
                        : "hidden"
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
              <div
                className={`opacity-100 transition-all duration-1000 ease-in  bg-[--surface] absolute top-4 left-4 w-[520px] border border-black`}
              >
                <div
                  className={`px-2 pb-2 border-t w-full  border-white border-l border-r border-r-[--border] border-b border-b-[--border]`}
                >
                  <header className="flex items-center space-x-2 text-sm">
                    <div className="w-full flex flex-col">
                      {Array(6)
                        .fill(0)
                        .map((_, index) => (
                          <div
                            key={index}
                            className="border-t border-t-white h-px border-b border-b-[--border]"
                          ></div>
                        ))}
                    </div>
                    <div>Readme.txt</div>
                    <div className="w-full flex flex-col">
                      {Array(6)
                        .fill(0)
                        .map((_, index) => (
                          <div
                            key={index}
                            className="border-t border-t-white h-px border-b border-b-[--border]"
                          ></div>
                        ))}
                    </div>
                  </header>
                  <div className="border border-[--border] w-full">
                    <div className="border border-black w-full">
                      <div className="bg-white w-full text-2xl whitespace-pre-wrap px-4">
                        {readme}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Macintosh HD desktop file */}
              <div className="absolute top-5 right-10 flex space-y-1 flex-col items-center cursor-not-allowed">
                <img src="/os/hd.png" className="w-10" />
                <div className="bg-white bg-opacity-35 px-1 text-sm">
                  Macintosh HD
                </div>
              </div>
              {/* Readme desktop file */}
              <div className="absolute top-32 right-10 flex space-y-1 flex-col items-center cursor-pointer">
                <img src="/os/document.png" className="w-10" />
                <div className="bg-white bg-opacity-90 border border-black px-1 text-sm">
                  Readme.txt
                </div>
              </div>
              {/* Readme desktop file */}
              <div className="absolute top-56 right-10 flex space-y-1 flex-col items-center cursor-not-allowed">
                <img src="/os/shell.png" className="w-10" />
                <div className="bg-white bg-opacity-35 px-1 text-sm">
                  Decrypter.sh
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
