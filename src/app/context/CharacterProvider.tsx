'use client'
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Character } from "../hooks/useCharacter";

interface FavsContextInterface {
    favoritos: Character[];
    setFavoritos: Dispatch<SetStateAction<Character[]>>;
}

export const CharacterContext = createContext<FavsContextInterface>({favoritos: [], setFavoritos: () => {}});

export const CharacterProvider = ({children}: {children: React.ReactNode}) => {
    const [favoritos, setFavoritos] = useState<Character[]>([]);

    return <CharacterContext.Provider value={{favoritos, setFavoritos}}>
        {children}
    </CharacterContext.Provider>
}