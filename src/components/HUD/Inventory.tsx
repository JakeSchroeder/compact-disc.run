export function Inventory({ hudProps }: { hudProps: any }) {
  const { title, year, place, description, clue, nextClue } = hudProps;

  return (
    <>
      <div
        style={{
          backgroundImage: `url(/images/diary-bg.png)`,
          backgroundSize: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="text-black font-bold grid grid-cols-2 absolute p-32 gap-16 z-10 left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[850px] scale-50 lg:scale-75 xl:scale-100"
      >
        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-start space-y-3">
            <h1 className="text-base">TITLE: {title}</h1>
            <h2 className="">YEAR: {year}</h2>
            <h2 className="">PLACE: {place} </h2>
            <h2 className="">CLUE: {clue} </h2>
            <p className="">DESCRIPTION: {description}</p>
          </div>
          <h2 className="">NEXT CLUE: {nextClue}</h2>
        </div>

        <div className="relative w-full h-full">
          <img className="absolute -top-28 right-32 z-20" src="/images/paperclip.png" alt="paper clip" />
          <div className="absolute -top-11 right-0 left-[68px]">
            <img width={324} height={324} src={hudProps.image} alt={hudProps.title} className="rotate-[13.5deg]" />
          </div>
        </div>
      </div>
    </>
  );
}
