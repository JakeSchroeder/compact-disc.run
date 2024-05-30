export function Inventory({ inventoryHUDProps }: { inventoryHUDProps: any }) {
  const { title, year, place, description, clue, nextClue } = inventoryHUDProps;
  return (
    <>
      <div className="text-white grid grid-cols-2 absolute p-12 gap-16 z-10 left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[732px] bg-black bg-opacity-90">
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
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[1px] bg-white bg-opacity-10"></div>
        <div className="flex flex-col justify-between">
          {/* <div className="flex flex-col items-start space-y-3">
            <h1 className="">TITLE: Unknown</h1>
            <h2 className="">YEAR: Unknown</h2>
            <h2 className="">PLACE: Unknown</h2>
            <p className="">DESCRIPTION: Unknown</p>
          </div>
          <h2>NEXT CLUE: Unknown</h2> */}
        </div>
      </div>
    </>
  );
}
