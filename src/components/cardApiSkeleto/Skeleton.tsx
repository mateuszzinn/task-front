const CardApiSkeleton = () => (
  <div className="p-4 border rounded-lg shadow-md bg-gray-900 text-white w-72 text-center">
    <div className="min-w-[254px] min-h-[288px] bg-gray-700 animate-pulse"></div>
    <div className="flex justify-center flex-col items-center animate-pulse gap-1">
      <h2 className="text-lg font-bold mt-2 max-w-[150px] min-w-[150px] min-h-[28px] bg-gray-700"></h2>
      <h2 className="max-w-[150px] min-w-[150px] min-h-[28px] bg-gray-700"></h2>
      <h2 className="max-w-[150px] min-w-[150px] min-h-[28px] bg-gray-700"></h2>
    </div>
  </div>
);

export default CardApiSkeleton