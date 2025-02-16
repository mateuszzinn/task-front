import useCharacter, { Character } from "@/app/hooks/useCharacter";
import { Button } from "../ui/button";

export default function CharacterCard({ character }: { character: Character }) {
  const { error, addToFavorites, removeFromFavorites, isFavorite } =
    useCharacter();

  if (error) return <p className="text-red-500">Erro: {error}</p>;

  return (
    <div
      onClick={() => addToFavorites(character)}
      className="p-4 border rounded-lg shadow-md bg-gray-900 text-white w-200px text-center min-w-200 flex-shrink-0 cursor-pointer gap-1"
    >
      <img
        src={character?.imageUrl}
        alt={character?.fullName}
        className="rounded-md w-full h-72 object-cover"
      />
      <h2 className="text-lg font-bold mt-2">{character?.fullName}</h2>
      <p className="text-sm text-gray-300">{character?.title}</p>
      <p className="text-sm italic text-gray-400">{character?.family}</p>
      {character.isFavorite ? (
        <Button
          variant={"destructive"}
          onClick={() => removeFromFavorites(character)}
        >
          Remover
        </Button>
      ) : (
        <Button
          variant={"ghost"}
          onClick={() => addToFavorites(character)}
          disabled={isFavorite(character)}
        >
          Adicionar
        </Button>
      )}
    </div>
  );
}
