'use client'

import CharacterCard from "@/components/cardsApi/cardApi";

export default function PersonagemPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-950 gap-4">
      <CharacterCard id={1} />
      <CharacterCard id={2} />
      <CharacterCard id={3} />
      <CharacterCard id={4} />
    </main>
  );
}
