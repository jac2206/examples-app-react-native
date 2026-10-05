import { useState } from "react";
import { getPokemon } from "../services/pokemonService";
import type { Pokemon } from "../types/pokemon";

export function usePokemon() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const search = async (name: string) => {
    if (!name.trim()) return;
    setLoading(true);
    setError("");
    try {
      setPokemon(await getPokemon(name));
    } catch {
      setPokemon(null);
      setError("No encontramos ese Pokémon. Prueba con otro nombre.");
    } finally {
      setLoading(false);
    }
  };
  return { pokemon, loading, error, search };
}
