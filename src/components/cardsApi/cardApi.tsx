import useCharacter from "@/app/hooks/useCharacter";

export default function CharacterCard({ id }: { id: number }) {
  const { character, loading, error } = useCharacter(id);

  if (loading)
    return (
      <div className="p-4 border rounded-lg shadow-md bg-gray-900 text-white w-72 text-center">
        <div className="min-w-[254px] min-h-[288px] bg-gray-700 animate-pulse"></div>
        <div className="flex justify-center flex-col items-center animate-pulse gap-1">
          <h2 className="text-lg font-bold mt-2 max-w-[150px] min-w-[150px] min-h-[28px] bg-gray-700"></h2>
          <h2 className="max-w-[150px] min-w-[150px] min-h-[28px] bg-gray-700"></h2>
          <h2 className="max-w-[150px] min-w-[150px] min-h-[28px] bg-gray-700"></h2>
        </div>
      </div>
    );
  if (error) return <p className="text-red-500">Erro: {error}</p>;

  return (
    <div className="p-4 border rounded-lg shadow-md bg-gray-900 text-white w-72 text-center">
      <img
        src={character?.imageUrl}
        alt={character?.fullName}
        className="rounded-md w-full h-72 object-cover"
      />
      <h2 className="text-lg font-bold mt-2">{character?.fullName}</h2>
      <p className="text-sm text-gray-300">{character?.title}</p>
      <p className="text-sm italic text-gray-400">{character?.family}</p>
    </div>
  );
}
