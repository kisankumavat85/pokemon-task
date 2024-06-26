import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import List from "./List";

export default function HomePage() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [currentUrl, setCurrentUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"
  );

  useEffect(() => {
    const fetchData = async () => {
      console.log("-----------------------");
      const res = await fetch(currentUrl);
      const data = await res.json();
      setPokemons(data.results);
      setNextUrl(data.next);
      setPrevUrl(data.previous);
    };
    fetchData();
  }, [currentUrl]);

  return (
    <main className="container w-full">
      <List pokemons={pokemons} />
      <div className="">
        <div>
          {prevUrl && (
            <Button onClick={() => setCurrentUrl(prevUrl)}>Prev</Button>
          )}
          {nextUrl && (
            <Button onClick={() => setCurrentUrl(nextUrl)}>Next</Button>
          )}
        </div>
      </div>
    </main>
  );
}
