"use client";

import React from "react";
import ListItem from "./ListItem";

const List = ({ pokemons }) => {
  return (
    <div className="grid grid-cols-2 border w-full">
      {pokemons?.map((poke) => (
        <ListItem key={poke.name} poke={poke} />
      ))}
    </div>
  );
};

export default List;
