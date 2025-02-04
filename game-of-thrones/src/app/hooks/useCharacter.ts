'use client'

import { useState, useEffect } from "react";

interface Character {
  id: number;
  fullName: string;
  title: string;
  family: string;
  imageUrl: string;
}

export default function useCharacter(id: number) {
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCharacter() {
      try {
        setLoading(true);
        const numero = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
        const response = await fetch(`https://thronesapi.com/api/v2/Characters/${numero}`);
        if (!response.ok) {
          throw new Error("Erro ao buscar personagem");
        }
        const data: Character = await response.json();
        setCharacter(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    }

    fetchCharacter();
  }, [id]);

  return { character, loading, error };
}
