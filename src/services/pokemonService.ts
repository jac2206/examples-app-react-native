import axios from "axios";
import type { Pokemon } from "../types/pokemon";

export async function getPokemon(name: string) {
  const response = await axios.get<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${name.trim().toLowerCase()}`,
  );
  return response.data;
}
