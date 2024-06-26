"use server";

export const getPokemon = async (offset: number, limit = 10) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );
  const data = await res.json();
  return data;
};
