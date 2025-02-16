"use client";

import CharacterCard from "@/components/cardsApi/cardApi";
import { Button } from "@/components/ui/button";
import useCharacter from "../hooks/useCharacter";
import CardApiSkeleton from "@/components/cardApiSkeleto/Skeleton";
import { useState } from "react";

export default function PersonagemPage() {
  const { characters, loading, favoritos } = useCharacter();
  const [type, setType] = useState<"ALL" | "FAVS">("ALL");

  return (
    <>
      <Button onClick={() => setType("ALL")}>Todos</Button>
      <Button onClick={() => setType("FAVS")}>Favoritos</Button>
      <main className="flex items-center justify-center flex-wrap min-h-screen bg-gray-950 gap-4">
        {type === "ALL" &&
          characters?.map((char) => (
            <CharacterCard character={char} key={char.id} />
          ))}
        {type === "FAVS" &&
          favoritos?.map((char) => (
            <CharacterCard character={char} key={char.id} />
          ))}
        {loading && <CardApiSkeleton />}
      </main>
    </>
  );
}
