"use client";

import { useState, useEffect, useContext } from "react";
import { CharacterContext } from "../context/CharacterProvider";

export interface Character {
  id: number;
  fullName: string;
  title: string;
  family: string;
  imageUrl: string;
  isFavorite?: boolean;
}

export default function useCharacter() {
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const { favoritos, setFavoritos } = useContext(CharacterContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCharacter() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://thronesapi.com/api/v2/Characters`
        );
        if (!response.ok) {
          throw new Error("Erro ao buscar personagem");
        }
        const data: Character[] = await response.json();
        setCharacters(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    }

    fetchCharacter();
  }, []);

  const addToFavorites = (character: Character) => {
    if (favoritos.every((fav) => fav.id !== character.id)) 
      setFavoritos([...favoritos, {...character, isFavorite: true}]);
  };

  const removeFromFavorites = (character: Character) => {
    setFavoritos(favoritos.filter((fav) => fav.id !== character.id));
  };

  const isFavorite = (character: Character) => {
    return favoritos.some((fav) => fav.id === character.id)
  };

  return { characters, loading, error, addToFavorites, favoritos, removeFromFavorites, isFavorite };
}
