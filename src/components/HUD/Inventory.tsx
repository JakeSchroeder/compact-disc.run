export function Inventory({ inventoryHUDProps }: { inventoryHUDProps: any }) {
  const { title, year, place, description } = inventoryHUDProps;
  return (
    <>
      <div className="absolute z-10 left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[732px] bg-black bg-opacity-90">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-white">{title}</h1>
          <h2 className="text-lg text-white">{year}</h2>
          <h2 className="text-lg text-white">{place}</h2>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </>
  );
}
